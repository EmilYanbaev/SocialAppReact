import style from "./MainBlock.module.css"
import { GroupComponent } from "../../../../otherComponent/GroupComponent";

let MainBlockProfile = (props) => {

    let onSavePhoto = (event) => {
        props.savePhoto(event.target.files[0])
    }

    return (
        <div className={style.user}>
            <div className={style.user__photo}
                style={props.photos?.large ?
                    { "backgroundImage": `url(${props.photos.large})` } : {}}>
            </div>
            {props.isOwner && <div className={style.changePanel}>
                <div className={style.changePanel__item + " " + style.change_photo}>
                    <label htmlFor="file-upload" className={style.change_photo__label}>
                        Изменить фото
                        </label>
                    <input id="file-upload" className={style.change_photo__input} type="file" onChange={onSavePhoto} />
                </div>
                <div className={style.changePanel__item + " " + style.change_info}>
                    <button className={style.change_info__btn} onClick={props.openModal}>
                        Редактировать профиль
                        </button>
                </div>
            </div>}

            <GroupComponent.Button style={{ "width": "100%" }}>
                MESSAGE
            </GroupComponent.Button>
        </div>
    )
}

export default MainBlockProfile