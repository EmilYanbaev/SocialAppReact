import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Profile from "./Profile/Profile"


class ProfileContainer extends React.Component {
    render() {
        return (<Profile />)
    }
}

// const mapStateToProps = (state)=>{
//     return {}
// }


export default compose(
    withRouter,
    connect()
)(ProfileContainer)


