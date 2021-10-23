const ADD_FRIEND = 'ADD_FRIEND';
const UNFRIEND = 'UNFRIEND';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [
        {
            id: '1',
            name: 'Chris',
            surname: 'Gggg',
            status: 'yep',
            location: {country: 'Belarus', city: 'Minsk'},
            isFriend: false,
        },
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            return {};
        case UNFRIEND:
            return {};
        case SET_USERS:
            return {};
        default:
            return state;
    }
};
export default usersReducer;

export const addFriendAC = (name, avatar, time) => {
    return {
        type: ADD_FRIEND,
        name: name,
        avatar: avatar,
        time: time
    }
};
export const unfriendAC = (newPostText) => {
    return {
        type: UNFRIEND,
        newPostText: newPostText,
    }
};

export const setUsersAC = (newPostText) => {
    return {
        type: SET_USERS,
        newPostText: newPostText,
    }
};