import React from  'react';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [errors, setErrors] = useState({});
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
            .catch((err) => {console.log('axios register error', err);setErrors(err.res.data.errors);});
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="first">first Name</label>
                    <input type="text" name="firstName" value={user.firstName} onChange={handleChange}/>
                    {errors.firstName ? ( <p className="text-danger">{errors.firstName.message}</p>) : null}
                </div>
                <div className='form-group'>
                    <label htmlFor="last">last Name</label>
                    <input type="text" name="lastName" value={user.lastName} onChange={handleChange}/>
                    {errors.lastName ? ( <p className="text-danger">{errors.lastName.message}</p>) : null}
                </div>
                <div className='form-group'>
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" value={user.email} onChange={handleChange}/>
                    {errors.email ? ( <p className="text-danger">{errors.email.message}</p>) : null}
                </div>      
                <div className='form-group'>
                    <label htmlFor="password">password</label>
                    <input type="text" name="password" value={user.password} onChange={handleChange}/>
                    {errors.password ? ( <p className="text-danger">{errors.password.message}</p>) : null}
                </div>
                <div className='form-group'>
                    <label htmlFor="confirmPassword">confirmPassword</label>
                    <input type="text" name="confirmPassword" value={user.confirmPassword} onChange={handleChange}/>
                    {errors.confirmPassword ? ( <p className="text-danger">{errors.confirmPassword.message}</p>) : null}
                </div>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    );
};

export default Register;