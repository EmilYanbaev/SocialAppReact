import axios from "axios"
import { FullProfileType, LoginDataType, PhotosType, ProfileType } from "../types/commonTypes"


const instance = axios.create(
    {
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        withCredentials: true,
        headers: { "API-KEY": "210d7774-1e6b-4007-a24a-f5432c57a921" }
    }
)


type SetPhotoResponse  = {
    data:PhotosType,
    resultCode: ResultCode,
    messages: string[],
}

type CommonResponseType = {
    data:any,
    resultCode: ResultCode,
    messages: string[],
}

type GetUsersType = {
    items:{
        id:number,
        name:string,
        status:string,
        photos:PhotosType,
        followed:boolean
    }[]
    totalCount:number,
    error:string
}

export const userApi = {

    async getProfile(userId: number) {
        return instance.get<FullProfileType>(`profile/${userId}`).then(res => res.data)
    },

    async setMyPhoto(file: any) {
        let formData = new FormData()
        formData.append("image", file)
        return instance.put<SetPhotoResponse>("/profile/photo", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res=>res.data)
    },
    async changeMyInfo(data: ProfileType) {
        return instance.put<CommonResponseType>("/profile", data).then(res=>res.data)
    },

    async getUsers(currentPage: number, pageSize: number, textSearch: string) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}&term=${textSearch}`).then(res=>res.data)
    },
    async follow(id: number, followed: boolean) {
        if (!followed)
            return instance.post<CommonResponseType>(`follow/${id}`).then(res=>res.data)
        else
            return instance.delete<CommonResponseType>(`follow/${id}`).then(res=>res.data)
    },
}


export enum ResultCode {
    Success = 0,
    Error = 1
}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}


type AuthResponseType = {
    data: {
        id: number,
        email: string,
        login: string,
    }
    resultCode: ResultCode,
    messages: string[],
}

type LoginResponseType = {
    data: {
        id: number,
    }
    resultCode: ResultCode | ResultCodeForCaptcha
    messages: string[],
}



export const authApi = {
    async getAuth() {
        return instance.get<AuthResponseType>(`auth/me`).then(res => res.data)
    },
    async login(email: string, password: string, rememberMe: null | boolean, captcha: null | string) {
        return instance.post<LoginResponseType>(`auth/login`, { email, password, rememberMe, captcha }).then(res => res.data)
    },

    logout() {
        return instance.delete<LoginDataType>(`auth/login`);
    },
    getCaptcha() {
        return instance.get<{url:string}>(`security/get-captcha-url`);
    }
}


