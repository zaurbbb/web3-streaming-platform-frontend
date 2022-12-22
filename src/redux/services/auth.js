import API from '../../api';

async function login(userData) {
    const {data} = await API.post('/users/login', userData);
    localStorage.setItem('user', JSON.stringify(data));
    return data;
}

async function register(userData) {
    const {data} = await API.post('/users/register', userData);
    localStorage.setItem('user', JSON.stringify(data));
    return data;
}

async function logout() {
    localStorage.removeItem('user');
}

export const authService = {
    login,
    logout,
    register,
};