import React from "react";
import style from "../profile.module.css"

type Props = {
    objectKey: any,
    objectValue: string | null
}

const ProfileContacts: React.FC<Props> = ({objectKey, objectValue}) => {
    if(!objectValue) return null
    return (
        <div className={style.contacts}>
            <b>{objectKey}:</b> {objectValue}
        </div>
    )
}

export default ProfileContacts