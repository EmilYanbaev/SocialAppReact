import style from "./Header.module.css"
import LeftNavBar from "./LeftNavBar"
import RightNavBar from "./RightNavBar"


let Header = (props) => {
    return (
        <header className={style.header} >
            <LeftNavBar />
            <RightNavBar isLogin = {props.isLogin} logOut = {props.logOut}  />
        </header>
    );
}

export default Header