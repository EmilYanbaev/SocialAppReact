import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Profile from "./Page/Profile"
import { getProfileThunkCreator } from './../../../redux/reducers/profileReducer';
import { userApi } from './../../../serverApi/api';


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.id)
        
    }
    
    componentDidUpdate(prevProps,prevState){
        if (prevProps.match.params.id !== this.props.match.params.id)
            this.props.getProfile()
    }

    handleSubmit(data){
        console.log(data)
        userApi.changeMyInfo(data)
    }
    render() {
        return (<Profile
            key={this.props.match.params.id ? this.props.match.params.id : "1"}
            profile={this.props.profile}
            onSubmit = {this.handleSubmit.bind(this)} />)
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps, { getProfile: getProfileThunkCreator })
)(ProfileContainer)


