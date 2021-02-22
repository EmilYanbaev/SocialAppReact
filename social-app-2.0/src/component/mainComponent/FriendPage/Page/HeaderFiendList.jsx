import style from "./HeaderFriendList.module.css"
import React from 'react';

class HeaderPage extends React.Component {

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onClickGetUser = this.onClickGetUser.bind(this)
        this.inputSearch = React.createRef()
    }

    componentDidMount() {
        this.inputSearch.current.focus();
    }
    // componentDidUpdate() {
    //     this.inputSearch.current.focus();
    // }

    onChange(event) {

        this.props.updateInput(event.target.value)
    }
    onClickGetUser(event) {
        
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
                        <input ref={this.inputSearch}
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


/*{<div className={style.header__title}>
                    <h2>Friend Lists</h2>
                </div>
                <form className={style.search}>
                    <input ref={this.inputSearch}
                        value={this.props.input}
                        placeholder="Type here to search"
                        onChange={this.onChange} />
                    <button className={style.btn_srh}
                        type="submit"
                        onClick={this.onClickGetUser}>icon</button>
                </form>}*/