// src/components/Signup.js
import React, { useState } from 'react';
import SecurityService from '../SecurityService';

const Signup = () => {
    const [user, setUser] = useState({
        id: '',
        username: '',
        password: '',
        name: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        SecurityService.register(user)
            .then(response => {
                alert("Registration successful!");
                console.log(response.data);
            })
            .catch(error => {
                console.error("There was an error registering!", error);
                alert(error.response?.data?.message || "Registration failed");
            });
    };

    return (
        <div className="container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>ID</label>
                    <input type="text" name="id" className="form-control" value={user.id} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" value={user.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" className="form-control" value={user.username} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" value={user.password} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
