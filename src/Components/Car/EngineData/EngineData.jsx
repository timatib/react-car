import React, { useState } from "react";
import style from "./EngineData.module.css";

const DescriptionMotor = (props) => {
  
  const engineData = props.data;
  const [descriptionMotor, setDescriptionMotor] = useState(false);

  const onShowDescriptionMotor = () => {
    descriptionMotor ? setDescriptionMotor(false) : setDescriptionMotor(true);
  };

  return (
    <div className={style.descriptionMotorWrapper}>
      <div onClick={onShowDescriptionMotor} className={style.descriptionMotorTitleItem}>
        <div className={style.motorTransmission}>
          <h4>Объем: {engineData.engine_volume}</h4>
          <h4>Привод: {engineData.transmission}</h4>
        </div>
        <h4>Топливо: {engineData.engine_fuel_type}</h4>
      </div>

      <div className={style.descriptionCarWrapper}>
      {!descriptionMotor ? (
        ""
      ) : (
        <div className={style.description}>
          <h4>Трансмиссия:&#160; {engineData.transmission}</h4>
          <h4>Клиренс: &#160;{engineData.engine_cylinders}</h4>
          <h4>Топливо:&#160; {engineData.engine_type}</h4>
          <h4>Номер мотора:&#160; {engineData.engine_index}</h4>
          <h4>Топливо:&#160; {engineData.engine_fuel_type}</h4>
          <h4>Номер мотора:&#160; {engineData.engine_index}</h4>
          <h4>Сил: &#160;{engineData.engine_horsepower}</h4>
          <h4>0-100: &#160;{engineData.dynamic_0_100}</h4>
          <h4>100-200:&#160; {engineData.dynamic_100_200}</h4>
          <h4>Максимальная скорость:&#160; {engineData.dynamic_max_speed}</h4>
          <h4>Расход:&#160;{engineData.fuel_consumption}</h4>
          <h4>Коробка:&#160; {engineData.gearbox.gearbox_name}</h4>
          <h4>Тип коробки:&#160; {engineData.gearbox.gearbox_type}</h4>
          <h4>Шестерня:&#160; {engineData.gearbox.gears_number}</h4>
          <h4>Вес:&#160; {engineData.weight}</h4>

        </div>
      )}
    </div>
    </div>
  );
};

export default DescriptionMotor;

// "5.5": {
// "transmission": "AWD",
// "engine_cylinders": 8,
// "engine_type": "V",
// "engine_index": "M157",
// "engine_fuel_type": "benzin",
// "engine_horsepower": 585,
// "engine_boost_type": "Turbo",
// "dynamic_0-100": 3.6,
// "dynamic_100-200": 8.5,
// "dynamic_max_speed": 330,
// "fuel_consumption": 15.2,
// "gearbox": "Automatic",
// "gears_numbers": 7,
// "weight": 1950
// }
