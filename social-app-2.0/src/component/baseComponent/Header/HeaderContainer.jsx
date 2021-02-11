import  React  from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logOutThunkCreator } from './../../../redux/reducers/authReducer';


class HeaderContainer extends React.Component{
    handleLogOut(){
        debugger;
        this.props.logOut();
    }
    render(){
        return <Header isLogin = {this.props.isLogin} logOut = {this.handleLogOut.bind(this)} />
    }
}

const mapStateToProps = (state)=>{
    return {
        isLogin:state.auth.isLogin
    }
}
export default connect(mapStateToProps,{logOut:logOutThunkCreator})(HeaderContainer)
