import { userApi } from './../../serverApi/api';
const UPDATE_INPUT_SEARCH = "UPDATE_INPUT_SEARCH"
const ENTER_SEARCH = "ENTER_SEARCH"
const SET_USER = "SET_USER"
const USERS_SEARCH_SUCCESS = "USERS_SEARCH_SUCCESS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const TOGGLE_DISABLE_USER = "DISABLE_USER"
const CHANGE_FOLLOW = "CHANGE_FOLLOW"
const CLEAR_DATA = "CLEAR_DATA_FRIENDLIST"

const initialState = {
    inputValueSearch: "",
    currentPage: 1,
    pageSize: 10,
    users: [],
    usersSearchSuccess: false,
    disableUsers: []
}

let friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_INPUT_SEARCH:
            return { ...state, inputValueSearch: action.inputValueSearch }
        case ENTER_SEARCH:
            return { ...state, inputValueSearch: "", currentPage: 1 }
        case SET_USER:
            return { ...state, users: action.users, }
        case USERS_SEARCH_SUCCESS:
            return { ...state, usersSearchSuccess: action.usersSearchSuccess }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case TOGGLE_DISABLE_USER:
            return action.add ?
                { ...state, disableUsers: [...state.disableUsers, action.id] } :
                {
                    ...state, disableUsers: state.disableUsers.filter(id => {
                        return id === action.id ? false : true
                    })
                }
        case CHANGE_FOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.id)
                        user.followed = !user.followed;
                    return user;
                })
            }
        case CLEAR_DATA:
            return initialState

        default:
            return state;
    }
}

export default friendsReducer

export const updateInputSearch = (inputValueSearch) => ({ type: UPDATE_INPUT_SEARCH, inputValueSearch })
export const enterSearch = () => ({ type: ENTER_SEARCH })
export const setUser = (users) => ({ type: SET_USER, users })
export const setUsersSearchSuccess = (bool) => ({ type:  USERS_SEARCH_SUCCESS , usersSearchSuccess: bool })
export const setCurrentPage = (value) => ({ type: SET_CURRENT_PAGE, currentPage: value })
export const addDisableUser = (id, add) => ({ type: TOGGLE_DISABLE_USER, id, add })
export const changeFollow = (id) => ({ type: CHANGE_FOLLOW, id })
export const clearData = () => ({ type: CLEAR_DATA })


export const getUserThunkCreator = (page = 1, pageSize = 10, inputSearch = "") => {
    return dispatch => {

        userApi.getUsers(page, pageSize, inputSearch).then(response => {
            debugger
            if (!response.error) {
                dispatch(setUser(response.items))
                dispatch(setUsersSearchSuccess(true))
                dispatch(setCurrentPage(page))
            }
            else dispatch(setUsersSearchSuccess(false))
        })
    }
}

export const followUserThunkCreator = (id, followed) => {
    return dispatch => {
        dispatch(addDisableUser(id, true))
        userApi.follow(id, followed).then(response => {
            dispatch(addDisableUser(id, false))
            dispatch(changeFollow(id))
        })
    }
}