import style from "./ContentPage.module.css"
import { Route } from "react-router-dom";
import ProfileContainer from "../mainComponent/ProfilePage/ProfileContainer";
import React from "react"
import { compose } from 'redux';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';

class ContentPage extends React.Component {
    render() {
        return (
            <div className={style.wrapp_content}>
                <Route path="/profile/:id?" component={ProfileContainer} />
            </div>
        )
    }
}


export default compose(
    withAuthRedirect)
    (ContentPage)