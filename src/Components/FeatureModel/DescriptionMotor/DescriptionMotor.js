import React, { useState } from "react";
import style from "./DescriptionMotor.module.css";

const DescriptionMotor = (props) => {
  let [descriptionMotor, setDescriptionMotor] = useState(false);

 let onShowDescriptionMotor = () => {
    setDescriptionMotor(true)
  }

  return (
    <div className={style.descriptionMotorWrapper}>
      <div onClick={onShowDescriptionMotor} className={style.descriptionMotorTittleItem}>{props.value}</div>
      <div >
        {!descriptionMotor ? (
          ""
        ) : (
          <div className={style.description}>0-100</div>
        )}
      </div>
    </div>
  );
};

export default DescriptionMotor;
