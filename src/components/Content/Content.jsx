import ProfileContainer from "./Profile/ProfileContainer";
import style from './Content.module.css'
import Messages from "./Messages/Messages";
import {Route} from "react-router-dom";
import UsersContainer from "./Users/UsersContainer";
import Login from "./Login/Login";

const Content = (props) => {
    return (
        <div className={style.wrapper}>
            <Route path='/profile/:userId?'>
                <ProfileContainer
                    profileFriends={props.profile.profileFriends}
                />
            </Route>
            <Route exact path='/messages'>
                <Messages
                    messDialogs={props.messages.messDialogs}
                />
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