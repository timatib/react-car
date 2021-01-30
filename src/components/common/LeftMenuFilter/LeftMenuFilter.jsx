import React, { useState } from "react";
import { connect } from "react-redux";
import style from "./LeftMenuFilter.module.css";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const LeftMenuFilter = ({ isMenuLeft }) => {
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");

  let onInputChange = (value) => {
    setMinValue(value[0]);
    setMaxValue(value[1]);
  };

  return (
    <div className={`${style.leftMenu} ${isMenuLeft ? style.openMenu : ""}`}>
      <div className={style.nameBlockFilter}>
        <h1>Фильтры</h1>
      </div>
      <div className={style.blockSpeed}>
        <span className={style.valueSpeed}>
          <span className={style.nameValueSpeed}>Разгон</span> 0-100
        </span>
        <div className={style.minMaxSpeed}>
          <p>min:&nbsp;{minValue}</p>
          <p>max:&nbsp;{maxValue}</p>
        </div>

        <Range
          max={14}
          min={1}
          step={0.1}
          defaultValue={[1, 14]}
          onChange={onInputChange}
          tabIndex={[2, 2]}
        />
        <button className={style.searchModelSpeed}>найти</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isMenuLeft: state.navReduser.isMenuLeft,
  };
};

export default connect(mapStateToProps, {})(LeftMenuFilter);
