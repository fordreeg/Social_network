import * as axios from "axios"

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'd7025a09-8921-4f3f-bdbe-d429752c93dc'
    }
});

export default axiosInstance;