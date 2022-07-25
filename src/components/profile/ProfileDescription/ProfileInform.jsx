import Preloader from "../../../common/Preloader";
import ProfileStatus from "../profileStatus";
import NoAvatar from "../../images/logo192.png";
import style from "../profile.module.css"
import React, {useState} from "react";
import UploadAvatar from "../uploadAvatar";
import Modal from "../../../common/modal/modal";
import {useEffect} from "react";

 const ProfileInform = (props) => {

     let [isOpen, setOpen] = useState(false)
     let [avatar, setAvatar] = useState(props.profileData.photos.large)

     useEffect(() => {
         setAvatar(props.profileData.photos.large)
     }, [props.profileData.photos.large])


     if (!props.profileData) {
        return <Preloader/>
    }

    return (
        <div>
            <img src={avatar != null ? avatar : NoAvatar}
                 className={style.avatar}/>
            {
                props.isOwner && <button onClick={() => setOpen(true)}>Change Photo</button>
            }
            <Modal isOpen={isOpen} onclose={() => setOpen(false)}>
                <UploadAvatar uploadNewAvatar={props.uploadNewAvatar} onclose={() => setOpen(false)} />
            </Modal>
            <div>{props.profileData.fullName}</div>
            <div>{props.profileData.aboutMe}</div>
            <ProfileStatus status={props.status}
                           updateProfileStatusTC={props.updateProfileStatusTC}/>
        </div>
    )
}

export default ProfileInform