const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema ({

    // image: {
    //     type: String,
    //     required: true
    // },

    card: {
        type: String,
        requried: true
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
    //this will connect character to user database
});

module.exports = mongoose.model("Character", CharacterSchema);