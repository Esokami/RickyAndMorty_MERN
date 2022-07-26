/* eslint-disable jsx-a11y/anchor-is-valid */
/* Importing the necessary libraries for the component to work. */
import React from  'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Roboto:wght@300&family=ZCOOL+QingKe+HuangYou&display=swap" rel="stylesheet"></link>
/**
 * It's a function that takes in a setLogin function as a prop, and returns a form that when submitted,
 * sends a post request to the server with the user's email and password, and if the request is
 * successful, sets the login state to true and navigates to the home page.
 * @returns The return is a form with a label, input, label, input, and button.
 */
const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({email: '',password: '',});
    const handleChange = (e) => {setUser({ ...user, [e.target.name]: e.target.value});};
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/login', user,{
            withCredentials: true,
        })
        .then((res) => {
            console.log('user successfully logged in', res.data);navigate('/CharacterList');})
        .catch((err) => console.error('login', err));
    }
    return (
        <div class="background">
            <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong">
                <a class="navbar-brand">RickyAndMorty</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/register">Register</a>
                </li>
                </ul>  
            </div>
            </nav>
        <div class="wrapper">
        <form onSubmit={handleSubmit}>
            <input class="inputs" type="email" name="email" placeholder='Email' value={user.email} onChange={handleChange}/>
            <input class="inputs" type="text" name="password"  placeholder='Password' value={user.password} onChange={handleChange}/>
                <button class="login-reg-button"type="submit">Login</button>
        </form>
        </div>
        </div>
    );
};

export default Login;