import React from "react";
import style from "./EnginesCards.module.css";

const EnginesCards = (props) => {
  return (
    <div className={style.enginesCards}>
      {props.data &&
        props.data.map((engine, key) => {
          return (
            <div className={props.currentEngineKey == key && style.selected}>
              <div
                onClick={() => props.openEngineDataTable(key)}
                key={key}
                className={style.engineVolume}
              >
                <div className={style.volumeWrapper}>
                  <div>{engine.engine_volume}</div>
                  <div>{engine.transmission}</div>
                </div>

                {engine.engine_boost_type}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default EnginesCards;
