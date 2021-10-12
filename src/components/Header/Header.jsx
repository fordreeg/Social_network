import s from './Header.module.css'
const Header = () => {
    return (
        <header className={s.wrap}>
            <div className="container">
                <div className={s.wrapper}>
                    <a href="/" className={s.logo}>
                        <img className={s.img} src='https://cdn-icons-png.flaticon.com/512/1312/1312142.png' alt='logo'/>
                        <h1 className={s.title}>kek.com</h1>
                    </a>
                    <div className={s.btn}>
                        <button className={s.logout}>Logout</button>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;