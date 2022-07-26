import React from  'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const UpdateUser = () => {
    const { id } = useParams();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${id}`)
            .then((res) => {console.log(res.data);setFirstName(res.data.firstName);setFirstName(res.data.lastName);setEmail(res.data.email);})
            .catch((err) => console.log(err));
    }, []);
    const subtmitBot = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/user/${id}`, {firstName, lastName,email})
            .then((res) => {console.log(res);console.log(res.data);navigate("/");})
            .catch((err) => {console.log(err);});
    };
    return(

        <div  className="background-edit">
            <div className='wrapper3'>
                <form onSubmit={subtmitBot}>
                    <div className="user-form">
                        <div className="form-group">
                            <input  placeholder='First Name' type="text"className="inputs" onChange={(e) => setFirstName(e.target.value)}id="firstName"value={firstName}/>
                        </div>
                        <div className="form-group">
                            <input placeholder='Last Name' type="text"className="inputs" onChange={(e) => setLastName(e.target.value)}id="LastName"value={lastName}/>
                        </div>
                        <div className="form-group">
                            <input placeholder='Email' type="text"className="inputs" onChange={(e) => setEmail(e.target.value)}id="email"value={email}/>
                        </div>
                        <button className="btn btn-primary">Update User</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;