import ProfileContainer from "./Profile/ProfileContainer";
import style from './Content.module.css'
import {Route} from "react-router-dom";
import UsersContainer from "./Users/UsersContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import LoginContainer from "./Login/LoginContainer";

const Content = (props) => {
    return (
        <div className={style.wrapper}>
            <Route exact path='/profile'>
                <ProfileContainer/>
            </Route>
            <Route exact path='/messages'>
                <MessagesContainer/>
            </Route>
            <Route exact path='/users'>
                <UsersContainer/>
            </Route>
            <Route path='/login'>
                <LoginContainer/>
            </Route>
        </div>
    )
};

export default Content;