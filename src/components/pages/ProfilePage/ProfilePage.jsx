import React, {
    useEffect,
    useState
} from 'react';
import API from '../../../api/index';
import ThreeDotsLoader from '../../ui/loaders/ThreeDotsLoader/ThreeDotsLoader';
import css from './ProfilePage.module.scss';
import MetaMaskLogo from '../../../assets/webp/metamask-2728406-2261817.webp';
import { ReactComponent as STNIcon } from '../../../assets/svg/STNLogo.svg';
import { Button } from '@mui/material';

const ProfilePage = () => {
    const [userBalance, setUserBalance] = useState(null);
    const [isAddressVisible, setIsAddressVisible] = useState(false);
    const walletAddress = localStorage.getItem('address');
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const resBalance = await API.get(`/token/balanceOfAddress/${walletAddress}`);
            setUserBalance(resBalance.data.balance / 10 ** 18);
        }

        fetchData()
            .then()
            .catch(error => {
                setError(error);
            });
    }, [walletAddress]);

    function handleAddressVisible() {
        if (isAddressVisible === false) {
            setIsAddressVisible(true);
        }
        if (isAddressVisible === true) {
            setIsAddressVisible(false);
        }
    }

    if (error) {
        return <h1>{error.message}</h1>
    } else if (!userBalance && userBalance !== 0) {
        return (
            <section className={css.ContainerBlock}>
                <ThreeDotsLoader />
            </section>
        )
    }

    return (
        <section className={css.ContainerBlock}>
            <img
                src={MetaMaskLogo}
                alt='METAMASK LOGO'
            />
            <h3>
                Your Balance: {userBalance} STN <STNIcon/>
            </h3>
            <h3>
                Wallet Address: {isAddressVisible ? walletAddress : '***'}
                <Button
                    variant='outlined'
                    onClick={handleAddressVisible}
                >{isAddressVisible ? 'Hide' : 'Show'} the address</Button>
            </h3>
        </section>
    );
};

export default ProfilePage;