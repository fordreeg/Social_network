import axiosInstance from "./axiosInstance";

const AuthApi = {
    me: () => {
        return axiosInstance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login: (email, password, rememberMe, captcha) => {
        return axiosInstance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    getCaptcha: () => {
        return axiosInstance.get('security/get-captcha-url')
    },
    logout: () => {
        return axiosInstance.delete(`auth/login`)
    },
}

export default AuthApi;