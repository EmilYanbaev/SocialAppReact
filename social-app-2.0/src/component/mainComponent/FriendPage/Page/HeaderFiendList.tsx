import style from "./HeaderFriendList.module.css"
import React, { MouseEvent} from 'react';


type PropsType = {
    input:string,
    updateInput:(value:string)=>void
    getUsers:(nextPage:boolean)=>void
}

class HeaderPage extends React.Component<PropsType> {

    private inputSearchRef:React.RefObject<HTMLInputElement>

    constructor(props:PropsType) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onClickGetUser = this.onClickGetUser.bind(this)

        this.inputSearchRef = React.createRef<HTMLInputElement>()
    }

    componentDidMount() {
        if(this.inputSearchRef.current)
        this.inputSearchRef.current.focus();
    }
    // componentDidUpdate() {
    //     this.inputSearch.current.focus();
    // }

    onChange(event:React.ChangeEvent<HTMLInputElement>) {
        this.props.updateInput(event.target.value)
    }
    onClickGetUser(event:MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        this.props.getUsers(false);
    }
    render() {
        return (
            <div className={style.header}>
                <div className={style.header__inner}>
                    <div className={style.header_title}>
                        <h2>Friend Lists</h2>
                    </div>
                    <form className={style.search}>
                        <input ref={this.inputSearchRef}
                            value={this.props.input}
                            placeholder="Type here to search"
                            onChange={this.onChange} />
                        <button className={style.btn_srh}
                            type="submit"
                            onClick={this.onClickGetUser}>icon</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default HeaderPage