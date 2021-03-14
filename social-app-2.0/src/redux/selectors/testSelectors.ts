import { createSelector } from "reselect"
import { AppStateType } from "../store";

// БЫЛО ПРОПИСАНО ТОЛЬКО РАДИ ПРАКТИКИ
// В данном случае не было необходимости использовать библиотеку reselect

let getProfileSimpleSelector = (state:AppStateType) => (state.profilePage.profile)

export const getProfileSelector = createSelector(getProfileSimpleSelector, (profile) => {

    for (let key in profile) {
        return profile;
    }
    return false;

})

let getUsersSimpleSelector = (state:AppStateType) => (state.friendsPage.users)
let getUsersSearchSuccess = (state:AppStateType) => (state.friendsPage.usersSearchSuccess)

export const getUsers = createSelector(getUsersSimpleSelector, getUsersSearchSuccess, (users, usersSearchSuccess) => {
    if (usersSearchSuccess) {
        return users
    }
    else {
        for (let key in users) {
            return users
        }
        return false;
    }

})
