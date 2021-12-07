import style from "./Profile.module.css";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePostsContainer from "./ProfilePosts/ProfilePostsContainer";
import ProfileFriends from "./ProfileFriends/ProfileFriends";
import Preloader from "../../Common/Preloader/Preloader";

const Profile = ({
  profile,
  profileFriends,
  profilePage,
  updateStatus,
  isOwner,
  savePhotos,
  saveNewDataProfile,
}) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <section className={style.wrapper}>
      <div className={style.leftColumn}>
        <ProfileAvatar
          photo={profile.photos.large}
          isOwner={isOwner}
          savePhotos={savePhotos}
        />
        <ProfileFriends friends={profileFriends} />
      </div>
      <div className={style.rightColumn}>
        <ProfileInfo
          profile={profile}
          status={profilePage.status}
          updateStatus={updateStatus}
          isOwner={isOwner}
          saveNewDataProfile={saveNewDataProfile}
        />
        <div className={style.posts}>
          <ProfilePostsContainer isOwner={isOwner} />
        </div>
      </div>
    </section>
  );
};

export default Profile;
