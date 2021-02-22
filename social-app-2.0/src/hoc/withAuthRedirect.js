import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { getDisplayName } from './../utils/other';

export const withAuthRedirect = (Component) => {
    class AuthContainer extends React.Component {
        render() {
            let path
            if (this.props.isLogin)
                if (this.props.location.pathname === "/login" || this.props.location.pathname === "/")
                    path = "/profile"
                else
                    path = this.props.location.pathname;
            else path = "/login";

            let { isLogin, ...passThroughProps } = this.props

            return (<>
                <Component {...passThroughProps} />
                <Redirect to={path} />
            </>)
        }
    }

    AuthContainer.displayName = `withAuthRedirect(${getDisplayName(Component)})`

    const mapStateToProps = (state) => {
        return {
            isLogin: state.auth.isLogin
        }
    }
    return withRouter(connect(mapStateToProps)(AuthContainer))
}


