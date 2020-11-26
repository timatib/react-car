import React from 'react';
import style from './EnginesCards.module.css';

const EnginesCards = (props) => {
    return (
        <div className={style.enginesCards}>
            {console.log(props.currentEngineKey)}
            {props.data && props.data.map((engine, key) => {
                return <div className={props.currentEngineKey == key && style.selected}>
                    <div onClick={() => props.openEngineDataTable(key)} key={key} className={`${style.engineVolume}`}>{engine.engine_volume}</div>
                </div>
            })}
        </div>
    )
}

export default EnginesCards;