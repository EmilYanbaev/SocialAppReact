import style from "./RightSiteBar.module.css"

let RightSiteBar = () => {
    return (<div className={style.siteBar}>
        <div className ={style.photo} >icon</div>
        <div className ={style.fullName}>FullName</div>
    </div>);
}

export default RightSiteBar