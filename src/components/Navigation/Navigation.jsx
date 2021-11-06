import style from './Navigation.module.css';
import NavigationItem from "./NavigationItem";

const Navigation = () => {
    
    return (
        <nav>
            <ul className={style.list}>
                <NavigationItem
                    imgSrc='https://cdn-icons-png.flaticon.com/512/1077/1077114.png'
                    name='Profile'
                    url='/profile'
                />
                <NavigationItem
                    imgSrc='https://cdn-icons-png.flaticon.com/512/1077/1077114.png'
                    name='Friends'
                    url='/friends'
                />
                <NavigationItem
                    imgSrc='https://cdn-icons-png.flaticon.com/512/561/561188.png'
                    name='Messages'
                    url='/messages'
                />
                <NavigationItem
                    imgSrc='https://cdn-icons-png.flaticon.com/512/876/876817.png'
                    name='News'
                    url='/news'
                />
                <NavigationItem
                    imgSrc='https://cdn-icons-png.flaticon.com/512/876/876817.png'
                    name='Music'
                    url='/music'
                />
                <li className='divider'/>
                <NavigationItem
                    imgSrc='https://cdn-icons-png.flaticon.com/512/503/503849.png'
                    name='Find users'
                    url='/users'
                />
                {/*<li className='divider'/>*/}
                {/*<NavigationItem*/}
                {/*    imgSrc='https://cdn-icons-png.flaticon.com/512/503/503849.png'*/}
                {/*    name='Settings'*/}
                {/*    url='/settings'*/}
                {/*/>*/}
            </ul>
        </nav>
    )
};

export default Navigation;