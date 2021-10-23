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
                    imgSrc='https://cdn-icons-png.flaticon.com/512/876/876817.png'
                    name='Music'
                    url='/Music'
                />
                <li className='divider'/>
                <NavigationItem
                    imgSrc='https://cdn-icons-png.flaticon.com/512/503/503849.png'
                    name='Find users'
                    url='/users'
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