import React from  'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const UpdateUser = () => {
    const { id } = useParams();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [characterData, setCharacterData] = useState(""); 
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then((res) => {console.log(res.data);setFirstName(res.data.firstName);setFirstName(res.data.lastName);setEmail(res.data.email);})
            .catch((err) => console.log(err));
    }, []);
    const subtmitBot = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/user/${id}`, {firstName, lastName,email})
            .then((res) => {console.log(res);console.log(res.data);navigate("/");})
            .catch((err) => {console.log(err);});
    };
    useEffect(() => {
        axios.get(`http://localhost:8000/api/character/${id}`)
            .then((res) => {console.log(res);setCharacterData(res.data);})
            .catch((err) => console.log(err));
    }, []);
    const deletecard = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/character/${idFromBelow}`)
            .then((res) => {console.log(res);console.log(res.data); navigate("/");})
            .catch((err) => {console.log(err);});
    };
    return(
        <form onSubmit={subtmitBot}>
            <div className="user-form">
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text"className="form-control" onChange={(e) => setFirstName(e.target.value)}id="firstName"value={firstName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="LastName">Last Name:</label>
                    <input type="text"className="form-control" onChange={(e) => setLastName(e.target.value)}id="LastName"value={lastName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text"className="form-control" onChange={(e) => setEmail(e.target.value)}id="email"value={email}/>
                </div>
                <button className="btn btn-primary">Update User</button>
            </div>
            <div className="card">
                <p>Card Name: </p>
                <p>Details about: {characterData.name}</p>
                <button className="adopt" onClick={() => deletecard(characterData._id)}>Delete</button>
            </div>
        </form>
    );
};

export default UpdateUser;