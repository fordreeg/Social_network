import style from './Profile.module.css'
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePostsContainer from "./ProfilePosts/ProfilePostsContainer";
import ProfileFriends from "./ProfileFriends/ProfileFriends";
import Preloader from "../../Common/Preloader/Preloader";

const Profile = ({profile, profileFriends, profilePage, updateStatus,...props}) => {
    if(!profile) {
        return <Preloader/>
    }
    return (
        <section className={style.wrapper}>
            <div className={style.leftColumn}>
                <ProfileAvatar
                    photo={profile.photos.large}
                />
                <ProfileFriends
                    friends={profileFriends}
                />
            </div>
            <div className={style.rightColumn}>
                <ProfileInfo profile={profile}
                             status={profilePage.status}
                             updateStatus={updateStatus}
                />
                <div className={style.posts}>
                    <ProfilePostsContainer/>
                </div>
            </div>
        </section>
    )
};

export default Profile;