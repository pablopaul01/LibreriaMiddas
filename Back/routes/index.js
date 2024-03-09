const router = require("express").Router();
const { register, getAllUsers, getUserById, login, recoverPass, resetPass } = require("../controllers/userController");

//rutas de usuarios
router.post("/register", register);
router.get("/users", getAllUsers);
router.get("/user/:id", getUserById);
router.get("/login", login);
router.get('/user/recover', recoverPass);
router.put('/user/reset/:id/:token', resetPass);

module.exports = router;