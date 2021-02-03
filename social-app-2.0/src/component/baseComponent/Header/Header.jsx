import style from "./Header.module.css"
import LeftNavBar from "./LeftNavBar"
import RightNavBar from "./RightNavBar"


let Header = () => {
    return (
        <header className={style.header} >
            <LeftNavBar />
            <RightNavBar />
        </header>
    );
}

export default Header