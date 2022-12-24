import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navbar.module.scss';

const Navbar = () => {
    const navList = ['Top Streaming', 'Games', 'Broadcast'];
    return (
        <nav className={css.ContainerBlock}>
            {navList.map((listItem) => (
                <NavLink to='/'>
                    {listItem}
                </NavLink>
            ))}
        </nav>
    );
};

export default Navbar;