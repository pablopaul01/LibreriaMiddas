const mongoose = require("mongoose");
const User = require("../models/userSchema.js");
const { encryptPassword, comparePassword } = require("../utils/passwordHandler.js");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");

const getAllUsers = async (req, res) => {
    const users = await User.find()
    try {
        if (!users) {
            return res.status(404).json({
                mensaje: "No se encontraron los usuarios",
                status: 404
            })
        }

        return res.status(201).json({
            mensaje: "Los usuarios se encontraron exitosamente",
            status: 201,
            users
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intente más tarde",
            status: 500,
            error: error.message
        })
    }
}

const getUserByIdPopulate = async (req, res) => {
    const { id } = req.params;
    const user = await User.findOne({ _id: id }).populate("favorites");
    try {

        if (!user) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado",
                status: 404,
            });
        }
        return res.status(200).json({
            mensaje: "Usuario encontrado exitosamente",
            status: 200,
            user,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            mensaje: "Hubo un error, intente más tarde",
            status: 500,
            error: error.message
        });
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    try {

        if (!user) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado",
                status: 404,
            });
        }
        return res.status(200).json({
            mensaje: "Usuario encontrado exitosamente",
            status: 200,
            user,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            mensaje: "Hubo un error, intente más tarde",
            status: 500,
            error: error.message
        });
    }
};

const register = async (req, res) => {
    const { name, lastname, email, password } = req.body;
    const user = await User.findOne({ email });
    try {
        if (user) {
            return res.status(400).json({
                mensaje: "El usuario ya se encuentra registrado",
                status: 400
            })
        }
        const newUser = new User({
            name,
            lastname,
            password: encryptPassword(password),
            email
        })
        await newUser.save();
        return res.status(201).json({
            mensaje: "Usuario creado correctamente",
            status: 201,
            newUser
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intente más tarde.",
            status: 500,
            error: error.message
        })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const secret = process.env.JWT_SECRET;
    try {
        if (!user) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado",
                status: 404
            })
        }
        if (!comparePassword(password, user.password)) {
            return res.status(400).json({
                mensaje: "La contraseña es incorrecta",
                status: 400
            })
        }
        const payload = {
            sub: user._id,
            email: user.email,
            name: user.name,
            lastname: user.lastname,
            favorites: user.favorites
        }
        const token = jwt.sign(payload, secret, { algorithm: process.env.ALGORITHM });
        return res.status(200).json({
            mensaje: "Inicio de sesión exitoso",
            status: 200,
            token
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intente más tarde",
            status: 500,
            error: error.message
        })
    }
}

const recoverPass = async (req, res) => {   
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({
            mensaje: "El usuario no existe",
            status: 404
        });
    }
    const token = jwt.sign({
        id: user._id
    }, "jwt_secret_key", {expiresIn: "1d"});

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        port:587,
        auth: {
          user: 'libreriamiddas@gmail.com',
          pass: 'xipotzxoqbevtwlr'
        }
      });
      
      var mailOptions = {
        from: 'libreriamiddas@gmail.com',
        to: `${user.email}`,
        subject: 'Reset Password Link',
        html: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
        p, a, h1, h2, h3, h4, h5, h6 {font-family: 'Roboto', sans-serif !important;}
        h1{ font-size: 30px !important;}
        h2{ font-size: 25px !important;}
        h3{ font-size: 18px !important;}
        h4{ font-size: 16px !important;}
        p, a{font-size: 15px !important;}

        .claseBoton{
            width: 30%;
                background-color: #16b187;
                border: 2px solid #16b187;
                color: #000000; 
                padding: 16px 32px;
                text-align: center;
                text-decoration: none;
                font-weight: bold;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                transition-duration: 0.4s;
                cursor: pointer;
        }
        .claseBoton:hover{
            background-color: #000000;
            border: 2px solid #000000;
            color: #ffffff;
        }
        .imag{
            width: 20px;
            height: 20px;
        }
        .contA{
            margin: 0px 5px 0 5px;
        }
        .afooter{
            color: #ffffff !important; 
            text-decoration: none;
            font-size: 13px !important;
        }
    </style>
</head>
<body>
    <div style="width: 100%; background-color: #e3e3e3;">
        <div style="padding: 20px 10px 20px 10px;">
            <!-- Imagen inicial -->
            <div style="background-color: #000000; padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                <img src="https://res.cloudinary.com/dtjybx29n/image/upload/v1710107785/logo_bqpomp.png" alt="" style="width: 150px;">
            </div>
            <!-- Imagen inicial -->

            <!-- Contenido principal -->
            <div style="background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: center;">
                <h1>Recuperación de contraseña</h1>
                <p>Haz solicitado la recuperación de la contraseña de tu cuenta en Librería Middas. Para poder reestablecerla haz click en el botón que se encuentra en la parte inferior.
                </p>

                <!-- Gracias -->
                <p>Si no fuiste tu quien solicitó reestabler la contraseña considera de que alguien quiso acceder a tu cuenta.</p>
                <p style="margin-bottom: 50px;"><i>Atentamente:</i><br>Equipo Librería Middas</p>

                <!-- Botón -->
                <a class="claseBoton" href=http://localhost:5173/reset_password/${user._id}/${encodeURIComponent(token)}>Reestablecer contraseña</a>
            </div>
            <!-- Contenido principal -->

            <!-- Footer -->
            <div style="background-color: #282828; color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">

                <h4>Soporte</h4>
                <p style="font-size: 13px; padding: 0px 20px 0px 20px;">
                    Comunícate con nosotros por los siguientes medios:<br>
                    Correo: <a class="afooter" href="mailto:proyectos@pretwor.com">libreriamiddas@gmail.com</a><br>
                </p>
                <p style="background-color: black; padding: 10px 0px 10px 0px; font-size: 12px !important;">
                    © 2024 JPS, todos los derechos reservados.
                </p>
            </div>
            <!-- Footer -->



        </div>
    </div>
</body>
</html>
        `
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          return res.send({Status: "Success"})
        }
      });
}

const resetPass = async (req, res) => {
    const {id, token} = req.params
    const {password} = req.body

    jwt.verify(token, "jwt_secret_key", (err, decoded) => {
        if(err) {
            return res.json({Status: "Error with token"})
        } else {
            User.findByIdAndUpdate({_id: id}, {password: encryptPassword(password)})
                .then(u => res.send({Status: "Success"}))
                .catch(err => res.send({Status: err}))
        }
    })
}

module.exports = {
    register,
    getAllUsers,
    getUserById,
    getUserByIdPopulate,
    login,
    recoverPass,
    resetPass
}