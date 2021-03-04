import preloaderStyle from "./Preloader.module.css"
import preloader from "../../assets/preloader.gif"

import buttonStyle from "./Button.module.css"
import { CSSProperties } from "react"

type PropsTypePreloader = {
    style?:CSSProperties
}
export let Preloader: React.FC<PropsTypePreloader> = ({ style }) => {
    return(
            <div className = { preloaderStyle.wrapper } style = { style } >
            <img className={preloaderStyle.preloader} src={preloader} alt="" />
            </div >
        )}


type PropsTypeButton = {
    onClick?: () => {},
    disabled?: boolean,
    type?: any,
    style?: CSSProperties,
    props?: any
}
export let Button: React.FC<PropsTypeButton> = ({ onClick, disabled, type, style, ...props }) => {
    return (
        <button className={buttonStyle.btn} onClick={onClick} disabled={disabled} type={type} style={style}>
            {props.children}
        </button>
    )
}