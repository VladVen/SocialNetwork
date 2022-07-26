import Preloader from "../../../common/Preloader";
import ProfileStatus from "./profileStatus";
import NoAvatar from "../../images/logo192.png";
import style from "../profile.module.css"
import React, {useState} from "react";
import UploadAvatar from "./uploadAvatar";
import Modal from "../../../common/modal/modal";
import ProfileContacts from "./ProfileContacts";
import ContactsForm from "./ContactsForm";

const ProfileInform = (props) => {

    let [isOpenAvatar, setOpenAvatar] = useState(false)
    let [isOpenContacts, setOpenContacts] = useState(false)

    if (!props.profileData) {
        return <Preloader/>
    }

    return (
        <div>
            <img src={props.profileData.photos.large != null ? props.profileData.photos.large : NoAvatar}
                 className={style.avatar}/>
            {
                props.isOwner && <button onClick={() => setOpenAvatar(true)}>Change Photo</button>
            }
            <Modal isOpen={isOpenAvatar} onclose={() => setOpenAvatar(false)}>
                <UploadAvatar uploadNewAvatar={props.uploadNewAvatar} onclose={() => setOpenAvatar(false)}/>
            </Modal>
            <div><b>My Name: </b>{props.profileData.fullName}</div>

            <ProfileStatus status={props.status}
                           updateProfileStatusTC={props.updateProfileStatusTC}/>
            <div>
                <div><b>About me: </b> {props.profileData.aboutMe}</div>
                <div><b>LookingForAJob:</b> {props.profileData.lookingForAJob ? ' Yes' : ' No'} </div>
                <div>
                    {
                        props.profileData.lookingForAJob && <div>
                            <b>What i`m looking for a gob:</b> {props.profileData.lookingForAJobDescription} </div>
                    }
                </div>
            </div>
            <div>
                <b>Contacts: </b> {
                props.isOwner && <button onClick={() => setOpenContacts(true)}>Edit Contacts</button>
            }
                {Object.keys(props.profileData.contacts)
                    .map(key => <ProfileContacts key={key}
                                                 objectKey={key}
                                                 objectValue={props.profileData.contacts[key]}/>)}
                <Modal isOpen={isOpenContacts} onclose={() => setOpenContacts(false)}>
                    <ContactsForm onclose={() => setOpenContacts(false)} updateContacts={props.updateContacts} />
                </Modal>
            </div>
        </div>
    )
}

export default ProfileInform