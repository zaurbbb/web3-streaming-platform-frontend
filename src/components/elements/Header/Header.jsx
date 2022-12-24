import React, {
    useEffect,
    useState
} from 'react';

import css from './Header.module.scss';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import SnackbarWindow from '../../ui/windows/SnackbarWindow/SnackbarWindow';
import MenuIcon from '@mui/icons-material/Menu';
import NavbarLogo from '../../../assets/svg/NavbarLogo.svg'
import Navbar from './Navbar/Navbar';
import SearchBar from './SearchBar/SearchBar';
import LeftBlock from './LeftBlock/LeftBlock';
import RightBlock from './RightBlock/RightBlock';

const Header = () => {

    const [openSnackbar, setOpenSnackbar] = useState(false);
    // const handleClickSnackbar = () => {
    //     setOpenSnackbar(true);
    // };
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') return;

        setOpenSnackbar(false);
    };

    return (
        <header className={css.ContainerBlock}>
            <LeftBlock />
            <Navbar />
            <SearchBar />
            <RightBlock />
            <SnackbarWindow
                openSnackbar={openSnackbar}
                handleCloseSnackbar={handleCloseSnackbar}
            />
        </header>
    );
};

export default Header;