import { userApi } from "../../serverApi/api"
import { PhotosType, ProfileType } from "../../types/commonTypes"

const SET_PROFILE = "profile/SET_PROFILE"
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS"
const SAVE_PROFILE_INFO_SUCCESS = "profile/SAVE_PROFILE_INFO_SUCCESS"
const CLEAR_DATA_PROFILE = "profile/CLEAR_DATA_PROFILE"


const initialState = {
    profile: null as ProfileType | null
}
export type InitialStateType = typeof initialState



let profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_PROFILE:
            return { ...state, profile: action.profile }
        case SAVE_PHOTO_SUCCESS:
            return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType }
        case SAVE_PROFILE_INFO_SUCCESS:
            debugger;
            return {
                ...state,
                profile: {
                    ...state.profile, ...action.data,
                    contacts: { ...state.profile?.contacts, ...action.link }
                }
            }
        case CLEAR_DATA_PROFILE:
            return initialState
        default:
            return state;;
    }
}



type SetProfileAcType = {
    type: typeof SET_PROFILE,
    profile: ProfileType
}
export const setProfile = (profile: ProfileType): SetProfileAcType => ({ type: SET_PROFILE, profile })


type SetPhotoSuccessAcType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType
}
export const setPhotoSuccess = (photos: PhotosType): SetPhotoSuccessAcType => ({ type: SAVE_PHOTO_SUCCESS, photos })

type ClearDataAcType = {
    type: typeof CLEAR_DATA_PROFILE
}
export const clearData = (): ClearDataAcType => ({ type: CLEAR_DATA_PROFILE })

//если айдишник пустой, то получаем наш профиль
export const getProfile = (id?: number) => {
    return async (dispatch: any) => {
        if (!id) {
            debugger;
            let response = await userApi.getAuth();
            response = await userApi.getProfile(response.data.data.id)
            dispatch(setProfile(response.data))
        }
        else {
            let response = await userApi.getProfile(id)
            dispatch(setProfile(response.data))
        }
    }
}

export const savePhoto = (file: any) => {
    return async (dispatch: any) => {
        let response = await userApi.setMyPhoto(file)
        if (!response.data.resultCode)
            dispatch(setPhotoSuccess(response.data.data.photos))
    }
}

export const saveProfileInfo = (data: any) => {
    return async (dispatch: any) => {
        let response = await userApi.changeMyInfo(data);
        dispatch(getProfile());

        // if (response.data.resultCode)
        //     dispatch(stopSubmit("userInfo", { _error: response.data.messages }))
    }
}

export default profileReducer;