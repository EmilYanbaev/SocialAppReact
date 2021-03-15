import { ThunkAction } from 'redux-thunk';
import { userApi } from '../../serverApi/api';
import { UserType } from '../../types/commonTypes';
import { AppStateType } from '../store';
const UPDATE_INPUT_SEARCH = "friend/UPDATE_INPUT_SEARCH"
const ENTER_SEARCH = "friend/ENTER_SEARCH"
const SET_USER = "friend/SET_USER"
const USERS_SEARCH_SUCCESS = "friend/USERS_SEARCH_SUCCESS"
const SET_CURRENT_PAGE = "friend/SET_CURRENT_PAGE"
const TOGGLE_DISABLE_USER = "friend/DISABLE_USER"
const CHANGE_FOLLOW = "friend/CHANGE_FOLLOW"
const CLEAR_DATA = "friend/CLEAR_DATA_FRIENDLIST"




const initialState = {
    inputValueSearch: "",
    currentPage: 1,
    pageSize: 10,
    users: [] as Array<UserType>,
    usersSearchSuccess: false,
    disableUsers: [] as Array<number>
}
export type InitialStateType = typeof initialState


let friendsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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

type ActionsTypes = UpdateInputSearchAcType | EnterSearchAcType | SetUserAcType |
    SetUsersSearchSuccessAcType | SetCurrentPageAcType |
    addDisableUserAcType | ChangeFollowAcType | ClearDataAcType


export default friendsReducer

type UpdateInputSearchAcType = {
    type: typeof UPDATE_INPUT_SEARCH,
    inputValueSearch: string
}
export const updateInputSearch = (inputValueSearch: string): UpdateInputSearchAcType => ({ type: UPDATE_INPUT_SEARCH, inputValueSearch })


type EnterSearchAcType = {
    type: typeof ENTER_SEARCH
}
export const enterSearch = (): EnterSearchAcType => ({ type: ENTER_SEARCH })


type SetUserAcType = {
    type: typeof SET_USER,
    users: Array<UserType>
}
export const setUser = (users: Array<UserType>): SetUserAcType => ({ type: SET_USER, users })


type SetUsersSearchSuccessAcType = {
    type: typeof USERS_SEARCH_SUCCESS,
    usersSearchSuccess: boolean
}
export const setUsersSearchSuccess = (bool: boolean): SetUsersSearchSuccessAcType => ({ type: USERS_SEARCH_SUCCESS, usersSearchSuccess: bool })


type SetCurrentPageAcType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (value: number): SetCurrentPageAcType => ({ type: SET_CURRENT_PAGE, currentPage: value })


type addDisableUserAcType = {
    type: typeof TOGGLE_DISABLE_USER,
    id: number,
    add: boolean
}
export const addDisableUser = (id: number, add: boolean): addDisableUserAcType => ({ type: TOGGLE_DISABLE_USER, id, add })

type ChangeFollowAcType = {
    type: typeof CHANGE_FOLLOW,
    id: number,
}
export const changeFollow = (id: number): ChangeFollowAcType => ({ type: CHANGE_FOLLOW, id })

type ClearDataAcType = {
    type: typeof CLEAR_DATA
}
export const clearData = (): ClearDataAcType => ({ type: CLEAR_DATA })


type ThunkType = ThunkAction<Promise<void>,AppStateType,unknown,ActionsTypes>

export const getUserThunkCreator = (page: number = 1, pageSize: number = 10, inputSearch: string = ""):ThunkType => {
    return async (dispatch,getState) => {

        let response = await userApi.getUsers(page, pageSize, inputSearch)
        if (!response.error) {
            dispatch(setUser(response.items))
            dispatch(setUsersSearchSuccess(true))
            dispatch(setCurrentPage(page))
        }
        else dispatch(setUsersSearchSuccess(false))
    }
}

export const followUserThunkCreator = (id: number, followed: boolean):ThunkType => {
    return async (dispatch, getState) => {
        dispatch(addDisableUser(id, true))
        await userApi.follow(id, followed)
        dispatch(addDisableUser(id, false))
        dispatch(changeFollow(id))
    }
}