import React from 'react';
import TelegramIcon from '@mui/icons-material/Telegram';
import css from './Footer.module.scss';

const list = ['Zaur', 'Umar', 'Akzhan', 'Aibek', 'Nursultan']
const Footer = () => {
    return (
        <footer className={css.ContainerBlock}>
            <div className={css.TextBlock}>
                by 13Lab © 2022
            </div>
            <ul className={css.ListBlock}>
                {list.map(( item, idx )=> <li><TelegramIcon /> {item} </li>)}
            </ul>
        </footer>
    );
};

export default Footer;