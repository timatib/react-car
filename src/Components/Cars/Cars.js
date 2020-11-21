import React from "react";
import Car from "./Car";
import style from "./Cars.module.css";

const Cars = () => {
  return (
    <div className={style.carsWrapper}>
      <Car />
      <Car />
      <Car />
    </div>
  );
};

export default Cars;
