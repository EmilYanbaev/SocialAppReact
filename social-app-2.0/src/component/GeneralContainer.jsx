import React, { useEffect } from "react"
import LeftSiteBar from './baseComponent/LeftSiteBar/LeftSiteBar'
import ContentPage from "./baseComponent/ContentPage"
import RightSiteBar from './baseComponent/RightSiteBar/RightSiteBar'
import { connect } from 'react-redux';
import { compose } from 'redux';
import HeaderContainer from './baseComponent/Header/HeaderContainer';
import { initialize } from './../redux/reducers/generalReducer';
import Preloader from './otherComponent/Preloader';
import { withErrorBoundary } from './../hoc/withErrorBoundary';


const GeneralContainer = ({ initialized, initialize }) => {
    useEffect(() => {
        initialize();
    }, [])

    if (!initialized)
        return <Preloader />
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


// class GeneralContainer extends React.Component {
//     componentDidMount() {
//         this.props.initialize();
//     }
//     render() {
//         if(!this.props.initialized)
//         return <Preloader />
//         else return ( 
//             <div className="generalContainer">
//                 <HeaderContainer />
//                 <div className="wrapper">
//                     <LeftSiteBar />
//                     <ContentPage />
//                     <RightSiteBar />
//                 </div>
//             </div>
//         )
//     }
// }