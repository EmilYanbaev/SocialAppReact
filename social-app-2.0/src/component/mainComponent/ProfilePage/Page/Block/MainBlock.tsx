import style from "./MainBlock.module.css"
import { Button } from "../../../../otherComponent/GroupComponent";
import { PhotosType } from "../../../../../types/commonTypes";

type PropsType = {
    isOwner: boolean,
    photos: PhotosType|undefined,
    savePhoto: (file:any)=>void,
    openModal: () => void
}

let MainBlockProfile: React.FC<PropsType> = ({ isOwner, photos, savePhoto, openModal }) => {

    let onSavePhoto = (event: any) => {
        savePhoto(event.target.files[0])
    }

    return (
        <div className={style.user}>
            <div className={style.user__photo}
                style={photos?.large ?
                    { "backgroundImage": `url(${photos.large})` } : {}}>
            </div>
            {isOwner && <div className={style.changePanel}>
                <div className={style.changePanel__item + " " + style.change_photo}>
                    <label htmlFor="file-upload" className={style.change_photo__label}>
                        Изменить фото
                        </label>
                    <input id="file-upload" className={style.change_photo__input} type="file" onChange={onSavePhoto} />
                </div>
                <div className={style.changePanel__item + " " + style.change_info}>
                    <button className={style.change_info__btn} onClick={openModal}>
                        Редактировать профиль
                        </button>
                </div>
            </div>}
            { !isOwner &&
                <Button style={{ "width": "100%" }}>
                    MESSAGE
                </Button>
            }
        </div>
    )
}

export default MainBlockProfile