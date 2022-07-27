const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema ({

    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    species: {
        type: String, 
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    //Likes can be incremented or decremented, instead having a slot for likes AND dislike
    likes: {
        type: Number,
        required: true
    },
    PostBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

module.exports = mongoose.model("Character", CharacterSchema);