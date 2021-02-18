import React, { Suspense } from "react"
import style from "./ContentPage.module.css"
import { Route } from "react-router-dom";
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { withErrorBoundary } from './../../hoc/withErrorBoundary';
import Preloader from "../otherComponent/Preloader";
const ProfileContainer = React.lazy(() => import("../mainComponent/ProfilePage/ProfileContainer"));
const FriendListContainer = React.lazy(() => import('./../mainComponent/FriendPage/FriendPageContainer'));
const LoginContainer = React.lazy(() => import('./../mainComponent/LoginPage/LoginContainer'));


const ContentPage = () => {
    return (
        <div className={style.wrapp_content}>
            <Suspense fallback={<Preloader />}>
                <Route path="/profile/:id?" component={ProfileContainer} />
                <Route path="/friend" component={FriendListContainer} />
                <Route path="/login" component={LoginContainer} />
            </Suspense>
        </div>
    )
}


export default compose(withErrorBoundary, withAuthRedirect)(ContentPage)