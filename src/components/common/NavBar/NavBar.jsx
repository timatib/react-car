import React, { useEffect, useRef, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import style from "./NavBar.module.css";
import logo from "../../../assets/images/logo.svg";
import { connect } from "react-redux";
import { getSearchQueryThunk, resetStateData, setInputValueAC, setIsMenuLeftAC } from "../../../reducers/navReduser";
import BlockResponseSearch from "./BlockResponseSearch";
import EscapeOutside from "react-escape-outside";
import filter from '../../../assets/images/filter.svg'

const NavBar = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const [isDataLoading, setIsDataLoading] = useState(false)

  React.useEffect(() => {
    onSearch();
  }, [enteredText]);

  let onSearch = () => {
      props.getSearchQuery(enteredText).then(() => {
        setTimeout(() => setIsDataLoading(false), 500);
        })
  };

  let onInputChange = ({ target: { value } }) => {
   
    setEnteredText(value)
    if (value == "") {
      props.setInputValue(false);
    } else {
      setIsDataLoading(true)
      props.setInputValue(true);
    }
}

 const handleEscapeOutside = () =>  {
    props.setInputValue(false);
    setEnteredText('')
  }

  const onOpenLeftMenu = () => {
    props.setIsMenuLeft(true)
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
          <div className={style.blockFilter}>
            <img src={filter} alt="img" onClick={onOpenLeftMenu} />
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
        <div>
        <EscapeOutside onEscapeOutside={handleEscapeOutside }>
           <BlockResponseSearch
             inputValue={props.inputValue} 
             result={props.result} 
             isDataLoading={isDataLoading}
             setInputValue={props.setInputValue}
             setEnteredText={setEnteredText}
             />
          </EscapeOutside>
        </div>
</div>
  );
};

let mapStateToProps = (state) => {
  return {
    result: state.navReduser.result,
    inputValue: state.navReduser.inputValue,
    isMenuLeft: state.navReduser.isMenuLeft
  };
};

let NavBarWithPouter = withRouter(NavBar)

export default connect(mapStateToProps, {
  getSearchQuery: getSearchQueryThunk,
  setInputValue: setInputValueAC,
  resetState: resetStateData,
  setIsMenuLeft: setIsMenuLeftAC
})(NavBarWithPouter);