import { stopSubmit } from 'redux-form';
import { userApi } from './../../serverApi/api';
const SET_AUTH_DATA = "auth/SET_AUTH_DATA";
const CLEAR_DATA = "auth/CLEAR_DATA_AUTH"
const GET_CAPTCHA_SUCCESS = "auth/GET_CAPTCHA_SUCCESS"


const initialState = {
    email: "",
    id: "",
    login: "",
    isLogin: false,
    captchaUrl: null
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
export let setCaptchaSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_SUCCESS, captchaUrl })

export const clearData = () => ({ type: CLEAR_DATA })



export let authThunk = async (dispatch) => {
    let response = await userApi.getAuth();
    if (response.data.resultCode === 0)
        dispatch(setAuth(response.data.data, true));
    else
        dispatch(setAuth({}, false));
}

export let authThunkCreator = () => {
    return authThunk
}


export let getCaptchaThunk = async (dispatch) => {
    let response = await userApi.getCaptcha();
    dispatch(setCaptchaSuccess(response.data.url));
}

export let loginThunkCreator = (data) => async dispatch => {
    let response = await userApi.login(data);
    if (!response.data.resultCode) {
        dispatch(authThunk)
    }
    else {
        if (response.data.resultCode === 10)
            await dispatch(getCaptchaThunk);
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "some err"
        dispatch(stopSubmit("login", { _error: message }));
    }
}

export let logOutThunkCreator = () => {
    return async dispatch => {
        await userApi.logout();
        dispatch(clearData());
        dispatch(authThunk);
    }
}

