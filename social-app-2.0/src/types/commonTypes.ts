export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotosType = {
    small: string | null,
    large: string | null,
}

export type ProfileType = {
    userId: number,
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string,
    contacts: ContactsType
    photos: PhotosType
}


export type FullProfileType = {
    aboutMe: string
    userId: number,
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: PhotosType
}

export type UserType = {
    name: string,
    id: number,
    photos: PhotosType,
    status: string,
    followed: boolean
}


export type LoginDataType = {
    email: string,
    password: string,
    rememberMe: null | boolean,
    captcha: null | string
}


