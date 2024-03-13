const router = require("express").Router();
const upload = require("../middlewares/multer");
const { createBook, getAllBooks, getBookById, updateBook, deleteBook } = require("../controllers/bookController");
const { register, getAllUsers, getUserById, login, recoverPass, resetPass, getUserByIdPopulate } = require("../controllers/userController");
const { addFavoriteBook, removeFavoriteBook } = require("../controllers/favoriteBookController");

//rutas de usuarios
router.post("/register", register);
router.get("/users", getAllUsers);
router.get("/user/:id", getUserById);
router.get("/user/collection/:id", getUserByIdPopulate);
router.post("/login", login);
router.post('/user/recover', recoverPass);
router.put('/user/reset/:id/:token', resetPass);
router.put('/user/favorite/:userId', addFavoriteBook);
router.put('/user/favorite/remove/:userId', removeFavoriteBook)

//rutas de libros
router.post("/book", upload.single("img"), createBook);
router.get("/books", getAllBooks);
router.get("/book/:id", getBookById);
router.put("/book/:id",upload.none(), updateBook);
router.delete("/book/:id", deleteBook);

module.exports = router;