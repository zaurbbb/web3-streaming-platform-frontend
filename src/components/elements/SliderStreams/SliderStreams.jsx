import React, {
    useEffect,
    useState
} from 'react';
import {
    Swiper,
    SwiperSlide
} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper';
import API from '../../../api';
import StreamCard from '../StreamCard/StreamCard';

const SliderStreams = () => {

    const [streams, setStreams] = useState([]);
    const randomStreams = [];

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

    if (streams.length > 0) {
        for (let i = 0; i < 4; i++) {
            console.log('cycle')
            const streamIndex = Math.floor(Math.random() * streams.length);
            randomStreams.push(streams[streamIndex]);
        }
    }

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={60}
            centeredSlides={true}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
        >
            {randomStreams.map(streamItem => (
                <SwiperSlide>
                    <StreamCard
                        streamName={streamItem.streamName}
                        streamDescription={streamItem.streamName}
                        streamCategory={streamItem.streamName}
                        streamId={streamItem.streamId}
                        authorAddress={streamItem.authorAddress}
                    />
                </SwiperSlide>
            ))}
            {/*<div className='swiper-navigation-button'>*/}
            {/*    <SliderPrevButton />*/}
            {/*    <SliderNextButton />*/}
            {/*</div>*/}
        </Swiper>
    );
};

export default SliderStreams;