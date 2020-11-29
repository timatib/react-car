import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./Breadcrumbs.module.css";

const Breadcrumbs = (props) => {
    console.log(props.explodedUrl);
    return (
        <div className={style.breadcrumbsWrapper}> 
            {props.explodedUrl.map((value, key) => {
                value.link = value.link ? value.link  : '#';
                return <NavLink to={value.link}><span >{value.title}</span></NavLink>
            })}
        </div>
    )
}

export default Breadcrumbs;