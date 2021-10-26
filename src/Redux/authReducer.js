const SET_AUTH_DATA = 'SET_AUTH_DATA';
const TOGGLE_LOGIN = 'TOGGLE_LOGIN';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isLogin: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.userData
            };
        case TOGGLE_LOGIN:
            return {
                ...state,
                isLogin: action.isLogin
            }
        default:
            return state;
    }
};
export default authReducer;

export const setAuthDataAC = (userId, email, login) => {
    return {
        type: SET_AUTH_DATA,
        userData: {userId, email, login}
    }
};
export const toggleAuthAC = (isLogin) => {
    return {
        type: TOGGLE_LOGIN,
        isLogin,
    }
};