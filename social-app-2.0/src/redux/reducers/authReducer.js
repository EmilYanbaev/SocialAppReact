import { stopSubmit } from 'redux-form';
import { userApi } from './../../serverApi/api';
const SET_AUTH_DATA = "auth/SET_AUTH_DATA";
const CLEAR_DATA = "auth/CLEAR_DATA_AUTH"


const initialState = {
    email: "",
    id: "",
    login: "",
    isLogin: false
}


let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return { ...state, ...action.data, isLogin: action.isLogin }
        case CLEAR_DATA:
            return initialState
        default:
            return state;
    }
}

export default authReducer;

export let setAuth = (data, isLogin) => ({ type: SET_AUTH_DATA, data, isLogin })

export const clearData = () => ({ type: CLEAR_DATA })



export let authThunk = async (dispatch) => {
    let response = await userApi.getAuth()
    if (response.data.resultCode === 0)
        dispatch(setAuth(response.data.data, true))
    else
        dispatch(setAuth({}, false))
}

export let authThunkCreator = () => {
    return authThunk
}


export let loginThunkCreator = (data) => async dispatch => {
    let response = await userApi.login(data)
    if (!response.data.resultCode) {
        authThunk(dispatch)
    }
    else dispatch(stopSubmit("login", { _error: response.data.messages }))
}

export let logOutThunkCreator = () => {
    return async dispatch => {
        await userApi.logout()
        dispatch(clearData())
        dispatch(authThunk)
    }
}

