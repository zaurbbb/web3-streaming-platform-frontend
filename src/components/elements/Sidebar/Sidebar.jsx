import React from 'react';
import css from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../../assets/svg/HomeIcon.svg';
import { ReactComponent as ChatIcon } from '../../../assets/svg/ChatIcon.svg';
import { ReactComponent as BankCardIcon } from '../../../assets/svg/BankCardIcon.svg';
import { ReactComponent as StarIcon } from '../../../assets/svg/StarIcon.svg';
import { ReactComponent as SettingsIcon } from '../../../assets/svg/SettingsIcon.svg';

const Sidebar = () => {
    const isLinkActive = (navData) => {
        return navData.isActive ? css.ActiveLink : css.InActiveLink
    };
    return (
        <aside className={css.Block}>
            <NavLink
                to='/'
                className={isLinkActive}
            >
                <HomeIcon />
            </NavLink>
            <NavLink
                to='/chat'
                className={isLinkActive}
            >
                <ChatIcon />
            </NavLink>
            <NavLink
                to='/bank'
                className={isLinkActive}
            >
                <BankCardIcon />
            </NavLink>
            <NavLink
                to='/starred'
                className={isLinkActive}
            >
                <StarIcon />
            </NavLink>
            <NavLink
                to='/settings'
                className={isLinkActive}
            >
                <SettingsIcon />
            </NavLink>
            {/*<NavLink*/}
            {/*    to='/unavailable'*/}
            {/*    className={isLinkActive}*/}
            {/*>*/}
            {/*    <img*/}
            {/*        src={BankCardIcon}*/}
            {/*        alt='home icon'*/}
            {/*    />*/}
            {/*</NavLink>*/}
            {/*<NavLink*/}
            {/*    to='/unavailable'*/}
            {/*    className={isLinkActive}*/}
            {/*>*/}
            {/*    <img*/}
            {/*        src={StarIcon}*/}
            {/*        alt='home icon'*/}
            {/*    />*/}
            {/*</NavLink>*/}
            {/*<NavLink*/}
            {/*    to='/unavailable'*/}
            {/*    className={isLinkActive}*/}
            {/*>*/}
            {/*    <img*/}
            {/*        src={SettingsIcon}*/}
            {/*        alt='home icon'*/}
            {/*    />*/}
            {/*</NavLink>*/}
        </aside>
    );
};

export default Sidebar;