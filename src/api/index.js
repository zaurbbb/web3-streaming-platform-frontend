import axios from 'axios';

export default axios.create({
    baseURL: `http://193.108.113.216:5000/api/`,
    withCredentials: true
});