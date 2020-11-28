import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { getBrandsModelCarsThunk } from "../../../reducers/brandReducer";
import style from "./BreadCrumbs.module.css";

class BreadCrumbs extends React.Component {
  render() {
    return (
      <div className={style.breadCrumbsWrapper}>
        <ul>
          <NavLink to="/">
            <li
              className={
                this.props.location.pathname === "/" ? style.active : ""
              }
            >
              {this.props.location.pathname === "/" ? "Brands >" : "Brands >"}
            </li>
          </NavLink>
          <NavLink to="/brand/Mercedes-Benz">
            <li
              className={
                this.props.location.pathname === "/brand/Mercedes-Benz"
                  ? style.active
                  : ""
              }
            >
              {this.props.location.pathname === "/brand/Mercedes-Benz" ? (
                <div>
                  {this.props.brand}
                  {">"}
                </div>
              ) : (
                <div>
                  {this.props.brand}
                  {">"}
                </div>
              )}
            </li>
          </NavLink>
          <NavLink to="/car/1">
            <li
              className={
                this.props.location.pathname === "/car/1" ? style.active : ""
              }
            >
              {this.props.location.pathname === "/car/1" ? (
                <div>{this.props.bodyTittle && this.props.bodyTittle}</div>
              ) : (
                <div>{this.props.bodyTittle && this.props.bodyTittle}</div>
              )}
            </li>
          </NavLink>
        </ul>
        {console.log(this.props.bodyTittle)}
      </div>
    );
  }
}

let withBreadCrumbs = withRouter(BreadCrumbs);

let mapStateToProps = (state) => {
  return {
    brand: state.modelsPage.brand,
    bodyTittle: state.descriptionPage.bodyTittle,
  };
};

export default connect(mapStateToProps, {})(withBreadCrumbs);
