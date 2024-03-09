const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    autor: {
        type: String,
        trim: true,
        required: true
    },
    year: {
        type: String,
        trim: true,
        required: true
    },
    resume: {
        type: String,
        trim: true,
        required: true
    },
    gender: {
        type: String,
        trim: true,
        required: true
    },
    img: {
        type: String,
        trim: true,
    }
    
}, {timestamps : true});


const Book = mongoose.model("Book", bookSchema);

module.exports = Book;