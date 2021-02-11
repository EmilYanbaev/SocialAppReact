import { stopSubmit } from 'redux-form';
import { userApi } from './../../serverApi/api';
const SET_AUTH_DATA = "SET_AUTH_DATA";
const INCORRECT_DATA = "INCORRECT_DATA"
const CLEAR_DATA = "CLEAR_DATA_AUTH"


const initialState = {
    email: "",
    id: "",
    login: "",
    isLogin: false,
    incorrectData:false
}


let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return { ...state, ...action.data, isLogin: action.isLogin }
        case INCORRECT_DATA:
            return { ...state, incorrectData: action.incorrectData }
        case CLEAR_DATA:
            return initialState
        default:
            return state;
    }
}

export let setAuth = (data, isLogin) => ({ type: SET_AUTH_DATA, data, isLogin })

export let incorrectData = (bool) => ({ type: INCORRECT_DATA, incorrectData: bool })

export const clearData = () => ({ type: CLEAR_DATA })



let authThunk = (dispatch) => {
    userApi.getAuth().then(response => {
        if (response.data.resultCode === 0)
            dispatch(setAuth(response.data.data, true))
        else
            dispatch(setAuth({}, false))
    })
}

export let authThunkCreator = () => {
    return authThunk
}


export let loginThunkCreator = (data) => dispatch => {
    userApi.login(data)
        .then(response => {
            debugger;
            if (response.data.resultCode === 0) {
                authThunk(dispatch)
            }
            else dispatch(stopSubmit("login", { _error: response.data.messages }))
        })

}

export let logOutThunkCreator = () => {
    return dispatch => {
        userApi.logout().then(
            response => {

                dispatch(clearData())
                authThunk(dispatch)
            }
        )
    }
}

export default authReducer;