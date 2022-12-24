import React from 'react';

import { useSwiper } from 'swiper/react';

const SliderPrevButton = () => {
    const swiper = useSwiper();

    return (
        <div
            className="swiper-button-prev"
            onClick={() => swiper.slidePrev()}
        ></div>
    );
}

export default SliderPrevButton;