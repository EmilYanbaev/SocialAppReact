import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { match, RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Profile from "./Page/Profile"
import { getProfile, clearData, savePhoto, saveProfileInfo } from '../../../redux/reducers/profileReducer';
import { getProfileSelector } from '../../../redux/selectors/testSelectors';
import { withHiddenSiteBar } from '../../../hoc/withHiddenSitebar';
import { Preloader } from '../../otherComponent/GroupComponent';
import { AppStateType } from '../../../redux/store';

import {ProfileType} from "../../../types/commonTypes"

type MapStateToPropsType = {
    // profile: boolean | ProfileType
    profile:ProfileType | null
}

type MapDispatchToPropsType = {
    getProfile:(id:number)=>void,
    savePhoto:(file:any)=>void,
    saveProfileInfo:(data:any)=>void,
    clearData:()=>void,
}

type OwnPropsType = {
}

type PathParamsType = {
    id: string
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType & RouteComponentProps<PathParamsType>

let ProfileContainer:React.FC<PropsType> = (props) => {
    const [viewModal, toggleModal] = useState(false)

    useEffect(() => {
        props.getProfile(parseInt(props.match.params.id))
        return props.clearData();
    }, [props.match.params.id])

    let handleSubmit = (data:any) => {
        props.saveProfileInfo(data)
    }

    let handleSavePhoto = (file:any) => {
        props.savePhoto(file);
    }

    if (!props.profile)
        return <Preloader />
    else
        return (
            <Profile
                isOwner={!props.match.params.id}
                profile={props.profile}
                viewModal = {viewModal}
                toggleModal = {toggleModal.bind(this)}
                savePhoto={handleSavePhoto}
                onSubmit={handleSubmit}
            />)
}


const mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        // profile: getProfileSelector(state)
        profile:state.profilePage.profile
    }
}


export default compose(
    withHiddenSiteBar,
    withRouter,
    connect<MapStateToPropsType,MapDispatchToPropsType,OwnPropsType,AppStateType>(mapStateToProps, { getProfile, savePhoto, saveProfileInfo, clearData})
)(ProfileContainer)

