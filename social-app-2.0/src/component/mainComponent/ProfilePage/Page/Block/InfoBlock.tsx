import style from "./InfoBlock.module.css"
import React, { useState } from 'react';
import { FullProfileType, ProfileType } from "../../../../../types/commonTypes";

type PropsType = {
    profile: FullProfileType | null
}

let ProfileInfo: React.FC<PropsType> = ({ profile }) => {
    const [viewContacts, setShowContacts] = useState(false)
    return (
        <div className={style.userInfo}>
            <div className={style.userInfo__fullName}>
                {profile?.fullName}
            </div>
            <div className={style.userInfo_item}>
                <p className={style.userInfo_item__columnLeft}>About me:</p>
                <p className={style.userInfo_item__columnRight}>{profile?.aboutMe}</p>
            </div>
            <div className={style.userInfo_item}>
                <p className={style.userInfo_item__columnLeft}>Looking for a job:</p>
                <p className={style.userInfo_item__columnRight}>{profile?.lookingForAJob ? "Yes" : "No"}</p>
            </div>
            { profile?.lookingForAJob && <div className={style.userInfo_item}>
                <p className={style.userInfo_item__columnLeft}>Looking for a job description:</p>
                <p className={style.userInfo_item__columnRight}>{profile.lookingForAJobDescription}</p>
            </div>}


            { viewContacts && <div className={style.contacts}>
                <div className={style.userInfo_item}>
                    <p className={style.userInfo_item__columnLeft}>VK:</p>
                    <p className={style.userInfo_item__columnRight}>{profile?.contacts.vk}</p>
                </div>
                <div className={style.userInfo_item}>
                    <p className={style.userInfo_item__columnLeft}>GitHub</p>
                    <p className={style.userInfo_item__columnRight}>{profile?.contacts.github}</p>
                </div>
            </div>
            }
            <button className={style.contacts__btn} onClick={() => setShowContacts(!viewContacts)} > Show contacts...</button>
        </div>
    )
}

export default ProfileInfo