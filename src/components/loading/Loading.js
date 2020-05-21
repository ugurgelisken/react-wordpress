import React from 'react';
import './Loading.css';
import IMG_LoadingIcon from './../../assets/loading.gif';

function Loading() {
    return (
        <div className="loading">
            <img src={IMG_LoadingIcon} alt="" />
        </div>
    )
}
export default Loading;