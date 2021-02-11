import style from "./HeaderFriendList.module.css"

let HeaderPage = (props) => {

    let onChange = (event) => {
        props.updateInput(event.target.value)
    }
    let onClickGetUser = (event)=>{
        event.preventDefault();
        props.getUsers(false);
    }
    return (
        <div className={style.header}>
            <div className={style.header__title}>
                <h2>Friend Lists</h2>
            </div>
            <form className={style.search}>
                <input placeholder="Type here to search"
                    value={props.input}
                    onChange={onChange} />
                <button className={style.btn_srh}
                    type="submit"
                    onClick={onClickGetUser}>icon</button>
            </form>
        </div>
    )
}

export default HeaderPage