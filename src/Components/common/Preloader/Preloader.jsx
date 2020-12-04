import React from 'react';
import preloaderAnimation from '../../../assets/images/preloader.svg'
import style from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={style.preloader}>
            <img src={preloaderAnimation} />
        </div>
    )
}

export default Preloader;