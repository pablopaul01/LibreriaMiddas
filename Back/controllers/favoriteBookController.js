const Book = require('../models/bookSchema');
const User = require('../models/userSchema');

const addFavoriteBook = async (req, res) => {
    const { bookId } = req.body;
    const { userId } = req.params;
    const user = await User.findById(userId);
    const book = await Book.findById(bookId);
    try {
        if (!book) {
            return res.status(404).json({
                mensaje: 'Libro no encontrado',
                status: 404
            });
        }
        if (!user) {
            return res.status(404).json({
                mensaje: 'Usuario no encontrado',
                status: 404
            });
        }
        await User.findOneAndUpdate(
            { _id: userId },
            { $push: { favorites: bookId } }
        );
        return res.status(200).json({
            mensaje: 'Libro agregado a favorito correctamente',
            status: 200
        });
    }
    catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intente más tarde",
            status: 500,
            error: error.message
        })
    }
}

module.exports = {
    addFavoriteBook
}