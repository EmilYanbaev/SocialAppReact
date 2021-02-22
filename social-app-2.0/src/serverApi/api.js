import * as axios from "axios"


const instance = axios.create(
    {
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        withCredentials: true,
        headers: { "API-KEY": "174f6e90-1e41-4fb5-b51c-d8e5194823f5" }
    }
)

export const userApi = {
    getUsers(currentPage, pageSize, textSearch) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${textSearch}`).then(response => response.data)
    },

    follow(id, followed) {
        if (!followed)
            return instance.post(`follow/${id}`).then(response => response.data)
        else
            return instance.delete(`follow/${id}`).then(response => response.data)
    },

    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getAuth() {
        return instance.get(`auth/me`)
    },
    login({ email, password, rememberMe }) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`);
    },
    setMyPhoto(file) {
        let formData = new FormData()
        formData.append("image", file)
        return instance.put("/profile/photo", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    changeMyInfo({ vk, github, ...data }) {
        let fullData = {
            ...data,
            contacts: { vk, github }
        }
        debugger;
        return instance.put("/profile", fullData)
    }
}



