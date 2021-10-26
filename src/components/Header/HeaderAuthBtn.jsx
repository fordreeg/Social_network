import style from './Header.module.css'
const HeaderAuthBtn = (props) => {
    return (
        <div className={style.btn}>
            {
                props.isLogin
                    ? <button className={style.logout}>Logout</button>
                    : <button className={style.logout}>Login</button>
            }
        </div>
    )
};

export default HeaderAuthBtn;