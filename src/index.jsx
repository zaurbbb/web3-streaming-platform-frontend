import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/app.css';
import './styles/index.css';
import './styles/reset.css';
import App from './App';
import { ThemeProvider } from '@mui/material';
import { theme } from './themes/theme';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
if (window.ethereum) {
    root.render(
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    );
} else {
    alert('install metamask extension!!')
}

