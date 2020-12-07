import React from "react";
import style from "./EnginesCards.module.css";

const EnginesCards = (props) => {
  return (
    <div className={style.enginesCards}>
      {props.data &&
        props.data.map((engine, key) => {
          return (
            <div key={key} onClick={() => props.openEngineDataTable(key)} className={`${props.currentEngineKey == key ? style.selected : ""} ${style.box}`} >
                <div className={style.volumeWrapper}>
                  <div>{engine.engine_volume}</div>
                  <div>{engine.transmission}</div>
                </div>
                {engine.engine_boost_type}
              </div>
          );
        })}
    </div>
  );
};

export default EnginesCards;
