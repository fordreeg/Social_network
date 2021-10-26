import axiosInstance from "./axiosInstance";

const AuthApi = {
    login: () => {
        return axiosInstance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
}

export default AuthApi;