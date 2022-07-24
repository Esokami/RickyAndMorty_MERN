const User = require("../models/user.model")

const createUser = (req, res) => {
    User.create(req.body) 
    .then((newUser) => {
        res.json({newUser});
    })
    .catch((err) => {
        res.status(400).json({err});
    });
};

const getOneUser = (req, res) => {
    User.findOne({_id: req.params.id})
    .then((queriedUser) => {
        res.json(queriedUser);
    })
    .catch((err) => {
        res.status(400).json({err});
    });
};

const updateUser = (req, res) => {
    User.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true,
    })
    .then((updatedUser) => {
        res.json({updatedUser});
    })
    .catch((err) => {
        res.status(400).json({err});
    });
};

const deleteUser = (req, res) => {
    User.deleteOne({_id: req.params.id})
    .then((deletedUser) => {
        res.json({deletedUser});
    })
    .catch((err) => {
        res.status(400).json({err});
    });
};

module.exports = {
    createUser,
    getOneUser,
    updateUser,
    deleteUser,
};