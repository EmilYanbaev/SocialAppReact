const SET_PROFILE = "SET_PROFILE"


const initialState = {
    profile: {}
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {...state,profile:action.profile}
        default:
            return state;;
    }
}

export const setProfile = (profile)=>{
    return {type:SET_PROFILE, profile}
}

// export const getProfileThunkCreator = (id = null)=>{  
//     return dispatch =>{
//         if(!userId)
//     }
// }


export default profileReducer;