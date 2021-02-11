import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

export const withAuthRedirect = (Component) => {
    class AuthContainer extends React.Component {
        render() {
            let path
            if (this.props.isLogin)
                if (this.props.location.pathname === "/login")
                    path = "/profile"
                else
                    path = this.props.location.pathname
            else path = "/login"
            return (<>
                <Component {...this.props} />
                <Redirect to={path} />
            </>)
        }
    }

    const mapStateToProps = (state) => {
        return {
            isLogin: state.auth.isLogin
        }
    }
    return withRouter(connect(mapStateToProps)(AuthContainer))
}