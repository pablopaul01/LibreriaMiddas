const Book = require("../models/Book");

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

module.exports = {
    getAllBooks
}