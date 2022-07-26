const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema ({

    // image: {
    //     type: String,
    //     required: true
    // },

    card: {
        type: mongoose.Types.ObjectId,
        requried: true
    },
    //Likes can be incremented or decremented, instead having a slot for likes AND dislike
    likes: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Character", CharacterSchema);