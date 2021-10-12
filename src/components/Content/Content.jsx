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
                    addPost={props.addPost}
                    newPostText={props.newPostText}
                    updateNewPostText={props.updateNewPostText}
                />
            </Route>
            <Route exact path='/messages'>
                <Messages
                    messDialogs={props.messages.messDialogs}
                    messDialog={props.messages.messDialog}
                    newMessageText={props.newMessageText}
                    updateNewMessageText={props.updateNewMessageText}
                    sendNewMessage={props.sendNewMessage}
                />
            </Route>
        </div>
    )
};

export default Content;