import style from './Header.module.css'
const Header = () => {
    return (
        <header className={style.wrap}>
            <div className="container">
                <div className={style.wrapper}>
                    <a href="/" className={style.logo}>
                        <img className={style.img} src='https://cdn-icons-png.flaticon.com/512/1312/1312142.png' alt='logo'/>
                        <h1 className={style.title}>kek.com</h1>
                    </a>
                    <div className={style.btn}>
                        <button className={style.logout}>Logout</button>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;