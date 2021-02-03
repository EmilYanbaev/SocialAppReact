import React from "react"
import Header from './baseComponent/Header/Header'
import LeftSiteBar from './baseComponent/LeftSiteBar/LeftSiteBar'
import ContentPage from "./baseComponent/ContentPage"
import RightSiteBar from './baseComponent/RightSiteBar/RightSiteBar'
import { connect } from 'react-redux';
import { authThunkCreator } from "../redux/reducers/authReducer"


class GeneralContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return (
            <div className="generalContainer">
                <Header />
                <div className="wrapper">
                    <LeftSiteBar />
                    <ContentPage />
                    <RightSiteBar />
                </div>
            </div>
        )
    }
}

const mapStateToProps = () => { return {} }
export default connect(mapStateToProps, { authMe: authThunkCreator })(GeneralContainer)