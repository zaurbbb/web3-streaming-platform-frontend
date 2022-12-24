import React from "react";

import "./ThreeDotsLoader.scss"

const ThreeDotsLoader = () => {
    return (
        <div className='lds-ellipsis'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default ThreeDotsLoader;
