import React, { useState } from "react";
import style from "./Car.module.css";
import defaultCar from ".././../assets/images/gost.png";
import EngineData from "./EngineData/EngineData";
import { connect } from "react-redux";
import { getModelDescriptionThunk } from "../../reducers/carReducer";
import { withRouter } from "react-router-dom";
import EngineDataTable from "./EngineData/EngineDataTable";
import EnginesCards from "./EnginesCards";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOpenedEngineDataNumber: 0,
    };
  }

  componentDidMount() {
    let carId = this.props.match.params.carId
      ? this.props.match.params.carId
      : 1;
    this.props.getModelDescription(carId);
  }

  

  openEngineDataTable = (key) => {
    this.setState({ currentOpenedEngineDataNumber: key });
  };

  render() {
    let modelDescription = this.props.modelDescription;

    console.log(modelDescription);

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
              <div className={style.modelYear}>
                <h4>Модель: &#160;{modelDescription.body_title}</h4>
                <h4>
                  Год выпуска:&#160;{modelDescription.year_production_start}-
                  {modelDescription.year_production_end}
                </h4>
              </div>
              <h4>
                {modelDescription.gearbox ? (
                  <div>
                    <h4>
                      Коробка: &#160;
                      {modelDescription.gearbox.gearbox_name}
                      <br></br> Тип: &#160;
                      {modelDescription.gearbox.gearbox_type}
                      <br></br> Количество скоростей: &#160;
                      {modelDescription.gearbox.gears_number}
                    </h4>
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
              <img src={defaultCar} alt="img" />
            )}
          </div>
        </div>

        <EnginesCards
          currentEngineKey={this.state.currentOpenedEngineDataNumber}
          data={modelDescription.engines}
          openEngineDataTable={this.openEngineDataTable}
        />
        <EngineDataTable
          currentEngineKey={this.state.currentOpenedEngineDataNumber}
          data={modelDescription.engines}
          currentOpenedEngineDataId={this.currentOpenedEngineDataId}
        />
      </div>
    );
  }
}

let mapDispatchToProps = (state) => {
  return {
    modelDescription: state.descriptionPage.modelDescription,
  };
};
let withRouterCar = withRouter(Car);

export default connect(mapDispatchToProps, {
  getModelDescription: getModelDescriptionThunk,
})(withRouterCar);

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
