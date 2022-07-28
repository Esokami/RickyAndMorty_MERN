const User = require("../models/user.model")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_KEY; 
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

    const login = async(req,res)=> {
        const userFile = await User.findOne({email: req.body.email});
        if(!userFile){
            res.status(400).json({message: "Wrong password or email"});
        }else{
            try{
                const validPw = await bcrypt.compare(req.body.password, userFile.password)
                if(!validPw){
                    res.status(400).json({message: "Wrong password or email"});
                }else{
                    const userToken = jwt.sign(
                        {
                            _id:userFile._id,
                            email:userFile.email,
                            firstName:userFile.firstName,
                            lastName:userFile.lastName,
                        },
                        SECRET,
                    );
                    console.log('TOKEN::' , userToken);
                    res
                        .cookie('userToken', userToken,{httpOnly: true,expires: new Date(Date.now() + 100000),})
                        .json({
                            successMessage: 'User login successfully', 
                            user: {
                                _id:userFile._id,
                                email:userFile.email,
                                firstName:userFile.firstName,
                                lastName:userFile.lastName,
                            },
                        });
                }
            }catch(e){
                console.log("login error", e)
                res.status(400).json({message: "Wrong password or email"});
            }
        }
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