const ADD_FRIEND = 'ADD_FRIEND';
const UNFRIEND = 'UNFRIEND';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

const initialState = {
    users: [],
    totalCount: 19,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
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
            return {...state, currentPage: action.pageNumber}
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount}
        default:
            return state;
    }
};
export default usersReducer;

export const addFriendAC = (userId) => ({type: ADD_FRIEND, userId});
export const unfriendAC = (userId) => ({type: UNFRIEND,userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setCurrentPageAC = (pageNumber) => ({type: CURRENT_PAGE, pageNumber});