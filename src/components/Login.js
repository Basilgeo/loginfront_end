
import React, { useState } from 'react';
import SecurityService from '../SecurityService';


const Login = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        SecurityService.login(user)
            .then(response => {
                alert("Login successful!");
                console.log("JWT Token:", response.data);
                // You can store the token in local storage or state as needed
            })
            .catch(error => {
                console.error("There was an error logging in!", error);
                alert("Login failed");
            });
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" className="form-control" value={user.username} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" value={user.password} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;
