import { connect } from "react-redux";
import {
  addFriend,
  getUsers,
  setCurrentPageAC,
  unFriend,
  usersType,
} from "../../../Redux/usersReducer";
import React from "react";
import Users from "./Users";
import { compose } from "redux";
import WithAuthRedirect from "../../../HOC/withAuthRedirect";
import { AppStateType } from "../../../Redux/reduxStore";

type PropsType = {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  followingInProgress: Number[];
  isFetching: boolean;
  users: usersType[];
  setCurrentPageAC: (currentPage: number) => void;
  addFriend: (currentPage: number, isFetching: boolean) => void;
  unFriend: (currentPage: number, isFetching: boolean) => void;
  getUsers: (currentPage: number, pageSize: number) => void;
};

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (currentPage: number) => {
    this.props.setCurrentPageAC(currentPage);
    this.props.getUsers(currentPage, this.props.pageSize);
  };

  onAddFriend = (userId: number) => {
    this.props.addFriend(userId, true);
  };

  onUnFriend = (userId: number) => {
    this.props.unFriend(userId, false);
  };

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
        followingInProgress={this.props.followingInProgress}
      />
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose(
  WithAuthRedirect,
  connect(mapStateToProps, {
    setCurrentPageAC,
    getUsers,
    addFriend,
    unFriend,
  })
)(UsersContainer);
