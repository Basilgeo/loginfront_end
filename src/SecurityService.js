// src/securityService.js
import axios from 'axios';

const API_URL = 'http://localhost:9099'; // Replace with your actual backend URL

class SecurityService {
    register(user) {
        return axios.post(`${API_URL}/register`, user);
    }

    login(user) {
        return axios.post(`${API_URL}/login`, user);
    }

    getUserDetails(username) {
        return axios.get(`${API_URL}/userdetails/${username}`);
    }
}

export default new SecurityService();
