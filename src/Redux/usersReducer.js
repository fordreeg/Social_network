import UsersApi from "../Api/UsersApi";

const ADD_FRIEND = 'ADD_FRIEND';
const UNFRIEND = 'UNFRIEND';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    totalCount: null,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            return {
                ...state,
                users: state.users.map(u => {
                   if (u.id === action.userId) {
                       return {...u, followed: true}
                   }
                   return u;
                }),
                
            };
        case UNFRIEND:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }),
    
            };
        case SET_USERS:
            return {...state, users: action.users};
        case CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount}
        case TOGGLE_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
};
export default usersReducer;

export const addFriendAC = (userId) => ({type: ADD_FRIEND, userId});
export const unfriendAC = (userId) => ({type: UNFRIEND, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setCurrentPageAC = (currentPage) => ({type: CURRENT_PAGE, currentPage});
export const toggleFetchingAC = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const toggleFollowingProgressAC = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleFetchingAC(true))
    let response = await UsersApi.getUsers(currentPage, pageSize);
    dispatch(toggleFetchingAC(false))
    dispatch(setUsersAC(response.items))
    dispatch(setTotalCountAC(response.totalCount))
};

const addFriendUnFriendFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgressAC(true, userId))
    let response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgressAC(false, userId))
}

export const addFriend = (userId) => async (dispatch) => {
    addFriendUnFriendFlow(dispatch, userId, UsersApi.addFriend, addFriendAC);
};

export const unFriend = (userId) => async (dispatch) => {
    addFriendUnFriendFlow(dispatch, userId, UsersApi.unFriend, unfriendAC);
}