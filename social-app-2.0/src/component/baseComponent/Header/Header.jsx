import style from "./Header.module.css"
import LeftNavBar from "./LeftNavBar"
import RightNavBar from "./RightNavBar"


let Header = ({logOut,isLogin}) => {
    return (
        <header className={style.header} >
            <LeftNavBar />
            <RightNavBar isLogin = {isLogin} logOut = {logOut}  />
        </header>
    );
}

export default Header