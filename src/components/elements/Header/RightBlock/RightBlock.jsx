import React, {useEffect, useState} from 'react';
import css from './RightBlock.module.scss';
import {Link} from 'react-router-dom';
import {Badge, Button} from '@mui/material';
import {ReactComponent as NotificationIcon} from '../../../../assets/svg/NotificationIcon.svg';
import {ReactComponent as PlusIcon} from '../../../../assets/svg/PlusIcon.svg';
import MetaMaskLogo from '../../../../assets/webp/metamask-2728406-2261817.webp'
import api from "../../../../api";
import ThreeDotsLoader from "../../../ui/loaders/ThreeDotsLoader/ThreeDotsLoader";

const RightBlock = () => {
    const [userAccount, setUserAccount] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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
            const acc = await metamask.request({method: 'eth_requestAccounts'});
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
                const acc = await metamask.request({method: 'eth_accounts'});

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
    const handleClaim = () => {
        setIsLoading(true)
        if (Math.round(+localStorage.getItem('time')) >= 1) {
            api.post('/token/transferTo', {
                address: localStorage.getItem('address'),
                amount: Math.round(+localStorage.getItem('time'))
            }).then(res => {
                localStorage.removeItem('time');
                setIsLoading(false);
            }).catch(err => {
                console.log(err);
                setIsLoading(false);
            })
        } else {
            setIsLoading(false);
            alert('You have not enough time to claim');
        }
    }

    return (
        <div className={css.ContainerBlock}>
            {isLoading ? <ThreeDotsLoader/> :
                <Badge badgeContent={localStorage.getItem('time') ? Math.round(+localStorage.getItem('time')) : 0}
                       color="primary" onClick={handleClaim} style={{cursor: 'pointer'}}>
                    <NotificationIcon/>
                </Badge>}

            <Link to='/createStream'>
                <Badge>
                    <PlusIcon/>
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