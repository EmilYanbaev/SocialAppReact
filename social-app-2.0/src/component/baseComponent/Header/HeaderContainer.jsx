import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logOutThunkCreator } from './../../../redux/reducers/authReducer';
import LeftNavBar from "./LeftNavBar"
import RightNavBar from "./RightNavBar"
import { toggleLeftSiteBar } from '../../../redux/reducers/viewReducer';

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogOut = this.handleLogOut.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
    }
    handleLogOut() {
        this.props.logOut();
    }

    handleMenu() {
        this.props.onMenu();
    }
    render() {
        console.log(this.props.isLogin)
        return (
            <Header>
                <LeftNavBar onMenu = {this.handleMenu}/>
                <RightNavBar isLogin={this.props.isLogin} logOut={this.handleLogOut} />
            </Header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin,
    }
}
export default connect(mapStateToProps, { logOut: logOutThunkCreator, onMenu: toggleLeftSiteBar })(HeaderContainer)
