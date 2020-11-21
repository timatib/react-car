import react from 'react'
import { NavLink } from 'react-router-dom'
import style from './BrandModel.module.css'

const BrandModel = () => {
    return(
        <div className={style.brandModelWrapper}>
            <NavLink to='/feature-model'><div className={style.brandModelItem}>e60</div></NavLink>
            <NavLink to='/feature-model'><div className={style.brandModelItem}>e39</div></NavLink>
            <NavLink to='/feature-model'><div className={style.brandModelItem}>e34</div></NavLink>
        </div>
    )
}

export default BrandModel