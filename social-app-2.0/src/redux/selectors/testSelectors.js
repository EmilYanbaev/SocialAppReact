import { createSelector } from "reselect"

// БЫЛО ПРОПИСАНО ТОЛЬКО РАДИ ПРАКТИКИ
// В данном случае не было необходимости использовать библиотеку reselect

let getProfileSimpleSelector = (state) => (state.profilePage.profile)

export const getProfile = createSelector(getProfileSimpleSelector, (profile) => {

    for (let key in profile) {
        return profile;
    }
    return false;

})

let getUsersSimpleSelector = (state) => (state.friendsPage.users)
let getUsersSearchSuccess = (state) => (state.friendsPage.usersSearchSuccess)

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
