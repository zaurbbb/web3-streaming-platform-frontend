import React from 'react';

import ViewAllStreams from '../../elements/ViewStreams/ViewStreams';
import SliderStreams from '../../elements/SliderStreams/SliderStreams';

const HomePage = () => {
    return (
        <section>
            <SliderStreams />
            <ViewAllStreams />
        </section>
    );
};

export default HomePage;