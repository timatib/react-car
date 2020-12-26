import React from "react";
import { connect } from "react-redux";
import { getBrandsModelCarsThunk } from "../../reducers/brandReducer";
import Brand from "./Brand";
import style from "./Brands.module.css";
import Preloader from '../common/Preloader/Preloader';


class Brands extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDataLoading: true
    };
  }

  componentDidMount(){
    this.props.getBrandsModelCars().then(() => {
      this.setState({isDataLoading: false})
    })
  }
  
  render() {
    if(this.state.isDataLoading) {
      return <Preloader />
    } 
    return (
      <div className={style.carsWrapper}>
        {this.props.brands.map((car, key) => {
          return(
            <Brand key={key} data={car} />
          )
        })}
      </div>
    );
  }
}

let mapDispatchToProps = (state) => {
  return {
    brands: state.brandPage.brands
  }
}

export default connect(mapDispatchToProps,{
  getBrandsModelCars: getBrandsModelCarsThunk
})(Brands);
