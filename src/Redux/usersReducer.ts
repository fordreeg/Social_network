import UsersApi from "../Api/UsersApi";
import { ProfilePhotos } from "../typesTs/typesTS";
const ADD_FRIEND: string = 'ADD_FRIEND';
const UNFRIEND: string = 'UNFRIEND';
const SET_USERS: string = 'SET_USERS';
const CURRENT_PAGE: string = 'CURRENT_PAGE';
const SET_TOTAL_COUNT: string = 'SET_TOTAL_COUNT';
const TOGGLE_FETCHING: string = 'TOGGLE_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS: string = 'TOGGLE_IS_FOLLOWING_PROGRESS';

type usersType = {
    name: string
    id: number
    photos: ProfilePhotos
    friend: number | boolean
    status: string | null
    followed: boolean
}

const initialState = {
    users: [] as Array<usersType>,
    totalCount: null as number | null,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Number[],
};
type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_FRIEND:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                }),

            };
        case UNFRIEND:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                }),

            };
        case SET_USERS:
            return { ...state, users: action.users };
        case CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_COUNT:
            return { ...state, totalCount: action.totalCount }
        case TOGGLE_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId] as Number[]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
};
export default usersReducer;

export const addFriendAC = (userId: number) => ({
    type: ADD_FRIEND as typeof ADD_FRIEND,
    userId: userId as number,
});
export const unfriendAC = (userId: number) => ({
    type: UNFRIEND as typeof UNFRIEND,
    userId: userId as number
});
export const setUsersAC = (users: usersType) => ({
    type: SET_USERS as typeof SET_USERS,
    users: users as usersType
});
export const setTotalCountAC = (totalCount: number) => ({
    type: SET_TOTAL_COUNT as typeof SET_TOTAL_COUNT,
    totalCount: totalCount as number
});
export const setCurrentPageAC = (currentPage: number) => ({
    type: CURRENT_PAGE as typeof CURRENT_PAGE,
    currentPage: currentPage as number
});
export const toggleFetchingAC = (isFetching: boolean) => ({
    type: TOGGLE_FETCHING as typeof TOGGLE_FETCHING,
    isFetching: isFetching as boolean,
});
export const toggleFollowingProgressAC = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS as typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: isFetching as boolean,
    userId: userId as number,
});

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleFetchingAC(true))
    let response = await UsersApi.getUsers(currentPage, pageSize);
    dispatch(toggleFetchingAC(false))
    dispatch(setUsersAC(response.items))
    dispatch(setTotalCountAC(response.totalCount))
};

const addFriendUnFriendFlow = async (dispatch: any, userId: any, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgressAC(true, userId))
    let response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgressAC(false, userId))
}

export const addFriend = (userId: number) => async (dispatch: any) => {
    addFriendUnFriendFlow(dispatch, userId, UsersApi.addFriend, addFriendAC);
};

export const unFriend = (userId: number) => async (dispatch: any) => {
    addFriendUnFriendFlow(dispatch, userId, UsersApi.unFriend, unfriendAC);
}
