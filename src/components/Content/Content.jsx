import Profile from "./Profile/Profile";
import s from './Content.module.css'
import Messages from "./Messages/Messages";
import {Route} from "react-router-dom";

const Content = (props) => {
    return (
        <div className={s.wrapper}>
            <Route exact path='/profile'>
                <Profile
                    profileData={props.profile.profileData}
                    postData={props.profile.postData}
                    profileFriends={props.profile.profileFriends}
                    newPostText={props.profile.newPostText}
                    dispatch={props.dispatch}
                />
            </Route>
            <Route exact path='/messages'>
                <Messages
                    messDialogs={props.messages.messDialogs}
                    messDialog={props.messages.messDialog}
                    newMessageText={props.messages.newMessageText}
                    dispatch={props.dispatch}
                />
            </Route>
        </div>
    )
};

export default Content;