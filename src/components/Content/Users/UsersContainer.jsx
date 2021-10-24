import {connect} from "react-redux";
import Users from "./Users";
import {addFriendAC, setUsersAC, unfriendAC} from "../../../Redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addFriend: (userId) => {
            dispatch(addFriendAC(userId))
        },
        unfriend: (userId) => {
            dispatch(unfriendAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);