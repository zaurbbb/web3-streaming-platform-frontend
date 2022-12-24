import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NavbarLogo from '../../../../assets/svg/NavbarLogo.svg';
import css from './LeftBlock.module.scss';

const LeftBlock = () => {
    return (
        <div className={css.ContainerBlock}>
            <MenuIcon className='secondary-light-color'/>
            <img
                src={NavbarLogo}
                alt='webapp logo'
                className={css.LogoImg}
            />
        </div>
    );
};

export default LeftBlock;