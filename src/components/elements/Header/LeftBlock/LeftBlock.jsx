import React from 'react';
import { ReactComponent as MenuIcon } from '../../../../assets/svg/MenuIcon.svg';
import NavbarLogo from '../../../../assets/svg/NavbarLogo.svg';
import css from './LeftBlock.module.scss';
import { Link } from 'react-router-dom';

const LeftBlock = () => {
    return (
        <div className={css.ContainerBlock}>
            <MenuIcon />
            <Link to='/'>
                <img
                    src={NavbarLogo}
                    alt='webapp logo'
                    className={css.LogoImg}
                />
            </Link>
        </div>
    );
};

export default LeftBlock;