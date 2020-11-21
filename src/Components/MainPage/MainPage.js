import React from "react";
import { NavLink } from "react-router-dom";
import Cars from "../Cars/Cars";
import ContentMainPage from "../ContentMainPage/ContentMainPage";
import style from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div>
      <NavLink to='/'>
        <div>
          <ContentMainPage />
        </div>
        <div className={style.carsWrapper}>
          <Cars />
        </div>
      </NavLink>
    </div>
  );
};

export default MainPage;
