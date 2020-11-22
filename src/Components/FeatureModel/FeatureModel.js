import React from "react";
import style from "./FeatureModel.module.css";
import e39 from ".././../Assets/images/e39.jpg";
import DescriptionMotor from "./DescriptionMotor/DescriptionMotor";

//new comment develop

const FeatureModel = () => {

  

  return (
    <div className={style.featureModelWrapper}>
      <div className={style.titleDescriptionImgWrapper}>
        <div className={style.titleDescriptionWrapper}>
          <div className={style.title}>Название авто</div>
          <div className={style.description}>Описание авто</div>
        </div>
        <div className={style.imgCar}>
          <img src={e39} alt="img" />
        </div>
      </div>
      <div className={style.descriptionMotorWrapper}>
        <DescriptionMotor value={'2.3'} />
        <DescriptionMotor value={'3.0'} />
        <DescriptionMotor value={'4.0'} />
        <DescriptionMotor value={'6.3'} />
      </div>
    </div>
  );
};

export default FeatureModel;
