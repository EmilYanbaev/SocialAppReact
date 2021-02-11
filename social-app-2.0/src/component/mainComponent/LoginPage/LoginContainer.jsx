import React from "react"
import Login from './Page/Login';
import { connect } from 'react-redux';
import { loginThunkCreator } from './../../../redux/reducers/authReducer';

class LoginContainer extends React.Component {

    handleSignIn(data) {
        this.props.login(data)
    }

    render() {
        return <Login signIn={this.handleSignIn.bind(this)} incorrectData = {this.props.incorrectData}  />
    }
}

let mapStateToProps = (state)=>{
    return {
        incorrectData:state.auth.incorrectData
    }
}

export default connect(mapStateToProps, {
    login: loginThunkCreator
})(LoginContainer)