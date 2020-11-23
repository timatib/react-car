import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Brands.module.css";
import logo from '../../Assets/images/mercedes.png';

const Brand = (props) => {
  debugger
  return (
    <NavLink to="models">
      <div className={style.carItem}>
        <div className={style.logoWrapper}>
          <div className={style.logo}><img src={props.data.image}/></div>
        </div>
        <div className={style.title}>{props.data.title}</div>
      </div>
    </NavLink>
  );
};

export default Brand;
