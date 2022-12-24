import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import WifiIcon from '@mui/icons-material/Wifi';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import css from './SliderNav.module.sass';

const SidebarNav = () => {
    // const { isAuth, setIsAuth } = useContext(AuthContext);

    const isLinkActive = (navData) => {
        return navData.isActive ? css.ActiveLink : css.InActiveLink
    };

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <NavLink
                to='/'
                className={isLinkActive}
                onMouseEnter={!isAuth ? handlePopoverOpen : undefined}
                onMouseLeave={!isAuth ? handlePopoverClose : undefined}
            >
                <HomeIcon />
            </NavLink>
            <NavLink
                to='/manageUsers'
                className={isLinkActive}
                onMouseEnter={!isAuth ? handlePopoverOpen : undefined}
                onMouseLeave={!isAuth ? handlePopoverClose : undefined}
            >
                <PeopleAltIcon />
            </NavLink>
            <NavLink
                to='/manageWifi'
                className={isLinkActive}
                onMouseEnter={!isAuth ? handlePopoverOpen : undefined}
                onMouseLeave={!isAuth ? handlePopoverClose : undefined}
            >
                <WifiIcon />
            </NavLink>
            <NavLink
                onClick={logout}
                to='/login'
                className={isLinkActive}
            >
                <LogoutIcon />
            </NavLink>
        </>
    );
};

export default SidebarNav;