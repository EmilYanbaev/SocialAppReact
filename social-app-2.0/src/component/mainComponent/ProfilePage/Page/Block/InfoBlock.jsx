import style from "./InfoBlock.module.css"
import  React , { useState} from 'react';
let ProfileInfo = (props) => {
    const [viewContacts, setShowContacts] = useState(false)
    return (
        <div className={style.userInfo}>
            <div className={style.userInfo__fullName}>
                {props.profile.fullName}
            </div>
            <div className={style.userInfo_item}>
                <p className={style.userInfo_item__columnLeft}>About me:</p>
                <p className={style.userInfo_item__columnRight}>{props.profile.aboutMe}</p>
            </div>
            <div className={style.userInfo_item}>
                <p className={style.userInfo_item__columnLeft}>Looking for a job:</p>
                <p className={style.userInfo_item__columnRight}>{props.profile.lookingForAJob ? "Yes" : "No"}</p>
            </div>
            { props.profile.lookingForAJob && <div className={style.userInfo_item}>
                <p className={style.userInfo_item__columnLeft}>Looking for a job description:</p>
                <p className={style.userInfo_item__columnRight}>{props.profile.lookingForAJobDescription}</p>
            </div>}


            { viewContacts && <div className={style.contacts}>
                <div className={style.userInfo_item}>
                    <p className={style.userInfo_item__columnLeft}>VK:</p>
                    <p className={style.userInfo_item__columnRight}>{props.profile.contacts.vk}</p>
                </div>
                <div className={style.userInfo_item}>
                    <p className={style.userInfo_item__columnLeft}>GitHub</p>
                    <p className={style.userInfo_item__columnRight}>{props.profile.contacts.github}</p>
                </div>
            </div>
            }
            <button className={style.contacts__btn} onClick={() => setShowContacts(!viewContacts)} > Show contacts...</button>
        </div>
    )
}

export default ProfileInfo