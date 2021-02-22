import preloaderStyle from "./Preloader.module.css"
import preloader from "../../assets/preloader.gif"

import buttonStyle from "./Button.module.css"

export const GroupComponent = {
    Preloader: (props) => {
        return (
            <div className={preloaderStyle.wrapper} style={props.style}>
                <img className={preloaderStyle.preloader} src={preloader} alt="" />
            </div>
        )
    },
    Button: ({ onClick, disabled, type, style, ...props }) => {
        return (
            <button className={buttonStyle.btn} onClick={onClick} disabled={disabled} type={type} style={style}>
                {props.children}
            </button>
        )
    }
}