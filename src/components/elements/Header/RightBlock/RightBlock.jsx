import React, {
    useEffect,
    useState
} from 'react';
import css from './RightBlock.module.scss';
import { Link } from 'react-router-dom';
import {
    Badge,
    Button
} from '@mui/material';
import { ReactComponent as NotificationIcon } from '../../../../assets/svg/NotificationIcon.svg';
import { ReactComponent as PlusIcon } from '../../../../assets/svg/PlusIcon.svg';
import MetaMaskLogo from '../../../../assets/webp/metamask-2728406-2261817.webp'

const RightBlock = () => {
    const [userAccount, setUserAccount] = useState('');

    let eth;

    if (typeof window !== 'undefined') {
        eth = window.ethereum;
    }

    async function connectWallet(metamask = eth) {
        try {
            // check if metamask is installed
            if (!metamask) {
                return alert('please install metamask to proceed');
            }
            // access the account
            const acc = await metamask.request({ method: 'eth_requestAccounts' });
            setUserAccount(acc);
            localStorage.setItem('address', acc[0]);
            window.location.reload();
        } catch (error) {
            console.log(error);
            throw new Error('No ethereum object found');
        }
    }

    useEffect(() => {
        const checkWalletConnect = async (metamask = eth) => {
            try {
                // check if metamask is installed
                if (!metamask) {
                    return alert('please install metamask to continue')
                }
                const acc = await metamask.request({ method: 'eth_accounts' });

                if (acc.length) {
                    setUserAccount(acc[0])
                } else {
                    localStorage.removeItem('address');
                }
            } catch (error) {
                console.log(error);
                throw new Error('No Ethereum object')
            }
        }

        checkWalletConnect().then();
    }, [eth]);

    return (
        <div className={css.ContainerBlock}>
            <Badge
                variant='dot'
                color='primary'
            >
                <NotificationIcon />
            </Badge>
            <Link to='/createStream'>
                <Badge>
                    <PlusIcon />
                </Badge>
            </Link>
            {
                userAccount ? <div>
                    <span>{userAccount.substring(0, 5)}...{userAccount.substring(userAccount.length - 5)} </span>
                </div> : <Link to='/login'>
                    <Button
                        variant='outlined'
                        color='primary'
                        onClick={() => connectWallet()}
                    >
                        Log in
                    </Button>
                </Link>
            }

            {
                userAccount && <Link to='/profile'>
                    <img
                        src={MetaMaskLogo}
                        alt='METAMASK LOGO'
                    />
                </Link>
            }
        </div>
    );
};

export default RightBlock;