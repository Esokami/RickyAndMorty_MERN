const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema ({

    image: {
        type: String,
        required: true
    },

    likes: {
        type: Number,
        required: true
    },

    dislikes: {
        type: Number,
        required: true
    }, 

});

module.exports = mongoose.model("Charatcer", CharacterSchema);