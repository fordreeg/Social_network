import s from './Navigation.module.css';
import NavigationItem from "./NavigationItem";

const Navigation = () => {
    
    return (
        <nav>
            <ul className={s.list}>
                <NavigationItem
                    imgSrc='https://cdn-icons-png.flaticon.com/512/1077/1077114.png'
                    name='Profile'
                    url='/Profile'
                />
                <NavigationItem
                    imgSrc='https://cdn-icons-png.flaticon.com/512/1077/1077114.png'
                    name='Friends'
                    url='/Friends'
                />
                <NavigationItem
                    imgSrc='https://cdn-icons-png.flaticon.com/512/561/561188.png'
                    name='Messages'
                    url='/Messages'
                />
                <NavigationItem
                    imgSrc='https://cdn-icons-png.flaticon.com/512/876/876817.png'
                    name='News'
                    url='/News'
                />
                <NavigationItem
                    imgSrc='https://cdn-icons.flaticon.com/png/512/461/premium/461146.png?token=exp=1633696266~hmac=b305c917d538958482a2ec6b6cb8c18a'
                    name='Music'
                    url='/Music'
                />
                <li className='divider'/>
                <NavigationItem
                    imgSrc='https://cdn-icons-png.flaticon.com/512/503/503849.png'
                    name='Settings'
                    url='/Settings'
                />
            </ul>
        </nav>
    )
};

export default Navigation;