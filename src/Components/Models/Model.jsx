import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Models.module.css';

const Model = (props) => {
    return (
        <NavLink to='/car'><div className={style.brandModelItem}>{props.data.body_title}</div></NavLink>
    )
}

export default Model;