import style from './Header.module.css'
import {NavLink} from "react-router-dom";
const HeaderAuthBtn = ({logout, ...props}) => {
    return (
        <div className={style.btn}>
            {
                props.isLogin
                    ? <NavLink to={'/login'} className={style.logout} onClick={logout}>Log out</NavLink>
                    : <NavLink to={'/login'} className={style.logout}>Login</NavLink>
            }
        </div>
    )
};

export default HeaderAuthBtn;