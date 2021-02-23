import React from "react"
import Login from './Page/Login';
import { connect } from 'react-redux';
import { loginThunkCreator } from './../../../redux/reducers/authReducer';

class LoginContainer extends React.Component {

    handleSignIn(data) {
        this.props.login(data)
    }

    render() {
        return <Login signIn={this.handleSignIn.bind(this)} captchaUrl={this.props.captchaUrl} />
    }
}

let mapStateToProps = (state) => {
    return {
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {
    login: loginThunkCreator
})(LoginContainer)