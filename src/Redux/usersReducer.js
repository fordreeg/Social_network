const ADD_FRIEND = 'ADD_FRIEND';
const UNFRIEND = 'UNFRIEND';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            return {
                ...state,
                users: state.users.map(u => {
                   if (u.id === action.userId) {
                       return {...u, isFriend: true}
                   }
                   return u;
                }),
                
            };
        case UNFRIEND:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFriend: false}
                    }
                    return u;
                }),
    
            };
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};
        default:
            return state;
    }
};
export default usersReducer;

export const addFriendAC = (userId) => ({type: ADD_FRIEND, userId: userId});
export const unfriendAC = (userId) => ({type: UNFRIEND, userId: userId});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});