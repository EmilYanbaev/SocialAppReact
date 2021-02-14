import { userApi } from "../../serverApi/api"

const SET_PROFILE = "SET_PROFILE"
// const SET_CURRENT_ID = "SET_CURRENT_ID"
const CLEAR_DATA_PROFILE = "CLEAR_DATA_PROFILE"

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

export const clearData = ()=>({type:CLEAR_DATA_PROFILE})

export const getProfileThunkCreator = (id) => {
    return dispatch => {
        if (!id) {
            userApi.getAuth().then(response => {
                userApi.getProfile(response.data.data.id).then(response => {
                    dispatch(setProfile(response.data))
                })
            })
        }
        else userApi.getProfile(id).then(response => {
            dispatch(setProfile(response.data))
        }
        )
    }
}


export default profileReducer;