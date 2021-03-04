import React from 'react';
import HeaderPage from './Page/HeaderFiendList';
import FriendList from './Page/FriendList';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { clearData, followUserThunkCreator, updateInputSearch } from '../../../redux/reducers/friendsReducer';
import { getUserThunkCreator } from './../../../redux/reducers/friendsReducer';
import { getUsers } from '../../../redux/selectors/testSelectors';
import { withHiddenSiteBar } from './../../../hoc/withHiddenSitebar';
import { Preloader } from './../../otherComponent/GroupComponent';

class FriendListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.handlerUpdateInput = this.handlerUpdateInput.bind(this);
        this.handlerGetUsers = this.handlerGetUsers.bind(this);
        this.handlerFollowUser = this.handlerFollowUser.bind(this);
    }

    handlerUpdateInput(value) {
        this.props.updateInput(value);
    }
    handlerGetUsers(nextPage) {
        nextPage ? this.props.getUsers(this.props.currentPage + 1, 10, this.props.inputValueSearch) :
            this.props.getUsers(1, 10, this.props.inputValueSearch);
    }
    handlerFollowUser(id, followed) {
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
                    updateInput={this.handlerUpdateInput}
                    getUsers={this.handlerGetUsers} />
                <FriendList
                    users={this.props.users}
                    disableUsers={this.props.disableUsers}
                    getUsers={this.handlerGetUsers}
                    follow={this.handlerFollowUser} />
            </>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        inputValueSearch: state.friendsPage.inputValueSearch,
        currentPage: state.friendsPage.currentPage,
        disableUsers: state.friendsPage.disableUsers
    }
}

export default compose(
    withHiddenSiteBar,
    connect(mapStateToProps,
        {
            updateInput: updateInputSearch,
            getUsers: getUserThunkCreator,
            followUser: followUserThunkCreator,
            clearData: clearData
        })
)(FriendListContainer)