const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    lastname: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    favorites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book",
            trim: true,
        }
    ]
    
}, {timestamps : true});


const User = mongoose.model("User", userSchema);

module.exports = User;