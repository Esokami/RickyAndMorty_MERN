/* Importing the necessary libraries for the component to work. */
import React from  'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


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
            console.log('user successfully logged in', res.data);
            navigate('/characters');
        })
        .catch((err) => console.error('login', err));
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">email</label>
            <input type="email" name="email" value={user.email} onChange={handleChange}/>
            <label htmlFor="">password</label>
            <input type="text" name="password" value={user.password} onChange={handleChange}/>
                <button type="submit">Login</button>
        </form>
    );
};

export default Login;