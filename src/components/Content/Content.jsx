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
                    store={props.store}
                />
            </Route>
            <Route exact path='/messages'>
                <Messages
                    messDialogs={props.messages.messDialogs}
                    store={props.store}
                />
            </Route>
        </div>
    )
};

export default Content;