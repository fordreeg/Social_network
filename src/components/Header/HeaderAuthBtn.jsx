import style from './Header.module.css'
import {NavLink} from "react-router-dom";
const HeaderAuthBtn = (props) => {
    return (
        <div className={style.btn}>
            {
                props.isLogin
                    ? <NavLink to={'/login'} className={style.logout} onClick={props.logout}>Log out</NavLink>
                    : <NavLink to={'/login'} className={style.logout}>Login</NavLink>
            }
        </div>
    )
};

export default HeaderAuthBtn;