import axiosInstance from "./axiosInstance";

const ProfileApi = {
    getProfileInfo: (userId) => {
        return axiosInstance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
}

export default ProfileApi;