import style from "./ItemLink.module.css"
import { NavLink } from 'react-router-dom';

let ItemLink = (props) => {
    return (
        <NavLink to={props.disable ? "#": props.item.link} className={style.link} activeClassName={style.active}>
            <div className={style.item}>
                <div className={style.icon}>{props.item.icon}</div>
                <div className={style.text}>{props.item.text}</div>
            </div>
        </NavLink>
    )
}

export default ItemLink