import React, {
    useEffect,
    useState
} from 'react';
import API from '../../../api';
import css from './ViewStreams.module.scss';
import StreamCard from '../StreamCard/StreamCard';
import ThreeDotsLoader from '../../ui/loaders/ThreeDotsLoader/ThreeDotsLoader';

const ViewAllStreams = () => {
    const [streams, setStreams] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await API.get('/ipfs/getStreams');
                setStreams(res.data);
            } catch (e) {
                console.log(e)
            }
        }

        fetchData().then();
    }, []);

    if (!streams) {
        return <h1>LOADING</h1>
    }
    return (
        <section className={css.ContainerBlock}>
            {streams.map(stream => {
                return (
                    <StreamCard
                        streamName={stream.streamName}
                        streamDescription={stream.streamName}
                        streamCategory={stream.streamName}
                        streamId={stream.streamId}
                        authorAddress={stream.authorAddress}
                    />
                )
            })}
        </section>
    );


};

export default ViewAllStreams;