import style from "./RightNavBar.module.css"
import { GroupComponent } from './../../otherComponent/GroupComponent';

let RightNavBar = ({ logOut, isLogin }) => {
    return (
        <div className={style.wrapp}>
            <GroupComponent.Button onClick={logOut} style={isLogin ? {} : { "display": "none" }}>Sign out</GroupComponent.Button>
        </div>
    );
}

export default RightNavBar