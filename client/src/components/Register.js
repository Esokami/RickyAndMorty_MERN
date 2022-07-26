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
        axios.post('http://localhost:8000/api/register', user,{withCredentials: true,})
            .then((res) => {
                console.log('ress', res.data);
                navigate('/characters');
            })
            .catch((err) => {console.log('axios register error', err);setErrors(err.res.data.errors);});
    }
    return (
        <div className="background-register">
            <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
                <a className="navbar-brand">RickyAndMorty</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                </li>
                </ul>  
            </div>
            </nav>
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input className="inputs"  placeholder='First Name' type="text" name="firstName" value={user.firstName} onChange={handleChange}/>
                    </div>
                    <div className='form-group'>
                        <input  className="inputs" placeholder='Last Name'type="text" name="lastName" value={user.lastName} onChange={handleChange}/>
                    </div>
                    <div className='form-group'>
                        < input className="inputs"  placeholder='Email' type="email" name="email" value={user.email} onChange={handleChange}/>
                    </div>      
                    <div className='form-group'>
                        <input  className="inputs" placeholder='Password' type="password" name="password" value={user.password} onChange={handleChange}/>
                    </div>
                    <div className='form-group'>
                        <input  className="inputs" placeholder='Confrim Password' type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange}/>
                    </div>
                    <button className="login-reg-button"type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;