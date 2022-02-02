import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const { register, handleSubmit } = useForm();
    const [ loginError, setLoginError ] = useState("");
    const navigate = useNavigate();

    const submit = data => {
        axios.post('https://ecommerce-exercise-backend.herokuapp.com/login/', data)
            .then(res => {
                localStorage.setItem("token", res.data.access);
                navigate("/home");
            })
            .catch(() => setLoginError("Invalid Credentials"));
    }

    return (
        <div className='container-login'>
            <form action="" onSubmit={handleSubmit(submit)}>
                <div className='container-data-test'>
                    <h2>Test Data</h2>
                    <div>
                        <i className="fas fa-user"></i>
                        <h4>admin@admin.com</h4>
                    </div>
                    <div>
                        <i className="fas fa-unlock-alt"></i>
                        <h4>root</h4>
                    </div>
                </div>

                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input 
                        {...register("email")}
                        type="email" 
                        required
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        {...register("password")}
                        required
                    />
                </div>
                <h3>{loginError}</h3>
                <button>Go shop</button>
            </form>
        </div>
    );
};

