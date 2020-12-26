import React, { useEffect, useRef, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import style from "./NavBar.module.css";
import logo from "../../../assets/images/logo.svg";
import { connect } from "react-redux";
import { getSearchQueryThunk, setInputValueAC } from "../../../reducers/navReduser";
import Model from "../../Models/Model";
import modelStyle from '../../Models/Models.module.css';

const NavBar = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const myRef = useRef();

  React.useEffect(() => {
    onSearch();
  }, [enteredText]);

  let onSearch = () => {
    props.getSearchQuery(enteredText);
  };

  let onInputChange = ({ target: { value } }) => {
    setEnteredText(value)
    if (value == "") {
      props.setInputValue(false);
    } else {
      props.setInputValue(true);
    }
  };

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      props.setInputValue(false);
      setEnteredText("");
    }
  };

  const handleClickInside = () => {
    props.setInputValue(false);
  };

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
            <input
                onChange={onInputChange}
                value={enteredText}
                type="text"
                placeholder="Поиск"
            />
          </div>
        </div>
        <div
            className={
              !props.inputValue ? style.navSearch : `${style.navSearch} ${style.active}`
            }
            ref={myRef}
            onClick={handleClickInside}
        >
          {props.inputValue && (
              <div className={style.searchContent}>
                {!props.result.length == 0 ? (
                    <div className={modelStyle.brandModelWrapper}>
                      {props.result.map((data, key) => {
                        return <Model key={key} data={data}/>
                      })}
                    </div>
                ) : (
                    <div className={style.notFound}>
                      <span>Ничего не найдено</span>
                    </div>
                )}
              </div>
          )}
        </div>
      </div>
  );
};

let mapStateToProps = (state) => {
  return {
    result: state.navReduser.result,
    inputValue: state.navReduser.inputValue
  };
};

let NavBarWithPouter = withRouter(NavBar)

export default connect(mapStateToProps, {
  getSearchQuery: getSearchQueryThunk,
  setInputValue: setInputValueAC
})(NavBarWithPouter);