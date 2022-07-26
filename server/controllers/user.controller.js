require("dotenv").config();
const User = require("../models/user.model")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = (req, res) => {
    User.create(req.body) 
    .then((newUser) => {
        res.json({newUser});
    })
    .catch((err) => {
        res.status(400).json({err});
    });
};

const register = (req, res) => {
    User.create(req.body)
        then(user => {
            const userToken = jwt.sign({
                id: user._id
            }, process.env.SECRET_KEY);

            res
                .cookie("usertoken", userToken, secret, {
                    httpOnly: true
                })
                .json({ msg: "success!", user: user });
        })
        .catch(err => res.json(err));
    };

const login = async(req, res) => {
        const user = await User.findOne({ email: req.body.email });

        if(user === null) {
            return res.sendStatus(400);
        }

        const correctPassword = await bcrypt.compare(req.body.password, user.password);

        if(!correctPassword) {
            return res.sendStatus(400);
        }

        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY)

        res
            .cookie("usertoken", userToken, secret, {
                httpOnly: true
            })
            .json({ msg: "success!" });
    };

const logout = (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    }

const getLoggedInUser = (req, res) => {
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
    getLoggedInUser,
    updateUser,
    deleteUser,
    register,
    login,
    logout,
};