import style from './Profile.module.css'
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePostsContainer from "./ProfilePosts/ProfilePostsContainer";
import ProfileFriends from "./ProfileFriends/ProfileFriends";
import Preloader from "../../Common/Preloader/Preloader";

const Profile = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
    console.log(props)
    return (
        <section className={style.wrapper}>
            <div className={style.leftColumn}>
                <ProfileAvatar
                    photo={props.profile.photos.large}
                />
                <ProfileFriends
                    friends={props.profileFriends}
                />
            </div>
            <div className={style.rightColumn}>
                <ProfileInfo profile={props.profile}
                             status={props.profilePage.status}
                             updateStatus={props.updateStatus}
                />
                <div className={style.posts}>
                    <ProfilePostsContainer/>
                </div>
            </div>
        </section>
    )
};

export default Profile;