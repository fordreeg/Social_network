import {connect} from "react-redux";
import Users from "./Users";
import {addFriendAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfriendAC} from "../../../Redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
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
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);