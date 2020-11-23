import React from 'react';
import { connect } from "react-redux";
import style from './Models.module.css';
import { getModelsThunk } from "../../reducers/modelsPageReducer";
import Model from './Model';

class Models extends React.Component {

    componentDidMount() {
        let brand = this.props.match.params.brand;
        debugger
        this.props.getModels(brand);
    }

    render () {
        return <div className={style.brandModelWrapper}>

            {this.props.models.map((key, value) => {
                return <Model data={key}/>
                
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

export default connect(mapDispatchToProps,{
    getModels: getModelsThunk
})(Models);

