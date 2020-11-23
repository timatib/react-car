import React, { useState } from "react";
import style from "./EngineData.module.css";

const DescriptionMotor = (props) => {
  let [descriptionMotor, setDescriptionMotor] = useState(false);

  let onShowDescriptionMotor = () => {
    if (descriptionMotor) {
      setDescriptionMotor(false);
    } else {
      setDescriptionMotor(true);
    }
  };

let  motor = props.motor['5.5']
console.log(props.motor['5.5'].transmission)
  return (
    <div className={style.descriptionMotorWrapper}>
      <div
        onClick={onShowDescriptionMotor}
        className={style.descriptionMotorTittleItem}
      >
          <h4>объем: {Object.keys(props.motor)[0]}</h4>
        {props.body_index}
        {props.value}
      </div>
      <div>
        {!descriptionMotor ? (
          ""
        ) : (
          <div className={style.description}>
            <h4>Трансмиссия: {motor.transmission}</h4>
            <h4>Клиренс: {motor.engine_cylinders}</h4>
            <h4>Топливо: {motor.engine_type}</h4>
            <h4>Номер мотора: {motor.engine_index}</h4>
            <h4>Топливо: {motor.engine_fuel_type}</h4>
            <h4>Номер мотора: {motor.engine_index}</h4>
            <h4>Сил: {motor.engine_horsepower}</h4>
            <h4>0-100: {motor.dynamic_0_100}</h4>
            <h4>100-200: {motor.dynamic_100_200}</h4>
            <h4>Максимальная скорость: {motor.dynamic_max_speed}</h4>
            <h4>Расход: {motor.fuel_consumption}</h4>
            <h4>Коробка: {motor.gearbox}</h4>
            <h4>Шестерня: {motor.gears_numbers}</h4>
            <h4>Вес: {motor.weight}</h4>

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
