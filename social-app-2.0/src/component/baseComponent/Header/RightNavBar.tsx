import style from "./RightNavBar.module.css"
import { Button } from '../../otherComponent/GroupComponent';

type PropsType = {
    logOut: () => {},
    isLogin: boolean
}
let RightNavBar: React.FC<PropsType> = ({ logOut, isLogin }) => {
    return (
        <div className={style.wrapp}>
            <Button onClick={logOut} style={isLogin ? {} : { "display": "none" }}>Sign out</Button>
        </div>
    );
}

export default RightNavBar