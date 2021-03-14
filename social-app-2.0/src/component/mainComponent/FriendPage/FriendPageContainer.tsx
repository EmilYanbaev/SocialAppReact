import React from 'react';
import HeaderPage from './Page/HeaderFiendList';
import FriendList from './Page/FriendList';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { clearData, followUserThunkCreator, updateInputSearch } from '../../../redux/reducers/friendsReducer';
import { getUserThunkCreator } from '../../../redux/reducers/friendsReducer';
import { getUsers } from '../../../redux/selectors/testSelectors';
import { withHiddenSiteBar } from '../../../hoc/withHiddenSitebar';
import { Preloader } from '../../otherComponent/GroupComponent';
import { UserType } from '../../../types/commonTypes';
import { AppStateType } from '../../../redux/store';


type MapStatePropsType = {
    currentPage:number,
    inputValueSearch:string,
    users:boolean | UserType[],
    disableUsers:number[],
}

type MapDispatchPropsType = {
    getUsers:(currentPage?:number,countUsers?:number,inputValue?:string)=>void,
    updateInput:(value:string)=>void,
    followUser:(id:number,followed:boolean)=>void,
    clearData:()=>void
}

type OwnPropsType = {

}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class FriendListContainer extends React.Component<PropsType> {

    constructor(props:PropsType) {
        super(props);
        this.handleUpdateInput = this.handleUpdateInput.bind(this);
        this.handleGetUsers = this.handleGetUsers.bind(this);
        this.handleFollowUser = this.handleFollowUser.bind(this);
    }

    handleUpdateInput(value:string) {
        this.props.updateInput(value);
    }
    handleGetUsers(nextPage:boolean) {
        nextPage ? this.props.getUsers(this.props.currentPage + 1, 10, this.props.inputValueSearch) :
            this.props.getUsers(1, 10, this.props.inputValueSearch);
    }
    handleFollowUser(id:number, followed:boolean) {
        this.props.followUser(id, followed);
    }
    componentDidMount() {
        this.props.getUsers();
        // throw "I LOL" проверка хока предохранителя)
    }
    componentWillUnmount() {
        this.props.clearData();
    }
    render() {
        if (!this.props.users)
            return <Preloader />
        else
            return (<>
                <HeaderPage input={this.props.inputValueSearch}
                    updateInput={this.handleUpdateInput}
                    getUsers={this.handleGetUsers} />
                <FriendList
                    users={this.props.users}
                    disableUsers={this.props.disableUsers}
                    getUsers={this.handleGetUsers}
                    onFollow={this.handleFollowUser} />
            </>
            )
    }
}

const mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        users: getUsers(state),
        inputValueSearch: state.friendsPage.inputValueSearch,
        currentPage: state.friendsPage.currentPage,
        disableUsers: state.friendsPage.disableUsers
    }
}

export default compose(
    withHiddenSiteBar,
    //TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
    connect<MapStatePropsType,MapDispatchPropsType,OwnPropsType,AppStateType>(mapStateToProps,
        {
            updateInput: updateInputSearch,
            getUsers: getUserThunkCreator,
            followUser: followUserThunkCreator,
            clearData: clearData
        })
)(FriendListContainer)