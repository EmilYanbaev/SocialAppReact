const TOGGLE_LEFTSITEBAR = "view/TOGGLE_LEFTSITEBAR"
const TOGGLE_PROFILE_CONTACTS = "view/TOGGLE_PROFILE_CONTACTS"
const SET_CLIENT_SIZE = "view/SET_CLIENT_SIZE"
const initialState = {
    widthClient: null,
    heightClient: null,
    isView: {
        leftSiteBar: false,
        profileContacts: false
    }
}

const viewReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LEFTSITEBAR:
            return { ...state, isView: { ...state.isView, leftSiteBar: !state.isView.leftSiteBar } }
        // case TOGGLE_PROFILE_CONTACTS:
        //     return { ...state, isView: { ...state.isView, profileContacts: !state.isView.profileContacts } }
        case SET_CLIENT_SIZE:
            return { ...state, widthClient: action.width, heightClient: action.height }
        default:
            return state;
    }
}

export default viewReducer;


export const toggleLeftSiteBar = () => ({ type: TOGGLE_LEFTSITEBAR })
// export const toggleProfileContacts = () => ({ type: TOGGLE_PROFILE_CONTACTS })

// export const setClientSize = (width, height) => ({ type: SET_CLIENT_SIZE, width, height })

// export const setClientSizeThunk = (dispatch) => {
//     dispatch(setClientSize(document.documentElement.clientWidth, document.documentElement.clientHeight))
// }