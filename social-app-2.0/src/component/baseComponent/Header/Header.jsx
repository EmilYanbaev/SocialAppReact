import style from "./Header.module.css"
import LeftNavBar from "./LeftNavBar"
import RightNavBar from "./RightNavBar"


let Header = (props) => {
    return (
        <header className={style.header} >
        {props.children}
            {/* <LeftNavBar />
            <RightNavBar isLogin = {isLogin} logOut = {logOut}  /> */}
        </header>
    );
}

export default Header