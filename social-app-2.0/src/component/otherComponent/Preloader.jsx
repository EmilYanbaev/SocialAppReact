import style from "./Preloader.module.css"
import preloader from "../../assets/preloader.gif"

let Preloader = ()=>{
    return (
        <div className = {style.wrapper}>
            <img className = {style.preloader} src = {preloader} alt = "" />
        </div>
    )
}

export default Preloader