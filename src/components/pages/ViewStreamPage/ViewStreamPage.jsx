import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Player, useStream} from "@livepeer/react";

const ViewStreamPage = () => {
    const { streamID } = useParams();

    const streamData = useStream({
        streamId: streamID,
        refetchInterval: (stream) => (!stream?.isActive ? 5000 : false),
    });
    console.log(streamData)
    return (
        <div>
            {streamData.data?.playbackId && (
                <Player
                    title={streamData.data?.name}
                    playbackId={streamData.data?.playbackId}
                    autoPlay
                    muted
                />
            )}
        </div>
    );
};

export default ViewStreamPage;