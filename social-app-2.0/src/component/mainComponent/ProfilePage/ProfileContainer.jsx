import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Profile from "./Page/Profile"
import { getProfileThunkCreator, clearData } from './../../../redux/reducers/profileReducer';
import { userApi } from './../../../serverApi/api';
import Preloader from './../../otherComponent/Preloader';
import { getProfile } from '../../../redux/selectors/testSelectors';

let ProfileContainer = (props) => {

    useEffect(() => {
        props.getProfile(props.match.params.id)
        return props.clearData();
    }, [props.match.params.id])

    let handleSubmit = (data) => {
        userApi.changeMyInfo(data)
    }

    if (!props.profile)
        return <Preloader />
    else
        return (
            <Profile
                profile={props.profile}
                onSubmit={handleSubmit.bind(this)} />)
}


const mapStateToProps = (state) => {
    return {
        profile: getProfile(state)
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps, { getProfile: getProfileThunkCreator, clearData: clearData })
)(ProfileContainer)


// class ProfileContainer extends React.Component {
//     componentDidMount() {
//         this.props.getProfile(this.props.match.params.id)
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.match.params.id !== this.props.match.params.id)
//             this.props.getProfile()
//     }

//     componentWillUnmount() {
//         this.props.clearData();
//     }

//     handleSubmit(data) {
//         userApi.changeMyInfo(data)
//     }
//     render() {
//         if (!this.props.profile)
//             return <Preloader />
//         else
//             return (
//                 <Profile
//                     key={this.props.match.params.id ? this.props.match.params.id : "1"}
//                     profile={this.props.profile}
//                     onSubmit={this.handleSubmit.bind(this)} />)
//     }
// }

