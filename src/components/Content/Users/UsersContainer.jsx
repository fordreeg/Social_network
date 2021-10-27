import {connect} from "react-redux";
import {
    addFriendAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    toggleFetchingAC,
    unfriendAC
} from "../../../Redux/usersReducer";
import React from "react";
import Users from "./Users";
import UsersApi from "../../../Api/UsersApi";

class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.toggleFetchingAC(true)
        UsersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.toggleFetchingAC(false)
                this.props.setUsersAC(response.items);
                this.props.setTotalCountAC(response.totalCount);
            });
    }
    
    onPageChanged = (currentPage) => {
        this.props.setCurrentPageAC(currentPage);
        this.props.toggleFetchingAC(true)
        UsersApi.getUsers(currentPage, this.props.pageSize)
            .then(response => {
                this.props.toggleFetchingAC(false)
                this.props.setUsersAC(response.items);
            });
    }
    
    onAddFriend = (userId) => {
        UsersApi.addFriend(userId)
            .then(response => {
                if(response.resultCode === 0) {
                    this.props.addFriendAC(userId)
                }
            });
    }
    
    onUnFriend = (userId) => {
        UsersApi.unFriend(userId)
            .then(response => {
                if(response.resultCode === 0) {
                    this.props.unfriendAC(userId)
                }
            });
    }
    
    
    render() {
        return (
            <Users
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                onAddFriend={this.onAddFriend}
                onUnFriend={this.onUnFriend}
                isFetching={this.props.isFetching}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
};

export default connect(mapStateToProps, {
    addFriendAC, unfriendAC, setUsersAC, setCurrentPageAC, setTotalCountAC, toggleFetchingAC
})(UsersContainer);