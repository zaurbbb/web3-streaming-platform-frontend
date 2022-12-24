import React, {
    useEffect,
    useState
} from 'react';
import { useParams } from "react-router-dom";
import {
    Player,
    useStream
} from "@livepeer/react";
import css from './ViewStreamPage.module.scss';
import API from '../../../api';
import ThreeDotsLoader from '../../ui/loaders/ThreeDotsLoader/ThreeDotsLoader';
import { Button } from '@mui/material';

const ViewStreamPage = () => {
    const { streamID } = useParams();
    const streamData = useStream({
        streamId       : streamID,
        refetchInterval: (stream) => (!stream?.isActive ? 5000 : false),
    });

    const [stream, setStream] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await API.get('/ipfs/getStreams');
                setStream(res.data.filter(item => item.streamId === streamID)[0]);
            } catch (e) {
                console.log(e)
            }
        }

        fetchData().then();

        const timer = new Date();

        return () => {
            const d = (new Date() - timer) / 1000 / 60;
            const time = localStorage.getItem('time') ? +localStorage.getItem('time') + d : d;
            localStorage.setItem("time", time);
        }

    }, []);

    if (stream.length === 0) {
        return <ThreeDotsLoader />
    }
    return (
        <section className={css.ContainerBlock}>
            {streamData.data?.playbackId && (
                <Player
                    title={streamData.data?.name}
                    playbackId={streamData.data?.playbackId}
                    autoPlay
                    muted
                />
            )}

            <div>
                <h2 className='secondary-light-color'>[{stream.streamCategory}]</h2>
                <h1>{stream.streamName}</h1>
            </div>
            <div>
                <h2 className='secondary-light-color'>Description</h2>
                <h3> {stream.streamDescription}</h3>
            </div>
            <div>
                <Button
                    variant='outlined'
                    color='primary'
                >
                    Notify about inappropriate content
                </Button>
            </div>
        </section>
    );
};

export default ViewStreamPage;