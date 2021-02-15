import { userApi } from "../../serverApi/api"

const SET_PROFILE = "profile/SET_PROFILE"
// const SET_CURRENT_ID = "SET_CURRENT_ID"
const CLEAR_DATA_PROFILE = "profile/CLEAR_DATA_PROFILE"

const initialState = {
    profile: {}
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return { ...state, profile: action.profile }
        // case SET_CURRENT_ID:
        //     return { ...state, currentIdinUrl: action.id }
        case CLEAR_DATA_PROFILE:
            return initialState
        default:
            return state;;
    }
}

export const setProfile = (profile) => ({ type: SET_PROFILE, profile })

// export const setCurrentId = (id) => ({ type: SET_CURRENT_ID, id })

export const clearData = () => ({ type: CLEAR_DATA_PROFILE })

//если айдишник пустой, то получаем наш профиль
export const getProfileThunkCreator = (id) => {
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


export default profileReducer;