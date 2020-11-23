import React from "react";
import { connect } from "react-redux";
import { getBrandsModelCarsThunk } from "../../reducers/carPageReducer";
import Car from "./Brand";
import style from "./Brands.module.css";

class Brands extends React.Component {

  componentDidMount(){
    this.props.getBrandsModelCars()
  }
   
  render() {
    return (
      <div className={style.carsWrapper}>
        {this.props.modelCars.map((car, key) => {
          return(
            <Car key={key} data={car} />
          )
        })}
      </div>
    );
  }
}

let mapDispatchToProps = (state) => {
  return {
    modelCars: state.carPage.modelCars
  }
}

export default connect(mapDispatchToProps,{
  getBrandsModelCars: getBrandsModelCarsThunk
})(Brands);
