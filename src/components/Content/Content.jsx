import Profile from "./Profile/Profile";
import style from './Content.module.css'
import Messages from "./Messages/Messages";
import {Route} from "react-router-dom";
import Users from "./Users/Users";

const Content = (props) => {
    return (
        <div className={style.wrapper}>
            <Route exact path='/profile'>
                <Profile
                    profileData={props.profile.profileData}
                    postData={props.profile.postData}
                    profileFriends={props.profile.profileFriends}
                    newPostText={props.profile.newPostText}
                />
            </Route>
            <Route exact path='/messages'>
                <Messages
                    messDialogs={props.messages.messDialogs}
                />
            </Route>
            <Route exact path='/users'>
                <Users/>
            </Route>
        </div>
    )
};

export default Content;