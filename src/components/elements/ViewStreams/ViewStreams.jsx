import React, {
    useEffect,
    useState
} from 'react';
import API from '../../../api';
import css from './ViewStreams.module.scss';
import StreamCard from '../StreamCard/StreamCard';

const ViewAllStreams = () => {
    const [streams, setStreams] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await API.get('/ipfs/getStreams');
                setStreams(res.data);
            } catch (e) {
                setError(e);
            }
        }

        fetchData().then();
    }, []);

    if (error) {
        return <h1>{error}</h1>
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