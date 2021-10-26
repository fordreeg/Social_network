const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    id: null,
    email: null,
    login: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.userData
            };
        default:
            return state;
    }
};
export default authReducer;

export const setUserDataAC = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        userData: {userId, email, login}
    }
};