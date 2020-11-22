import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Cars.module.css";

const Car = (props) => {
  return (
    <NavLink to="brand-model">
      <div className={style.carItem}>
        <h2>название: {props.modelCar.title}</h2>
      </div>
      ;
    </NavLink>
  );
};

export default Car;
