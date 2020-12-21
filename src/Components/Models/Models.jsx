import React from 'react';
import { connect } from "react-redux";
import style from './Models.module.css';
import { getBrandsAC, getModelsThunk, setModelForBreadcrumbs, resetStateData } from "../../reducers/modelsPageReducer";
import Model from './Model';
import { withRouter } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';

class Models extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          url: '',
          isDataLoading: true
        };
    }

    
    
    componentDidMount() {
        let brand = this.props.match.params.brand;
        this.props.getModels(brand).then(() => {
            this.setState({isDataLoading: false})
        })
        this.props.getBrands(brand);
        this.setState({url: this.props.location.pathname});  
    }

    componentWillUnmount() {
        this.props.resetState();
    }

    render () {

        console.log(this.props)
        if(this.state.isDataLoading) {
            return <Preloader />
        }
        return <div className={style.brandModelWrapper}>
            {this.props.models.map((data, key) => {
                return <Model key={key} data={data} setModelName={this.props.setModelForBreadcrumbs} url={this.state.url}/>
            })}
        </div>
    }
}

let mapDispatchToProps = (state) => {
    return {
        models: state.modelsPage.models
    }
}

let withRouterModels = withRouter(Models)

export default connect(mapDispatchToProps, { 
    getModels: getModelsThunk,
    getBrands: getBrandsAC,
    setModelForBreadcrumbs: setModelForBreadcrumbs,
    resetState: resetStateData
})(withRouterModels);
