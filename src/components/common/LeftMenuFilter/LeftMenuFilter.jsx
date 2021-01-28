import React from "react";
import style from "./LeftMenuFilter.module.css";

const LeftMenuFilter = ({isMenuLeft}) => {
  return <div className={`${style.leftMenu} ${isMenuLeft ? style.openMenu : ''}`}>bdfbdfb</div>;
};

export default LeftMenuFilter;
