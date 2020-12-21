import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Models.module.css";
import defaultCar from "../../assets/images/gost.png";

const Model = (props) => {
  let modelDesctiption = props.data;

  return (
    <div>
      <NavLink to={props.url + '/' + props.data.id} onClick={() => props.setModelName(modelDesctiption.body_index)}>
        <div className={style.brandModelItem}>
          <div className={style.left}>
            <div className={style.info}>
              <div className={style.title}>
                {modelDesctiption.body_title} {modelDesctiption.body_index}
              </div>
              <div className={style.year}>
                {modelDesctiption.year_production_start} -{" "}
                {modelDesctiption.year_production_end}
              </div>
            </div>
          </div>
          <div className={style.right}>
           {console.log(modelDesctiption.image)}
            <div>
              <img src={modelDesctiption.image ? modelDesctiption.image : defaultCar} className={style.carImage} alt="img"/>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Model;
