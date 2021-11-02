import axiosInstance from "./axiosInstance";

const AuthApi = {
    me: () => {
        return axiosInstance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login: (email, password, rememberMe) => {
        return axiosInstance.post(`auth/login`, {email, password, rememberMe})
    },
    logout: () => {
        return axiosInstance.delete(`auth/login`)
    },
}

export default AuthApi;