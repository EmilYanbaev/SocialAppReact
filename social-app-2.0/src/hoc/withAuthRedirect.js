import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const withAuthRedirect = (Component) => {
    class AuthContainer extends React.Component {
        render() {
            debugger;
            console.log(this.props.isLogin)
            return this.props.isLogin ?
                <Component {...this.props} /> :
                <Redirect to="/login" />
        }
    }

    const mapStateToProps = (state)=>{
        return {
            isLogin:state.auth.isLogin
        }
    }
    return connect(mapStateToProps)(AuthContainer)
}