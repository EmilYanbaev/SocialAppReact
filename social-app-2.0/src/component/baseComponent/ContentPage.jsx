import React from "react"
import style from "./ContentPage.module.css"
import { Route } from "react-router-dom";
import ProfileContainer from "../mainComponent/ProfilePage/ProfileContainer";
import FriendListContainer from './../mainComponent/FriendPage/FriendPageContainer';
import LoginContainer from './../mainComponent/LoginPage/LoginContainer';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';

class ContentPage extends React.Component {
    render() {
        return (
            <div className={style.wrapp_content}>
                <Route path="/profile/:id?" component={ProfileContainer} />
                <Route path="/friend" component={FriendListContainer} />
                <Route path="/login" component={LoginContainer} />
            </div>
        )
    }
}


export default withAuthRedirect(ContentPage)