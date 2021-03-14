import style from "./FriendList.module.css"
import Friend from './Friend';
import { Button } from '../../../otherComponent/GroupComponent';

import { UserType } from '../../../../types/commonTypes';
import { MouseEvent } from "react";

type PropsType = {
    users: boolean | UserType[],
    disableUsers: number[],

    getUsers: (nextPage: boolean) => void
    onFollow:(id:number, followed:boolean)=>void
}

let FriendList: React.FC<PropsType> = (props) => {

    let onClickGetUser = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        props.getUsers(true);
    }

    let usersJSX;
    if (typeof props.users !== "boolean")
        usersJSX = props.users.map(user => {

            let disable = props.disableUsers.some(id => id === user.id)
            return <Friend
                user={user}
                key={user.id}
                onFollow={props.onFollow}
                disable={disable}
            />
        })

    return (
        <div className={style.content}>
            {usersJSX}
            <div className={style.wrapp__btn}>
                <Button onClick={onClickGetUser}>GET USERS</Button>
            </div>
        </div>
    )
}

export default FriendList;