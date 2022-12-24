import React, {useEffect, useState} from 'react';
import api from "../../../api";

const ViewAllStreamsPage = () => {
    const [streams, setStreams] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await api.get('/ipfs/getStreams');
                setStreams(res.data);
            } catch (e) {
                console.log(e)
            }
        }

        fetchData();
    }, [])

    return (
        <div>
            {streams.map(stream => {
                return (
                    <div>
                        <div>{stream.streamName}</div>
                        <div>{stream.streamCategory}</div>
                        <div>{stream.streamDescription}</div>
                        <div>{stream.streamId}</div>
                        <div>{stream.authorAddress}</div>
                    </div>
                )})}
        </div>
    );
};

export default ViewAllStreamsPage;