import React from "react"
import LeftSiteBar from './baseComponent/LeftSiteBar/LeftSiteBar'
import ContentPage from "./baseComponent/ContentPage"
import RightSiteBar from './baseComponent/RightSiteBar/RightSiteBar'
import { connect } from 'react-redux';
import { authThunkCreator } from "../redux/reducers/authReducer"
import { compose } from 'redux';
import HeaderContainer from './baseComponent/Header/HeaderContainer';

class GeneralContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
    }
    render() {
        return (
            <div className="generalContainer">
                <HeaderContainer />
                <div className="wrapper">
                    <LeftSiteBar />
                    <ContentPage />
                    <RightSiteBar />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => { return {
    isLogin:state.auth.isLogin
} }
export default compose(
    connect(mapStateToProps, { authMe: authThunkCreator }))(GeneralContainer)