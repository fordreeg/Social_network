import style from "./Users.module.css";
import UsersItem from "./UsersItem/UsersItem";
import Preloader from "../../Common/Preloader/Preloader";
import Paginator from "../../Common/Paginator/Paginator";
import { usersType } from "../../../Redux/usersReducer";

type propType = {
  totalCount: number;
  pageSize: number;
  isFetching: boolean;
  currentPage: number;
  users: usersType[];
  onPageChanged: (currenPage: number) => void;
  onAddFriend: (userID: number) => void;
  onUnFriend: (userID: number) => void;
  followingInProgress: Number[];
};

const Users: React.FC<propType> = ({
  totalCount,
  pageSize,
  isFetching,
  users,
  onAddFriend,
  onUnFriend,
  followingInProgress,
  onPageChanged,
  currentPage,
  ...props
}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.head}>
        <h2 className={style.title}>Users</h2>
      </div>
      <form action="#" className={style.form}>
        <input
          type="search"
          id="site-search"
          name="search"
          placeholder="Type to search..."
          className={style.input}
        />
        <button type="submit" className={style.btn} disabled={true}>
          Search
        </button>
      </form>
      <div className={style.userList}>
        {isFetching ? (
          <Preloader />
        ) : (
          users.map((u) => {
            return (
              <UsersItem
                key={u.id}
                id={u.id}
                name={u.name}
                // surname={u.surname}
                status={u.status}
                photos={u.photos.small}
                followed={u.followed}
                // country={u.location.country}
                // city={u.location.city}
                onAddFriend={onAddFriend}
                onUnFriend={onUnFriend}
                followingInProgress={followingInProgress}
              />
            );
          })
        )}
      </div>
      <Paginator
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
        portionSize={10}
      />
    </div>
  );
};

export default Users;
