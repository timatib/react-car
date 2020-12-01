import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import logo from "../../../assets/images/logo.svg";

const NavBar = (props) => {
  let [inputValue, setInputValue] = useState(false);

  let onSubmitFrom = (e) => {
    if (e.key == "Enter") {
      setInputValue(true);
    }
  };

  let onСharacterЕracking = ({ target: { value } }) => {
    if(value == ''){
        setInputValue(false);
    }
  }

  return (
    <div className={style.navbarWrapper}>
      <div className={style.navbar}>
        <div className={style.logoNavBar}>
          <NavLink to="/">
            {" "}
            <img src={logo} alt="img" />
          </NavLink>
        </div>
        <div className={style.searchNavBar}>
          <input onKeyPress={onSubmitFrom} onChange={onСharacterЕracking} type="text" placeholder="Поиск" />
        </div>
      </div>
      <div className={!inputValue ? style.navSearch : `${style.navSearch} ${style.active}`}>
            Рузультат поиска:
      </div>
    </div>
  );
};

export default NavBar;
