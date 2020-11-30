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
          <div className={style.brandModelTittleWrapper}>
            <h4>Модель:&#160; {modelDesctiption.body_title}</h4>
            <h4>Кузов:&#160;{modelDesctiption.body_index}</h4>
          </div>
          <div className={style.yearModel}>
            <h4>
              {modelDesctiption.year_production_start} -{" "}
              {modelDesctiption.year_production_end}
            </h4>
          </div>
          <img
            src={modelDesctiption.image ? modelDesctiption.image : defaultCar}
            alt="img"
          />
        </div>
      </NavLink>
    </div>
  );
};

export default Model;

// "id": "3",
// "created_at": null,
// "updated_at": null,
// "brand_id": "2",
// "body_title": "760",
// "body_index": "G11",
// "year_production_start": "2017",
// "year_production_end": "2020",
// "image": ""
