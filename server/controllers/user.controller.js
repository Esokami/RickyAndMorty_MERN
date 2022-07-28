
const User = require("../models/user.model")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = (req, res) => {
    User.create(req.body)
        .then(user => {
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

const login = (req, res) => {
    User.findOne({email: req.body.email})
        .then((userRecord) => {
            if(userRecord === null) {
                res.status(400).json({message: "Oops. That didn't work."})
            }
            else {
                bcrypt.compare(req.body.password, userRecord.password)
                    .then((isPasswordValid) => {
                        if(isPasswordValid) {
                            console.log("Password looks good!");
                            res.cookie(
                                "usertoken",
                                jwt.sign(
                                    {
                                        id: userRecord._id,
                                        email: userRecord.email,
                                        username: userRecord.username
                                    },
                                    process.env.SECRET_KEY
                                ),
                                {
                                    httpOnly: true,
                                    expires: new Date(Date.now() + 10000000)
                                }
                            ).json({
                                message: "You've Successfully logged in!",
                                userLoggedIn: userRecord.username,
                                userId: userRecord._id
                            })
                        }
                    })
            }
        })
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
    getLoggedInUser,
    updateUser,
    deleteUser,
    register,
    login,
    logout,
};