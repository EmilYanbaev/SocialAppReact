import React, { Suspense } from "react"
import style from "./ContentPage.module.css"
import { Route, Switch } from "react-router-dom";
import { withPreloadRedirect } from '../../hoc/withPreloadRedirect';
import { compose } from 'redux';
import { withErrorBoundary } from './../../hoc/withErrorBoundary';
import { Preloader } from './../otherComponent/GroupComponent';
const ProfileContainer = React.lazy(() => import("../mainComponent/ProfilePage/ProfileContainer"));
const FriendListContainer = React.lazy(() => import('./../mainComponent/FriendPage/FriendPageContainer'));
const LoginContainer = React.lazy(() => import('./../mainComponent/LoginPage/LoginContainer'));

const ContentPage = () => {
    return (
        <div className={style.wrapp_content}>
            <Suspense fallback={<Preloader />}>
                <Switch>
                    <Route path="/profile/:id?" component={ProfileContainer} />
                    <Route path="/friend" component={FriendListContainer} />
                    <Route path="/login" component={LoginContainer} />
                    <Route render={() => <div>404 NOT FOUND</div>} />
                </Switch>
            </Suspense>
        </div>
    )
}


export default compose(withErrorBoundary, withPreloadRedirect)(ContentPage)