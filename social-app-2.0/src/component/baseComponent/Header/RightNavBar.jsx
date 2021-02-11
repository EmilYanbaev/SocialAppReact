import style from "./RightNavBar.module.css"

let RightNavBar= (props)=>{
    return(
        <div className = {style.wrapp}>
        <button className = {style.btn} onClick = {props.logOut} style = {props.isLogin ?{}:{"display":"none"}}>Sign out</button>
        </div>
    );
}

export default RightNavBar