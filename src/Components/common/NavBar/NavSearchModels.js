import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import style from "./NavBar.module.css";
import defaultCar from "../../../assets/images/gost.png";

const NavSearchModels = (props) => {
let modelDesctiption = props.data
  return (
      <div >
        <NavLink
          to={"/brand/" + props.data.brand_id + "/" + props.data.id}
        //   onClick={() => props.setModelName(modelDesctiption.body_index)}
        >
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
              <div>
                <img
                  src={
                   modelDesctiption.image ? modelDesctiption.image : defaultCar
                  }
                  className={style.carImage}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </NavLink>
      </div>
  );
};

let NavSearchModelsWithPouter = withRouter(NavSearchModels)

export default NavSearchModelsWithPouter;
