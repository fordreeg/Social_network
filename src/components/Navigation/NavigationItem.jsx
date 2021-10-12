import s from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const NavigationItem = (props) => {
    
    return (
        <li className={s.item}>
            <NavLink to={props.url} activeClassName={s.active} className={s.item__link}>
                <img src={props.imgSrc}
                     alt={'icon ' + props.name}
                     className={s.item__icon}/>
                {props.name}
            </NavLink>
        </li>
    )
};

export default NavigationItem;