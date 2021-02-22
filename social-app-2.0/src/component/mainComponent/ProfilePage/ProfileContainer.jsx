import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Profile from "./Page/Profile"
import { getProfile, clearData, savePhoto, saveProfileInfo } from './../../../redux/reducers/profileReducer';
import { getProfileSelector } from '../../../redux/selectors/testSelectors';
import { withHiddenSiteBar } from './../../../hoc/withHiddenSitebar';
import { GroupComponent } from './../../otherComponent/GroupComponent';

let ProfileContainer = (props) => {
    const [viewModal, toggleModal] = useState(false)

    useEffect(() => {
        props.getProfile(props.match.params.id)
        return props.clearData();
    }, [props.match.params.id])

    let handleSubmit = (data) => {
        props.saveProfileInfo(data)
    }

    let handleSavePhoto = (file) => {
        props.savePhoto(file);
    }

    if (!props.profile)
        return <GroupComponent.Preloader />
    else
        return (
            <Profile
                isOwner={!props.match.params.id}
                profile={props.profile}
                viewModal = {viewModal}
                toggleModal = {toggleModal.bind(this)}
                savePhoto={handleSavePhoto.bind(this)}
                onSubmit={handleSubmit.bind(this)}
            />)
}


const mapStateToProps = (state) => {
    return {
        profile: getProfileSelector(state)
    }
}


export default compose(
    withHiddenSiteBar,
    withRouter,
    connect(mapStateToProps, { getProfile, savePhoto, saveProfileInfo, clearData})
)(ProfileContainer)

