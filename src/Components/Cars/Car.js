import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Cars.module.css";

const Car = () => {
  return (
    <NavLink to='brand-model'>
      <div className={style.carItem}>cas</div>;
    </NavLink>
  );
};

export default Car;
