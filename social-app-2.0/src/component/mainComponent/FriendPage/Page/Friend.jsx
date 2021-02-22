import { NavLink } from "react-router-dom";
import style from "./Friend.module.css"
import { GroupComponent } from './../../../otherComponent/GroupComponent';


let Friend = (props) => {
    let onFollowing = () => {
        props.follow(props.user.id, props.user.followed)
    }
    const userStyle = {};
    if (props.user.photos.small)
        userStyle.backgroundImage = `url("${props.user.photos.small}")`
    return (

        <div className={style.card}>
            <div className={style.card__header}></div>
            <div className={style.wrapp}>
                <div className={style.card__content}>

                    <div className={style.card__avatar} style={userStyle}></div>

                    <div className={style.userInfo}>

                        <NavLink to={`/profile/${props.user.id}`} className={style.userInfo__link}>
                            <h4>{props.user.name}</h4>
                        </NavLink>

                        <h6>@designer{/*props.work*/}</h6>

                        <p> {props.user.status == null ? "Lorem Ipsum is simply dummy text of the" : props.user.status}</p>
                    </div>
                </div>
                <div className = {style.wrapp__btn}>
                    <GroupComponent.Button onClick={onFollowing} disabled={props.disable} >
                        {!props.user.followed ? "Following" : "unFollowing"}
                    </GroupComponent.Button>
                </div>
            </div>
        </div>
    )
}

export default Friend