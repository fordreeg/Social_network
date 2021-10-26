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
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.toggleFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleFetchingAC(false)
                this.props.setUsersAC(response.data.items);
                this.props.setTotalCountAC(response.data.totalCount);
            });
    }
    
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPageAC(pageNumber);
        this.props.toggleFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleFetchingAC(false)
                this.props.setUsersAC(response.data.items);
            });
    }
    
    onAddFriend = (userId) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
            withCredentials: true,
            headers: {
                'API-KEY': 'd7025a09-8921-4f3f-bdbe-d429752c93dc',
            }
        })
            .then(response => {
                console.log(response.data)
                if(response.data.resultCode === 0) {
                    this.props.addFriendAC(userId)
                }
            });
    }
    
    onUnFriend = (userId) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            withCredentials: true,
            headers: {
                'API-KEY': 'd7025a09-8921-4f3f-bdbe-d429752c93dc',
            }
        })
            .then(response => {
                console.log(response.data)
                if(response.data.resultCode === 0) {
                    this.props.unfriend(userId)
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