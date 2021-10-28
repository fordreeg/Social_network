import AuthApi from "../Api/AuthApi";

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

export const toggleAuthAC = (isLogin) => ({type: TOGGLE_LOGIN, isLogin});
export const setAuthDataAC = (userId, email, login) => {
    return {
        type: SET_AUTH_DATA,
        userData: {userId, email, login}
    }
};

export const signIn = () => {
    return (dispatch) => {
        AuthApi.login().then(response => {
            if(response.resultCode === 0) {
                dispatch(toggleAuthAC(true));
                let {id, login, email} = response.data;
                dispatch(setAuthDataAC(id, login, email));
            } else {
                dispatch(toggleAuthAC(false));
            }
        });
    }
}
