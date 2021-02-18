import style from "./LeftNavBar.module.css"
import logo from "./assets/logo.png"
import menu from "./assets/menu.PNG"
let NavBarLogo = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.link}>
                <img className={style.link__logo} src={logo} alt="" />
                <div>SocialV</div>
            </div>
            <button className={style.btn} onClick = {props.onMenu} >
                <img src={menu} alt="" />
            </button>
        </div>
    );
}

export default NavBarLogo