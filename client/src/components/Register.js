/* eslint-disable jsx-a11y/anchor-is-valid */
import React from  'react';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
    });
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/register', user,{withCredentials: true,})
            .then((res) => {console.log('ress', res.data);navigate('/login');})
            .catch((err) => console.log('axios register error', err));
    }
    return (
        <div class="background-register">
            <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong">
                <a class="navbar-brand">RickyAndMorty</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/login">Login</a>
                </li>
                </ul>  
            </div>
            </nav>
            <div class="wrapper">
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input class="inputs"  placeholder='First Name' type="text" name="firstName" value={user.firstName} onChange={handleChange}/>
                    </div>
                    <div className='form-group'>
                        <input  class="inputs" placeholder='Last Name'type="text" name="lastName" value={user.lastName} onChange={handleChange}/>
                    </div>
                    <div className='form-group'>
                        < input class="inputs"  placeholder='Email' type="email" name="email" value={user.email} onChange={handleChange}/>
                    </div>      
                    <div className='form-group'>
                        <input  class="inputs" placeholder='Password' type="text" name="password" value={user.password} onChange={handleChange}/>
                    </div>
                    <div className='form-group'>
                        <input  class="inputs" placeholder='Confrim Password' type="text" name="confirmPassword" value={user.confirmPassword} onChange={handleChange}/>
                    </div>
                    <button class="login-reg-button"type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;