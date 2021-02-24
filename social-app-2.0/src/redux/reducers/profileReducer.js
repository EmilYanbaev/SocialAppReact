import { userApi } from "../../serverApi/api"

const SET_PROFILE = "profile/SET_PROFILE"

const CLEAR_DATA_PROFILE = "profile/CLEAR_DATA_PROFILE"
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS"
const SAVE_PROFILE_INFO_SUCCESS = "profile/SAVE_PROFILE_INFO_SUCCESS"

const initialState = {
    profile: {}
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return { ...state, profile: action.profile }
        case SAVE_PHOTO_SUCCESS:
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        case SAVE_PROFILE_INFO_SUCCESS:
            debugger;
            return {
                ...state,
                profile: {
                    ...state.profile, ...action.data,
                    contacts: { ...state.profile.contacts, ...action.link }
                }
            }
        case CLEAR_DATA_PROFILE:
            return initialState
        default:
            return state;;
    }
}

export const setProfile = (profile) => ({ type: SET_PROFILE, profile })

export const setPhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const saveProfileInfoSuccess = ({ vk, github, ...data }) => ({ type: SAVE_PROFILE_INFO_SUCCESS, data, link: { vk, github } })

export const clearData = () => ({ type: CLEAR_DATA_PROFILE })

//если айдишник пустой, то получаем наш профиль
export const getProfile = (id) => {
    return async dispatch => {
        if (!id) {
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

export const savePhoto = (file) => {
    return async (dispatch) => {
        let response = await userApi.setMyPhoto(file)
        if (!response.data.resultCode)
            dispatch(setPhotoSuccess(response.data.data.photos))
    }
}

export const saveProfileInfo = (data) => {
    return async (dispatch) => {
        let response = await userApi.changeMyInfo(data);
        dispatch(getProfile());

        // if (response.data.resultCode)
        //     dispatch(stopSubmit("userInfo", { _error: response.data.messages }))
        // else dispatch(saveProfileInfoSuccess(data))
    }
}

export default profileReducer;