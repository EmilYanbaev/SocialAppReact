import React, { useEffect } from "react"
import LeftSiteBar from './baseComponent/LeftSiteBar/LeftSiteBar'
import ContentPage from "./baseComponent/ContentPage"
import RightSiteBar from './baseComponent/RightSiteBar/RightSiteBar'
import { connect } from 'react-redux';
import { compose } from 'redux';
import HeaderContainer from './baseComponent/Header/HeaderContainer';
import { initialize } from './../redux/reducers/generalReducer';
import { withErrorBoundary } from './../hoc/withErrorBoundary';
import { Preloader } from './otherComponent/GroupComponent';


const GeneralContainer = ({ initialized, initialize }) => {
    useEffect(() => {
        initialize();
    }, [])

    if (!initialized)
        return <Preloader style={{ "height": "100vh" }} />
    else return (
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




const mapStateToProps = (state) => {
    return {
        initialized: state.general.initialized,
    }
}
export default compose(withErrorBoundary,
    connect(mapStateToProps, { initialize: initialize }))
    (GeneralContainer)