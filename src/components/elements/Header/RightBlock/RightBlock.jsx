import React, {
    useContext,
    useEffect,
    useState
} from 'react';
import css from './RightBlock.module.scss';
import { Link } from 'react-router-dom';
import {
    Badge,
    Button
} from '@mui/material';
import NotificationIcon from '../../../../assets/svg/NotificationIcon.svg';
import PlusIcon from '../../../../assets/svg/PlusIcon.svg';
import {AddressContext} from "../../../../context";

const RightBlock = (key, value) => {
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
            setUserAccount(acc[0]);
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
                const acc = await metamask.request({ method: 'eth_accounts' })
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
            <Link to='/createStream'>
            <Badge
                variant='dot'
                color='primary'
            >
                <img
                    src={NotificationIcon}
                    alt='notification icon'
                />
            </Badge>
            </Link>
            <Link to='/createStream'>
                <Badge>
                    <img
                        src={PlusIcon}
                        alt='notification icon'
                    />
                </Badge>
            </Link>
            <div className={css.AuthBlock}>
                {
                    userAccount ? <div>
                        <span>{userAccount.substring(0, 5)}...{userAccount.substring(userAccount.length - 5)} </span>
                    </div> : <Link to='/login'>
                        <Button
                            variant='outlined'
                            color='primary'
                            onClick={() => connectWallet()}
                        >
                            Log in via Metamask
                        </Button>
                    </Link>
                }

                {
                    userAccount ? <div>
                        success
                    </div> : <p>connect your wallet</p>
                }
            </div>
        </div>
    );
};

export default RightBlock;