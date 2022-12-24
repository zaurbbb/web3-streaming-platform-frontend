import React, {useState, useMemo} from 'react';
import {Player, useCreateStream } from '@livepeer/react';
import {Box, Button, TextField} from "@mui/material";
import api from "../../../api";

const CreateStreamPage = () => {
    const [streamName, setStreamName] = useState('');
    const [streamCategory, setStreamCategory] = useState('');
    const [streamDescription, setStreamDescription] = useState('');
    let count = 0;

    const {
        mutate: createStream,
        data: stream,
        status,
    } = useCreateStream(streamName ? { name: streamName } : null);

    const isLoading = useMemo(() => status === 'loading', [status]);

    if (stream && count < 1) {
        count++;
        api.post("/ipfs/uploadStreamData", {
            streamName,
            streamCategory,
            streamDescription,
            streamId: stream.id,
            authorAddress: localStorage.getItem('address')
        }).then(res => {
            console.log(res.data);
        }).catch(e => {
            console.log(e);
        });
    }

    return (
        <>
            <Box>
                <Box>
                    <TextField style={{backgroundColor: 'white'}}
                        type="text"
                        placeholder="Stream name"
                        onChange={(e) => setStreamName(e.target.value)}
                    />
                    <TextField style={{backgroundColor: 'white'}}
                               type="text"
                               placeholder="Description"
                               onChange={(e) => setStreamDescription(e.target.value)}
                    />
                    <TextField style={{backgroundColor: 'white'}}
                        type="text"
                        placeholder="Category"
                        onChange={(e) => setStreamCategory(e.target.value)}
                    />
                </Box>
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
                        <Button style={{backgroundColor: 'white'}}
                            onClick={() => {
                                createStream?.();
                            }}
                            disabled={isLoading || !createStream}
                            variant="primary"
                        >
                            Create Stream
                        </Button>
                    )}
                </div>
            </Box>
        </>
    )
};

export default CreateStreamPage;