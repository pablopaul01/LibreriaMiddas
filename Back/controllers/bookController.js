const Book = require("../models/bookSchema");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2

const createBook = async (req, res) => {
    const { title, autor, year, resume, gender } = req.body;
    const { path } = req.file;
    const book = await Book.findOne({ title });
    try {
        if (book) {
            return res.status(400).json({
                mensaje: "El libro ya se encuentra creado",
                status: 400
            })
        }
        const imgCloud= await cloudinary.uploader.upload( req.file.path );
        const newBook = new Book({
            title,
            autor,
            year,
            resume,
            gender,
            img: imgCloud.secure_url
        })
        await newBook.save();
        return res.status(201).json({
            mensaje: "Programa creado correctamente",
            status: 201,
            newBook
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intente más tarde",
            status: 500,
            error: error.message
        })
    }
}

const getAllBooks = async (req, res) => {
    try {
    const books = await Book.find();
    if (!books || books.length === 0) {
        return res.status(400).json({
            mensaje: "No se encontraron libros cargados",
            status: 400
        })
    }
    return res.status(201).json({
        mensaje: "Libros encontrados exitosamente",
        status: 201,
        books
    })
  } catch (err) {
    res.status(500).json({ 
        mensaje: err.message,
        status: 500
    });
  }
};  

const getBookById = async (req, res) => {
    const { id } = req.params;

    const book = await Book.findById(id);
    try {
        if (!book) {
            return res.status(400).json({
                mensaje: "Libro no encontrado",
                status: 400
            })
        }
        return res.status(201).json({
            mensaje: "Libro encontrado exitosamente",
            status: 201,
            book
        })

    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intente más tarde",
            status: 500,
            error: error.message
        })
    }
}

const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, autor, year, resume, gender } = req.body;
    console.log(req.body);
    try {
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                mensaje: "Id del libro no válido",
                status: 400
            })
        }
        const book = await Book.findByIdAndUpdate(id, {
            ...req.body,
            title,
            autor, 
            year,
            resume,
            gender
        }, { new: true });
        return res.status(200).json({
            mensaje: "Libro modificado correctamente",
            status: 200,
            book
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intente más tarde",
            status: 500,
            error: error.message
        })
    }
}

const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({
                mensaje: 'El libro no se encuentra cargado',
                status: 404
            });
        }
        const publicId = book.img.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy(publicId);
        await book.deleteOne();
        return res.status(200).json({
            mensaje: 'Libro eliminado correctamente',
            status: 200
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Hubo un error, intente más tarde',
            status: 500,
            error: error.message
        });
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
}