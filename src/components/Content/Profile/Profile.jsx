import style from './Profile.module.css'
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePostsContainer from "./ProfilePosts/ProfilePostsContainer";
import ProfileFriends from "./ProfileFriends/ProfileFriends";

const Profile = (props) => {
    return (
        <section className={style.wrapper}>
            <div className={style.leftColumn}>
                <ProfileAvatar avatar={props.profileData.avatar}/>
                <ProfileFriends
                    count={props.profileData.friends}
                    friends={props.profileFriends}
                />
            </div>
            <div className={style.rightColumn}>
                <ProfileInfo name={props.profileData.name}
                             status={props.profileData.status}
                             date={props.profileData.date}
                             city={props.profileData.city}
                             education={props.profileData.education}
                             website={props.profileData.website}
                />
                <div className={style.posts}>
                    <ProfilePostsContainer/>
                </div>
            </div>
        </section>
    )
};

export default Profile;