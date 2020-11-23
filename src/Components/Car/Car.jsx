import React from "react";
import style from "./Car.module.css";
import e39 from ".././../assets/images/e39.jpg";
import EngineData from "./EngineData/EngineData";
import { connect } from "react-redux";
import { getModelDescriptionThunk } from "../../reducers/carReducer";

class Car extends React.Component {
  componentDidMount() {
    this.props.getModelDescription();
  }

  componentDidUpdate(prevProps, stateProps){
    if(prevProps != stateProps){
      this.props.getModelDescription();
    }
  }

  render() {

    let modelDescription = this.props.modelDescription;
    if(!modelDescription){
      return<div></div>
    }
    return (

      <div className={style.featureModelWrapper}>
        <div className={style.titleDescriptionImgWrapper}>
          <div className={style.titleDescriptionWrapper}>
            <div className={style.title}>
              <h3>
                {modelDescription.brand}{" "}
                <span>{modelDescription.body_index}</span>
              </h3>
            </div>
            <div className={style.description}>
              <h4>{modelDescription.body_title}</h4>
              <h4>
                Год выпуска: {modelDescription.year_production_start}-
                {modelDescription.year_production_end}
              </h4>
              <h4>
                {modelDescription.gearbox ? (
                  <div>
                    Коробка: &#160; название:
                    {modelDescription.gearbox.gearbox_name},&#160; тип:
                    {modelDescription.gearbox.gearbox_type},&#160; количество
                    скоростей:{modelDescription.gearbox.gears_number}
                  </div>
                ) : (
                  <div></div>
                )}
              </h4>
            </div>
          </div>
          <div className={style.imgCar}>
            {modelDescription.image ? (
              <img src={modelDescription.image} alt="img" />
            ) : (
              <img src={e39} alt="img" />
            )}
          </div>
        </div>
        <div className={style.descriptionMotorWrapper}>
          {this.props.modelDescription.engines ? (
            this.props.modelDescription.engines.map((motor, key) => {
              return <EngineData key={key} motor={motor} />;
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
       
    )
  
  }
}

let mapDispatchToProps = (state) => {
  return {
    modelDescription: state.descriptionPage.modelDescription,
  };
};

export default connect(mapDispatchToProps, {
  getModelDescription: getModelDescriptionThunk,
})(Car);

// {
// "brand": "Mercedes-Benz",
// "body_title": "E63",
// "body_index": "W212",
// "year_production_start": "2013",
// "year_production_end": "2015",
// "image": null,
// "engines": [
// {
// "5.5": {
// "transmission": "AWD",
// "engine_cylinders": 8,
// "engine_type": "V",
// "engine_index": "M157",
// "engine_fuel_type": "benzin",
// "engine_horsepower": 585,
// "engine_boost_type": "Turbo",
// "dynamic_0-100": 3.6,
// "dynamic_100-200": 8.5,
// "dynamic_max_speed": 330,
// "fuel_consumption": 15.2,
// "gearbox": "Automatic",
// "gears_numbers": 7,
// "weight": 1950
// }
// }
// ],
// "gearbox": {
// "gearbox_name": "7G-Tronic 722.9",
// "gearbox_type": "Automatic",
// "gears_number": "7"
// }
// }
