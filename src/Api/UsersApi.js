import axiosInstance from "./axiosInstance";

const UsersApi = {
    getUsers: (currentPage, pageSize) => {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    addFriend: (userId) => {
        return axiosInstance.post(`follow/${userId}`, {})
            .then(response => {
                console.log(response)
                return response.data
            })
    },
    unFriend: (userId) => {
        return axiosInstance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export default UsersApi;