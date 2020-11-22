import React from "react";
import { connect } from "react-redux";
import { getBrandsModelCarsThunk } from "../../Reducers/carPageReduser";
import Car from "./Car";
import style from "./Cars.module.css";

class Cars extends React.Component {

  componentDidMount(){
    this.props.getBrandsModelCars()
  }
   
  render() {

    return (
      <div className={style.carsWrapper}>
        {this.props.modelCars.map((itemCar, key) => {
          return(
            <Car key={key} modelCar={itemCar} />
          )
        })}
      </div>
    );
  }
}

let mapDispatchToProps = (state) => {
  return{
    modelCars: state.carPage.modelCars
  }
}

export default connect(mapDispatchToProps,{
  getBrandsModelCars: getBrandsModelCarsThunk
})(Cars);
