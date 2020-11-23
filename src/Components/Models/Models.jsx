import react from 'react'
import { NavLink } from 'react-router-dom'
import style from './Models.module.css'

const Models = () => {
    return (
        <div className={style.brandModelWrapper}>
            <NavLink to='/car'><div className={style.brandModelItem}>e60</div></NavLink>
            <NavLink to='/car'><div className={style.brandModelItem}>e39</div></NavLink>
            <NavLink to='/car'><div className={style.brandModelItem}>e34</div></NavLink>
        </div>
    )
}

export default Models;