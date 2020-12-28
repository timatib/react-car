import React from "react";
import style from "./Car.module.css";
import defaultCar from "../../assets/images/gost.png";
import EngineData from "./EngineData/EngineData";
import { connect } from "react-redux";
import { getModelDescriptionThunk, setNameDiscriptionModelAC, resetStateData } from "../../reducers/carReducer";
import { setModelForBreadcrumbs } from "../../reducers/modelsPageReducer"
import { withRouter } from "react-router-dom";
import EngineDataTable from "./EngineData/EngineDataTable";
import EnginesCards from "./EnginesCards";
import Preloader from '../common/Preloader/Preloader';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOpenedEngineDataNumber: 0,
      isDataLoading: true
    };
  }

  componentDidMount() {
    let brand = this.props.match.params.brand
    let carId = this.props.match.params.carId
      ? this.props.match.params.carId
      : 1;
    this.props.getModelDescription(brand, carId).then(() => {
      this.setState({isDataLoading: false})
    })

    this.props.setModelForBreadcrumbs(this.props.modelDescription.body_index);
  }

  componentDidUpdate(prevProps) {
    if(prevProps != this.props) {
      this.props.setModelForBreadcrumbs(this.props.modelDescription.body_index);
    }
  }

  componentWillUnmount() {
    this.props.resetState();
  }


  openEngineDataTable = (key) => {
    this.setState({ currentOpenedEngineDataNumber: key });
  };

  render() {
    if(this.state.isDataLoading) {
        return <Preloader />
    }

    let modelDescription = this.props.modelDescription;
    console.log(modelDescription);

    return (
      <div className={style.featureModelWrapper}>
  
        <div className={style.titleDescriptionImgWrapper}>
          <div className={style.titleDescriptionWrapper}>
            <div className={style.titleDescriptionWrapperContent}>
            <div className={style.title}>
                {modelDescription.brand}
                <span> {modelDescription.body_title} </span>
                <span>{modelDescription.body_index}</span>
            </div>
            <div className={style.productionYears}>
              {modelDescription.year_production_start} - {modelDescription.year_production_end}
            </div>
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
  setModelForBreadcrumbs: setModelForBreadcrumbs,
  resetState: resetStateData
})(withRouterCar);

