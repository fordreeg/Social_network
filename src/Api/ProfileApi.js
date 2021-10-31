import axiosInstance from "./axiosInstance";

const ProfileApi = {
    getProfileInfo: (userId) => {
        return axiosInstance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getProfileStatus: (userId) => {
        return axiosInstance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    updateProfileStatus: (status) => {
        return axiosInstance.put(`profile/status`, {status})
    },
}

export default ProfileApi;