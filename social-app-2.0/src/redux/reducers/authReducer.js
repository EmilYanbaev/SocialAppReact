import { userApi } from './../../serverApi/api';
const SET_AUTH_DATA = "SET_AUTH_DATA";


const initialState = {
    email:"",
    id:"",
    login:"",
    isLogin: false
}


let authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_DATA:
            return { ...state,...action.data,isLogin:action.isLogin }
        default:
            return state;
    }
}

export let setAuth = (data, isLogin) => {
    return { type: SET_AUTH_DATA, data, isLogin }
}

export let authThunkCreator = () => {
    return dispatch => {
        userApi.getAuth().then(response => {
            if (response.data.resultCode === 0)
                dispatch(setAuth(response.data.data, true))
            else
                dispatch(setAuth({}, false))
        })
    }
}

export default authReducer;