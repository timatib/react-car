import React from "react";
import style from "./Car.module.css";
import defaultCar from ".././../assets/images/gost.png";
import EngineData from "./EngineData/EngineData";
import { connect } from "react-redux";
import { getModelDescriptionThunk, setNameDiscriptionModelAC } from "../../reducers/carReducer";
import { setModelForBreadcrumbs } from "../../reducers/modelsPageReducer"
import { withRouter } from "react-router-dom";
import EngineDataTable from "./EngineData/EngineDataTable";
import EnginesCards from "./EnginesCards";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOpenedEngineDataNumber: 0
    };
  }

  componentDidMount() {
    let brand = this.props.match.params.brand
    let carId = this.props.match.params.carId
      ? this.props.match.params.carId
      : 1;
    this.props.getModelDescription(brand, carId);

    this.props.setModelForBreadcrumbs(this.props.modelDescription.body_index);
  }

  componentDidUpdate(prevProps) {
    if(prevProps != this.props) {
      this.props.setModelForBreadcrumbs(this.props.modelDescription.body_index);
    }
  }

  openEngineDataTable = (key) => {
    this.setState({ currentOpenedEngineDataNumber: key });
  };

  render() {
    let modelDescription = this.props.modelDescription;

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
  setModelForBreadcrumbs: setModelForBreadcrumbs
  //setNameDiscriptionModel: setNameDiscriptionModelAC
})(withRouterCar);

