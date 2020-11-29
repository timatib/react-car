import React from 'react';
import { connect } from "react-redux";
import style from './Models.module.css';
import { getBrandsAC, getModelsThunk } from "../../reducers/modelsPageReducer";
import Model from './Model';
import { withRouter } from 'react-router-dom';

class Models extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          url: ''
        };
      }
    

    componentDidMount() {
        let brand = this.props.match.params.brand;
        this.props.getModels(brand);
        this.props.getBrands(brand);
        this.setState({url: this.props.location.pathname});
    }

    render () {
        return <div className={style.brandModelWrapper}>

            {this.props.models.map((data, key) => {
                return <Model key={key} data={data} url={this.state.url}/>
                
            })}

            {/*             
            <NavLink to='/car'><div className={style.brandModelItem}>e39</div></NavLink>
            <NavLink to='/car'><div className={style.brandModelItem}>e34</div></NavLink> */}
        </div>
    }
}

let mapDispatchToProps = (state) => {
    return {
        models: state.modelsPage.models
    }
}

let withRouterModels = withRouter(Models)

export default connect(mapDispatchToProps,{
    getModels: getModelsThunk,
    getBrands: getBrandsAC
})(withRouterModels);

