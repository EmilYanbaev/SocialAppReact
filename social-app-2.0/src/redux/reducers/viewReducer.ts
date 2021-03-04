const TOGGLE_LEFTSITEBAR = "view/TOGGLE_LEFTSITEBAR"
const SET_CLIENT_SIZE = "view/SET_CLIENT_SIZE"

const initialState = {
    widthClient: null as number | null,
    heightClient: null as number | null,
    isView: {
        leftSiteBar: false,
    }
}
export type InitialStateType = typeof initialState



const viewReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case TOGGLE_LEFTSITEBAR:
            return { ...state, isView: { ...state.isView, leftSiteBar: !state.isView.leftSiteBar } }
        case SET_CLIENT_SIZE:
            return { ...state, widthClient: action.width, heightClient: action.height }
        default:
            return state;
    }
}
export default viewReducer;



type ToggleLeftSiteBatAcType = {
    type: typeof TOGGLE_LEFTSITEBAR
}
export const toggleLeftSiteBar = (): ToggleLeftSiteBatAcType => ({ type: TOGGLE_LEFTSITEBAR })

// export const setClientSize = (width, height) => ({ type: SET_CLIENT_SIZE, width, height })

// export const setClientSizeThunk = (dispatch) => {
//     dispatch(setClientSize(document.documentElement.clientWidth, document.documentElement.clientHeight))
// }