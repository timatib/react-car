import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './NavBar.module.css'

const NavBar = () => {
return(
    <div className={style.navBar}>
        <ul className={style.ulNavbar}>
            <li><NavLink to="/auto">Автомобили</NavLink></li>
            <li><NavLink to="/images">Картики</NavLink></li>
        </ul>
    </div>
)
}

export default NavBar