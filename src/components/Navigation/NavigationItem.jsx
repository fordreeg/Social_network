import style from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const NavigationItem = ({name, url, imgSrc, ...props}) => {
    
    return (
        <li className={style.item}>
            <NavLink to={url} activeClassName={style.active} className={style.item__link}>
                <img src={imgSrc}
                     alt={'icon ' + name}
                     className={style.item__icon}/>
                {name}
            </NavLink>
        </li>
    )
};

export default NavigationItem;