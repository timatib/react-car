import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import logo from "../../../assets/images/logo.svg";

const NavBar = (props) => {
  let [inputValue, setInputValue] = useState(false);
  const [enteredText, setEnteredText] = useState(''); 
  const myRef = useRef();


  let onСharacterЕracking = ({ target: { value } }) => {
    setEnteredText(value)
    if(value == ''){
        setInputValue(false);
    } else{
        setInputValue(true);   
    }
  }
  

  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
      setInputValue(false);
      setEnteredText('')
    }
  };

  const handleClickInside = () => {
    setInputValue(false);
    
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

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
          <input  onChange={onСharacterЕracking} value={enteredText} type="text" placeholder="Поиск"  />
        </div>
      </div>
      <div className={!inputValue ? style.navSearch : `${style.navSearch} ${style.active}`}  ref={myRef} onClick={handleClickInside}>
        {inputValue 
        ? (<div  className={style.searchContent}>
          Ничего не найдено
        </div>)
        : ''}   
      </div>
    </div>
  );
};

export default NavBar;
