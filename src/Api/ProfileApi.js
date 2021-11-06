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
    savePhotos: (file) => {
        const formData = new FormData();
        formData.append('image', file);
        return axiosInstance.put(`profile/photo`, formData)
    },
    saveNewDataProfile: (profile) => {
        return axiosInstance.put(`profile`, profile)
    },
}

export default ProfileApi;