import React from 'react';
import {
    Swiper,
    SwiperSlide
} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper';
import css from './SliderStreams.module.scss';

const SliderStreams = () => {

    const streamsList = [
        { streamName: 'CS GO MAJOR NAVI', streamAuthor: 'Danilll', streamWatchers: 870870 },
        { streamName: 'DOTA 2 DEBILY', streamAuthor: 'Danilll', streamWatchers: 870870 },
        { streamName: 'LOL IDIOTY NAHUI', streamAuthor: 'Danilll', streamWatchers: 870870 },
        { streamName: 'OSOBEENO TEAM FORTRESS', streamAuthor: 'Danilll', streamWatchers: 870870 },
    ];
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            slidesPerGroup={1   }
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
        >
            {streamsList.map((streamItem) => (
                <SwiperSlide  >
                    <div className={css.StreamCard}>
                        {streamItem.streamName}
                    </div>
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