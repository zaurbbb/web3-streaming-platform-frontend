import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navbar.module.scss';
import { navList } from '../../../../list';

const Navbar = () => {
    return (
        <nav className={css.ContainerBlock}>
            {navList.map((listItem) => (
                <NavLink
                    to='/'
                    key={listItem}
                >
                    {listItem}
                </NavLink>
            ))}
        </nav>
    );
};

export default Navbar;