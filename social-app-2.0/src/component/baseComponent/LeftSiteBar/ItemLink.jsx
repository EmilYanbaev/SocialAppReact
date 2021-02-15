import style from "./ItemLink.module.css"
import { NavLink } from 'react-router-dom';

let ItemLink = ({disable,item}) => {
    return (
        <NavLink to={disable ? "#": item.link} className={style.link} activeClassName={style.active}>
            <div className={style.item}>
                <div className={style.icon}>{item.icon}</div>
                <div className={style.text}>{item.text}</div>
            </div>
        </NavLink>
    )
}

export default ItemLink