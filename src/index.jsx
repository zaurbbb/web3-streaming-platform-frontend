import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@mui/material';
import { theme } from './themes/theme';

import App from './App';

import './styles/app.scss';
import './styles/colors.scss';
import './styles/index.scss';
import './styles/reset.scss';
import './styles/swiper.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
if (window.ethereum) {
    root.render(
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    );
} else {
    alert('install metamask extension!!')
}

