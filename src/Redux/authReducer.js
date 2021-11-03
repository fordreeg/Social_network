import AuthApi from "../Api/AuthApi";

const SET_AUTH_DATA = 'SET_AUTH_DATA';

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
        default:
            return state;
    }
};
export default authReducer;

export const setAuthDataAC = (userId, email, login, isLogin) => {
    return {
        type: SET_AUTH_DATA,
        userData: {userId, email, login, isLogin}
    }
};

export const getAuthUserData = () => {
    return (dispatch) => {
        return AuthApi.me().then(response => {
            console.log(response)
            if(response.resultCode === 0) {
                let {id, login, email} = response.data;
                dispatch(setAuthDataAC(id, login, email, true));
            }
        });
    }
}
export const login = (email, password, rememberMe, setStatus) => {
    return (dispatch) => {
        AuthApi.login(email, password, rememberMe, setStatus).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                setStatus(response.data.messages)
            }
        });
    }
}
export const logout = () => {
    return (dispatch) => {
        AuthApi.logout().then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthDataAC(null, null, null, false))
            }
        });
    }
}

