import style from "./RightNavBar.module.css"

let RightNavBar= ({logOut,isLogin})=>{
    return(
        <div className = {style.wrapp}>
        <button className = {style.btn} onClick = {logOut} style = {isLogin ?{}:{"display":"none"}}>Sign out</button>
        </div>
    );
}

export default RightNavBar