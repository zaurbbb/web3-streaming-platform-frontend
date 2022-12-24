import React, {
    useEffect,
    useState
} from 'react';
import API from '../../../api/index';
import ThreeDotsLoader from '../../ui/loaders/ThreeDotsLoader/ThreeDotsLoader';
import css from './ProfilePage.module.scss';
import MetaMaskLogo from '../../../assets/webp/metamask-2728406-2261817.webp';
import { ReactComponent as STNIcon } from '../../../assets/svg/STNLogo.svg';

const ProfilePage = () => {
    const [userBalance, setUserBalance] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const resBalance = await API.get(`/token/balanceOfAddress/${localStorage.getItem('address')}`);
            setUserBalance(resBalance.data.balance * 0.1 ** 12);
        }

        fetchData()
            .then()
            .catch(error => {
                setError(error);
            });
    }, []);


    if (!userBalance) {
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
            <h1>
                Your Balance: {userBalance} STN <STNIcon/>
            </h1>
        </section>
    );
};

export default ProfilePage;