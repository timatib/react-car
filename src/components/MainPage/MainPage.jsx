import React from "react";
import { NavLink } from "react-router-dom";
import Brands from "../Brands/Brands";
import ContentMainPage from "./ContentMainPage/ContentMainPage";
import style from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div >
        <div>
          <ContentMainPage />
        </div>
        <div className={style.carsWrapper}>
          <Brands />
        </div>
    </div>
  );
};

export default MainPage;
