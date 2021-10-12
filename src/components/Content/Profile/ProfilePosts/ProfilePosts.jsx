import s from "./ProfilePosts.module.css";
import ProfilePostsItem from "./ProfilePostsItem";

const ProfilePosts = (props) => {
    
    let profilePosts = props.postData
        .map(elem => {
            return (
                <ProfilePostsItem
                    avatar={elem.avatar}
                    name={elem.name}
                    time={elem.time}
                    text={elem.text}
                    likes={elem.likes}
                />
            )
        });
    
    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>My posts</h2>
            {profilePosts}
        </div>
    )
}

export default ProfilePosts;