import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './NavBar.module.css'
import logo from '../../../Assets/images/logo.png';

const NavBar = () => {
return(
    <div className={style.navBar}>
        <div className={style.logoNavBar}>
           <NavLink to='/'> <img src={logo} alt="img"/></NavLink>
        </div>
        <div className={style.searchNavBar}>
                <input type="text" placeholder='Поиск' />
        </div>
    </div>
)
}

export default NavBar