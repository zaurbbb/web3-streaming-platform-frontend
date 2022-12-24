import React, {
    useMemo,
    useState
} from 'react';
import {
    Player,
    useCreateStream
} from '@livepeer/react';
import {Button} from '@mui/material';
import API from '../../../api';
import css from './CreateStreamPage.module.scss'
import SnackbarWindow from '../../ui/windows/SnackbarWindow/SnackbarWindow';

const CreateStreamPage = () => {
    const [streamName, setStreamName] = useState('');
    const [streamCategory, setStreamCategory] = useState('');
    const [streamDescription, setStreamDescription] = useState('');
    const link = 'https://testnets.opensea.io/0x84A55169700D4A933fb026Ca7480fDE9545CB7f6';
    let count = 0;

    const {
        mutate: createStream,
        data: stream,
        status,
    } = useCreateStream(streamName ? {name: streamName} : null);

    const isLoading = useMemo(() => status === 'loading', [status]);

    if (stream && count < 1) {
        count++;
        API.post('/ipfs/uploadStreamData', {
            streamName,
            streamCategory,
            streamDescription,
            streamId: stream.id,
            authorAddress: localStorage.getItem('address')
        }).then(res => {
            API.post('/nft/mintSoulBound', {
                address: localStorage.getItem('address'),
                type: 'streaming'
            }).then(res => {
                console.log(res.data);
                handleClickSnackbar();
            }).catch(e => console.log(e));
        }).catch(e => {
            console.log(e);
        });
    }

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const handleClickSnackbar = () => {
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') return;

        setOpenSnackbar(false);
    };

    return (
        <section className={css.ContainerBlock}>
            {!stream ?
                <>
                    <input
                        type='text'
                        placeholder='Stream name'
                        onChange={(e) => setStreamName(e.target.value)}
                    />
                    <input
                        type='text'
                        placeholder='Description'
                        onChange={(e) => setStreamDescription(e.target.value)}
                    />
                    <input
                        type='text'
                        placeholder='Category'
                        onChange={(e) => setStreamCategory(e.target.value)}
                    />
                </> : <h1>Stream name: {streamName} | Stream category: {streamCategory} <br/> Stream
                    description: {streamDescription} </h1>}

            {stream && <div>Stream Key: {stream.streamKey}</div>}
            {stream?.playbackId && (
                <Player
                    title={stream?.name}
                    playbackId={stream?.playbackId}
                    autoPlay
                    muted
                />
            )}

            <div>
                {!stream && (
                    <Button
                        onClick={() => {
                            createStream?.();
                        }}
                        disabled={isLoading || !createStream}
                        variant='outlined'
                        color='primary'
                    >
                        Create Stream
                    </Button>
                )}
            </div>
            <SnackbarWindow
                openSnackbar={openSnackbar}
                handleCloseSnackbar={handleCloseSnackbar}
                text={'Congratulations! You have received an achievement for creating a stream. Click on me to see it'}
                severity='success'
                link={link}
            />
        </section>
    )
};

export default CreateStreamPage;