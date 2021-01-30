import React from "react";
import { connect } from "react-redux";
import LeftMenuFilter from "./LeftMenuFilter";
import EscapeOutside from "react-escape-outside";
import {setIsMenuLeftAC} from '../../../reducers/navReduser'
import style from "./LeftMenuFilter.module.css";

const LeftMenuFilterContainer = (props) => {
  const handleEscapeOutside = () => {
    props.setIsMenuLeft(false)
  };

  return (
    <div>
      <EscapeOutside onEscapeOutside={handleEscapeOutside}>
        <LeftMenuFilter />
      </EscapeOutside>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {
    setIsMenuLeft: setIsMenuLeftAC
})(LeftMenuFilterContainer);
