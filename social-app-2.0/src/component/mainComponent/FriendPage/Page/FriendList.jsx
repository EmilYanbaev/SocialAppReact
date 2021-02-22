import style from "./FriendList.module.css"
import Friend from './Friend';
import { GroupComponent } from './../../../otherComponent/GroupComponent';

let FriendList = (props) => {

    let onClickGetUser = (event) => {
        event.preventDefault();
        props.getUsers(true);
    }

    let usersJSX = props.users.map(user => {

        let disable = props.disableUsers.some(id => id === user.id)
        return <Friend
            user={user}
            key={user.id}
            follow={props.follow}
            disable={disable}
        />
    })
    return (
        <div className={style.content}>
            {usersJSX}
            <div className={style.wrapp__btn}>
                <GroupComponent.Button onClick={onClickGetUser}>GET USERS</GroupComponent.Button>
            </div>
        </div>
    )
}

export default FriendList;