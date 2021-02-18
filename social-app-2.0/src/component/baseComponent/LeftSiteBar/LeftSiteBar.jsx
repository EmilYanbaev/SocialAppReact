import React from 'react';
import style from "./LeftSiteBar.module.css"
import ItemLink from './ItemLink';
import { connect } from 'react-redux';



class LeftSiteBar extends React.Component {
    state = {
        items: [
            { id: '1', link: "/profile", icon: 'icon', text: 'Profile' },
            { id: '2', link: "/friend", icon: 'icon', text: 'FriendList' },
            { id: '3', link: "/dialogs", icon: 'icon', text: 'Dialogs' },
            { id: '4', link: "/newsfeed", icon: 'icon', text: 'Newsfeed' },
        ],
    }

    render() {
        let itemsJSX = this.state.items.map(item => <ItemLink item={item} disable={!this.props.isLogin} key={item.id} />)
        return (<div className={style.sitebar} style = {this.props.isView?{"display":"flex"}:{}}>
            {itemsJSX}
        </div>)
    }
}




const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin,
        isView:state.viewModule.isView.leftSiteBar
    }
}

export default connect(mapStateToProps)(LeftSiteBar);



