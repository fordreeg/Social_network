import AuthApi from "../Api/AuthApi";

const SET_AUTH_DATA:string = 'SET_AUTH_DATA';
const SET_CAPTCHA:string = 'SET_CAPTCHA';


<<<<<<< HEAD
export type initialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isLogin: boolean,
    captcha: string | null,
}

const initialState:initialStateType = {
    userId: null,
    email: null,
    login: null,
    isLogin: false,
    captcha: null,
};

const authReducer = (state = initialState, action: any):initialStateType => {
=======
const initialState = {
    userId: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isLogin: false,
    captcha: null as null | string,
};

export type initialStateType = typeof initialState;

const authReducer = (state = initialState, action:any):initialStateType => {
>>>>>>> 59673158118fced5652f0db5ae500730cc70bb70
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

type setAuthDataACUserDataType = {
<<<<<<< HEAD
    userId:number | null
    email:string | null
    login:string | null
    isLogin:boolean | null
}
type setAuthDataACType = {
    type: typeof SET_AUTH_DATA,
    userData: setAuthDataACUserDataType
}
export const setAuthDataAC = (userId:number | null, email:string | null,
                              login:string | null, isLogin:boolean):setAuthDataACType => {
=======
    userId: number | null
    email: string | null
    login: string | null
    isLogin: boolean | null
}
type setAuthDataACType = {
    type: typeof SET_AUTH_DATA
    userData: setAuthDataACUserDataType
}
export const setAuthDataAC = (userId:number | null, email:string | null, login:string | null, isLogin:boolean): setAuthDataACType => {
>>>>>>> 59673158118fced5652f0db5ae500730cc70bb70
    return {
        type: SET_AUTH_DATA,
        userData: { userId, email, login, isLogin }
    }
};

type setCaptchaACType = {
    type: typeof SET_CAPTCHA
    captcha: string
}
export const setCaptchaAC = (captcha:string):setCaptchaACType => {
    return {
        type: SET_CAPTCHA,
        captcha,
    }
};

export const getAuthUserData = () => async (dispatch: any) => {
    let response = await AuthApi.me();
<<<<<<< HEAD
    if(response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setAuthDataAC(id, email, login, true));
    }
    return response;
}
export const login = (email:string, password:string, rememberMe:boolean, captcha:string, setStatus: any) => async (dispatch: any) => {
    const response = await AuthApi.login(email, password, rememberMe, captcha);
    
    if(response.data.resultCode === 0) {
=======
    if (response.resultCode === 0) {
        let { id, login, email } = response.data;
        dispatch(setAuthDataAC(id, login, email, true));
    }
    return response;
}
export const login = (email:string, password:string, rememberMe:boolean, captcha:string, setStatus:any) => async (dispatch:any) => {
    const response = await AuthApi.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
>>>>>>> 59673158118fced5652f0db5ae500730cc70bb70
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
<<<<<<< HEAD
export const logout = () => async (dispatch: any) => {
=======
export const logout = () => async (dispatch:any) => {
>>>>>>> 59673158118fced5652f0db5ae500730cc70bb70
    let response = await AuthApi.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthDataAC(null, null, null, false))
    }
}

