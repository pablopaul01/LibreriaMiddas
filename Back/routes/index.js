const router = require("express").Router();
const upload = require("../middlewares/multer");
const { createBook, getAllBooks, getBookById, updateBook, deleteBook } = require("../controllers/bookController");
const { register, getAllUsers, getUserById, login, recoverPass, resetPass } = require("../controllers/userController");
const { addFavoriteBook, removeFavoriteBook } = require("../controllers/favoriteBookController");

//rutas de usuarios
router.post("/register", register);
router.get("/users", getAllUsers);
router.get("/user/:id", getUserById);
router.get("/login", login);
router.get('/user/recover', recoverPass);
router.put('/user/reset/:id/:token', resetPass);
router.put('/user/favorite/:userId', addFavoriteBook);
router.delete('/user/favorite/:userId', removeFavoriteBook)

//rutas de libros
router.post("/book", upload.single("img"), createBook);
router.get("/books", getAllBooks);
router.get("/book/:id", getBookById);
router.put("/book/:id", updateBook);
router.delete("/book/:id", deleteBook);

module.exports = router;