import { stopSubmit } from 'redux-form';
import { userApi } from '../../serverApi/api';
const SET_AUTH_DATA = "auth/SET_AUTH_DATA";
const CLEAR_DATA = "auth/CLEAR_DATA_AUTH"
const GET_CAPTCHA_SUCCESS = "auth/GET_CAPTCHA_SUCCESS"


const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isLogin: false,
    captchaUrl: null as string | null
}
export type InitialStateType = typeof initialState;



let authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return { ...state, ...action.data, isLogin: action.isLogin }
        case GET_CAPTCHA_SUCCESS:
            return {...state,captchaUrl:action.captchaUrl}
        case CLEAR_DATA:
            return initialState
        default:
            return state;
    }
}
export default authReducer;



type SetAuthAcType = {
    type: typeof SET_AUTH_DATA,
    data: SetAuthData | null
    isLogin: boolean
}
type SetAuthData = {
    id: number
    email: string
    login: string
}
export let setAuth = (data: SetAuthData | null, isLogin: boolean): SetAuthAcType => ({ type: SET_AUTH_DATA, data, isLogin })


type SetCaptchaSuccessAcType = {
    type: typeof GET_CAPTCHA_SUCCESS,
    captchaUrl: string
}
export let setCaptchaSuccess = (captchaUrl: string): SetCaptchaSuccessAcType => ({ type: GET_CAPTCHA_SUCCESS, captchaUrl })


type ClearDataAcType = {
    type: typeof CLEAR_DATA
}
export const clearData = (): ClearDataAcType => ({ type: CLEAR_DATA })


export let authThunk = async (dispatch: any) => {
    let response = await userApi.getAuth();
    if (response.data.resultCode === 0)
        dispatch(setAuth(response.data.data, true));
    else
        dispatch(setAuth(null, false));
}

export let authThunkCreator = () => {
    return authThunk
}


export let getCaptchaThunk = async (dispatch: any) => {
    let response = await userApi.getCaptcha();
    dispatch(setCaptchaSuccess(response.data.url));
}


type LoginThunkDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}
export let loginThunkCreator = (data: LoginThunkDataType) => async (dispatch: any) => {
    let response = await userApi.login(data);
    if (!response.data.resultCode) {
        dispatch(authThunk)
    }
    else {
        debugger;
        if (response.data.resultCode === 10)
            await dispatch(getCaptchaThunk);
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "some err"
        dispatch(stopSubmit("login", { _error: message }));
    }
}



export let logOutThunkCreator = () => {
    return async (dispatch: any) => {
        await userApi.logout();
        dispatch(clearData());
        dispatch(authThunk);
    }
}

