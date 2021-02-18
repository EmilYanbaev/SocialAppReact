import { NavLink } from "react-router-dom";
import style from "./Friend.module.css"


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
                <button className={style.btn} onClick={onFollowing} disabled={props.disable}>
                    {!props.user.followed ? "Following" : "unFollowing"}
                </button>
            </div>
        </div>
    )
}

export default Friend


//    

//    

   //    

 //   

//