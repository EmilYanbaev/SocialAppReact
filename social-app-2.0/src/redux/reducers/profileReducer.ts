import { userApi } from "../../serverApi/api"
import { PhotosType, ProfileType } from "../../types/commonTypes"
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from "../store";

const SET_PROFILE = "profile/SET_PROFILE"
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS"
const CLEAR_DATA_PROFILE = "profile/CLEAR_DATA_PROFILE"


const initialState = {
    profile: null as ProfileType | null
}
export type InitialStateType = typeof initialState



let profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_PROFILE:
            return { ...state, profile: action.profile }
        case SAVE_PHOTO_SUCCESS:
            return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType }
        case CLEAR_DATA_PROFILE:
            return initialState
        default:
            return state;;
    }
}

type ActionsTypes = SetProfileAcType | SetPhotoSuccessAcType | ClearDataAcType

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


type ThunkType = ThunkAction<Promise<void>,AppStateType,unknown,ActionsTypes>
//если айдишник пустой, то получаем наш профиль
export const getProfile = (id?: number):ThunkType => {
    return async (dispatch,getState) => {
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

export const savePhoto = (file: any):ThunkType => {
    return async (dispatch,getState) => {
        let response = await userApi.setMyPhoto(file)
        if (!response.data.resultCode)
            dispatch(setPhotoSuccess(response.data.data.photos))
    }
}

export const saveProfileInfo = (data: any):ThunkType => {
    return async (dispatch,getState) => {
        let response = await userApi.changeMyInfo(data);
        dispatch(getProfile());
    }
}

export default profileReducer;