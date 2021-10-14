import s from './Profile.module.css'
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePostNew from "./ProfilePosts/ProfilePostNew/ProfilePostNew";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import ProfileFriends from "./ProfileFriends/ProfileFriends";

const Profile = (props) => {
    console.log(props)
    return (
        <section className={s.wrapper}>
            <div className={s.leftColumn}>
                <ProfileAvatar avatar={props.profileData.avatar}/>
                <ProfileFriends
                    count={props.profileData.friends}
                    friends={props.profileFriends}
                />
            </div>
            <div className={s.rightColumn}>
                <ProfileInfo name={props.profileData.name}
                             status={props.profileData.status}
                             date={props.profileData.date}
                             city={props.profileData.city}
                             education={props.profileData.education}
                             website={props.profileData.website}
                />
                <div className={s.posts}>
                    <ProfilePostNew
                        avatar={props.profileData.avatar}
                        name={props.profileData.name}
                        newPostText={props.newPostText}
                        dispatch={props.dispatch}
                    />
                    <ProfilePosts
                        postData={props.postData}
                    />
                </div>
            </div>
        </section>
    )
};

export default Profile;