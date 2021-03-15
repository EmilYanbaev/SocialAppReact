import React from "react"
import Login from './Page/Login';
import { connect } from 'react-redux';
import { loginThunkCreator} from '../../../redux/reducers/authReducer';
import { AppStateType } from "../../../redux/store";
import { LoginDataType } from "../../../types/commonTypes";


type MapStatePropsType = {
    captchaUrl: string | null
}

type MapDispatchPropsType = {
    login:(data:LoginDataType)=>void
}

type OwnPropsType = {

}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType



class LoginContainer extends React.Component<PropsType> {

    handleSignIn(data:LoginDataType) {
        debugger;
        this.props.login(data)
    }

    render() {
        return <Login signIn={this.handleSignIn.bind(this)} captchaUrl={this.props.captchaUrl} />
    }
}

let mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    login: loginThunkCreator
})(LoginContainer)