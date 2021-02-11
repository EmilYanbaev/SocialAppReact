import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

export const withAuthRedirect = (Component) => {
    class AuthContainer extends React.Component {

        render() {
            let path = this.props.isLogin ? "/profile":"/login"
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