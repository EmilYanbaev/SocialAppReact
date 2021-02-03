import { NavLink } from "react-router-dom"
import style from "./LeftNavBar.module.css"
import logo from "./assets/logo.png"
import menu from "./assets/menu.PNG"
let NavBarLogo = () => {
    return (
        <div className={style.wrapper}>
            <NavLink to="/profile" className={style.link}>
                <img className={style.link__logo} src={logo} alt="" />
                <div>SocialV</div>
            </NavLink>
            <button className={style.btn}>
                <img src={menu} alt="" />
            </button>
        </div>
    );
}

export default NavBarLogo