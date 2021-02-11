import style from "./FriendList.module.css"
import Friend from './Friend';

let FriendList = (props) => {

    let onClickGetUser = (event) => {
        event.preventDefault();
        props.getUsers(true);
    }

    let usersJSX = props.users.map(user => {
        
        let disable = props.disableUsers.some(id =>id===user.id)
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
                <button className={style.btn} onClick={onClickGetUser}>
                    GET USERS
                </button>
            </div>
        </div>
    )
}

export default FriendList;