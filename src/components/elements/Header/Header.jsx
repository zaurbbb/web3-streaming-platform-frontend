import React, { useState } from 'react';

import css from './Header.module.scss';

import SnackbarWindow from '../../ui/windows/SnackbarWindow/SnackbarWindow';
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