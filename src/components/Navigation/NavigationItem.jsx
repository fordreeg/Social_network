import style from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const NavigationItem = (props) => {
    
    return (
        <li className={style.item}>
            <NavLink to={props.url} activeClassName={style.active} className={style.item__link}>
                <img src={props.imgSrc}
                     alt={'icon ' + props.name}
                     className={style.item__icon}/>
                {props.name}
            </NavLink>
        </li>
    )
};

export default NavigationItem;