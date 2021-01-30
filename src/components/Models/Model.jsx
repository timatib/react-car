import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import style from "./Models.module.css";
import defaultCar from "../../assets/images/gost.png";

const Model = (props) => {
  let modelDesctiption = props.data, link;


  if(props.url) {
    link = props.url + '/' + props.data.id;
  } 
  else if(props.data.brand_id) {
    link = '/brand/' + props.data.brand_id + '/' + props.data.id;
  }

  return (
    <div>
      <NavLink to={link}>
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
              <img src={modelDesctiption.image ? modelDesctiption.image : defaultCar} className={style.carImage} alt="img"/>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

const ModelWithRouter = withRouter(Model)

export default ModelWithRouter;
