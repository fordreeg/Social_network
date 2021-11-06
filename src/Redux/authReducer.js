import AuthApi from "../Api/AuthApi";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isLogin: null,
    captcha: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
        case SET_CAPTCHA:
            return {
                ...state,
                ...action.userData,
                captcha: action.captcha,
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
export const setCaptchaAC = (captcha) => {
    return {
        type: SET_CAPTCHA,
        captcha,
    }
};

export const getAuthUserData = () => async (dispatch) => {
    let response = await AuthApi.me();
    if(response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setAuthDataAC(id, login, email, true));
    }
    return response;
}
export const login = (email, password, rememberMe, captcha, setStatus) => async (dispatch) => {
    const response = await AuthApi.login(email, password, rememberMe, captcha, setStatus);
    
    if(response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else if (response.data.resultCode === 10) {
        setStatus(response.data.messages)
        const captcha = await AuthApi.getCaptcha(),
              captchaUrl = captcha.data.url;
        dispatch(setCaptchaAC(captchaUrl))
    } else {
        setStatus(response.data.messages)
    }
}
export const logout = () => async (dispatch) => {
    let response = await AuthApi.logout();
    
    if(response.data.resultCode === 0) {
        dispatch(setAuthDataAC(null, null, null, false))
    }
}

