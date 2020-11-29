import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { getBrandsModelCarsThunk } from "../../../reducers/brandReducer";
import Breadcrumbs from "./Breadcrumbs";
import style from "./Breadcrumbs.module.css";

class BreadcrumbsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUrl: '',
      currentUrlExploded: []
    };
  }

  componentDidMount() {
   
    this.refreshUrlInState();

    setTimeout(() => {
      console.log(this.props);
    }, 1000)
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname != this.props.location.pathname) {
      this.refreshUrlInState();
    }
  }

  refreshUrlInState() {
    let url = this.props.location.pathname;
    this.setState({currentUrl: url}, () => {
      this.setCurrentExplodedUrl();
    })
  }

  setCurrentExplodedUrl() {

    if(this.state.currentUrl) {
      let explodedUrl = this.state.currentUrl.split('/');

      if(explodedUrl.length == 2) {
        this.setState({currentUrlExploded: [ 
          {title: 'Главная', link: '/'}, 
        ]})
      } else if(explodedUrl.length == 3) {
        this.setState({currentUrlExploded: [ 
          {title: 'Главная', link: '/'}, 
          {title: explodedUrl[2], link: ''} 
        ]})
      } else if(explodedUrl.length == 4) {
        this.setState({currentUrlExploded: [ 
          {title: 'Главная', link: '/'}, 
          {title: explodedUrl[2], link: '/brand/' + explodedUrl[2]},
          {title: this.props.bodyTitle && this.props.bodyTitle, link: ''} 
        ]})
      }
    }
    
  }

  render() {
    return <Breadcrumbs explodedUrl={this.state.currentUrlExploded} />
  }
}

let withBreadcrumbs = withRouter(BreadcrumbsContainer);

let mapStateToProps = (state) => {
  return {
    brand: state.modelsPage.brand,
    bodyTitle: state.descriptionPage.modelDescription.body_index,
  };
};

export default connect(mapStateToProps, {})(withBreadcrumbs);
