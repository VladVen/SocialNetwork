import React from "react";
import style from "../profile.module.css"

const ProfileContacts = ({objectKey, objectValue}) => {
    if(!objectValue) return null
    return (
        <div className={style.contacts}>
            <b>{objectKey}:</b> {objectValue}
        </div>
    )
}

export default ProfileContacts