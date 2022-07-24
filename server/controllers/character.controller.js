const Character = require("../models/character.model")

const createCharacter = (req, res) => {
    Character.create(req.body) 
    .then((newCharacter) => {
        res.json({newCharacter});
    })
    .catch((err) => {
        res.status(400).json({err});
    });
};

const getAllCharacters = (req, res) => {
    Character.find()
    .then((allCharacters) => {
        res.json(allCharacters);
    })
    .catch((err) => {
        res.status(400).json({err});
    });
};

const getOneCharacter = (req, res) => {
    User.findOne({_id: req.params.id})
    .then((queriedCharacter) => {
        res.json(queriedCharacter);
    })
    .catch((err) => {
        res.status(400).json({err});
    });
};

const updateCharacter = (req, res) => {
    User.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true,
    })
    .then((updatedCharacter) => {
        res.json({updatedCharacter});
    })
    .catch((err) => {
        res.status(400).json({err});
    });
};

const deleteCharacter = (req, res) => {
    User.deleteOne({_id: req.params.id})
    .then((deletedCharacter) => {
        res.json({deletedCharacter});
    })
    .catch((err) => {
        res.status(400).json({err});
    });
};

module.exports = {
    createCharacter,
    getAllCharacters,
    getOneCharacter,
    updateCharacter,
    deleteCharacter,
};