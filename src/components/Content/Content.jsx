import ProfileContainer from "./Profile/ProfileContainer";
import style from './Content.module.css'
import {Route} from "react-router-dom";
import UsersContainer from "./Users/UsersContainer";
import Login from "./Login/Login";
import MessagesContainer from "./Messages/MessagesContainer";

const Content = (props) => {
    return (
        <div className={style.wrapper}>
            <Route path='/profile/:userId?'>
                <ProfileContainer/>
            </Route>
            <Route exact path='/messages'>
                <MessagesContainer/>
            </Route>
            <Route exact path='/users'>
                <UsersContainer/>
            </Route>
            <Route path='/login'>
                <Login/>
            </Route>
        </div>
    )
};

export default Content;