import Preloader from "../../../common/Preloader";
import ProfileStatus from "./profileStatus";
import NoAvatar from "../../images/logo192.png";
import style from "../profile.module.css"
import React, {useState} from "react";
import UploadAvatar from "./uploadAvatar";
import Modal from "../../../common/modal/modal";
import ProfileContacts from "./ProfileContacts";
import ContactsForm from "./ContactsForm";
import EditProfileForm from "./EditProfileForm";
import {profileDataType, UpdateProfileDataType} from "../../../types/types";


type Props = {
    profileData: profileDataType | null
    status: string | null
    errorMessage: string | null
    isOwner: boolean
    updateProfileStatusTC: (status: string) => void
    uploadNewAvatar: (file: File ) => void
    updateProfile: (values: UpdateProfileDataType) => void
}

const ProfileInform: React.FC<Props> = ({profileData,status,
                                            updateProfileStatusTC, isOwner,
                                            uploadNewAvatar, updateProfile,
                                            errorMessage}) => {

    let [isOpenAvatar, setOpenAvatar] = useState(false)
    let [isOpenContacts, setOpenContacts] = useState(false)
    let [isOpenEdit, setOpenEdit] = useState(false)

    if (!profileData) {
        return <Preloader/>
    }
    return (
        <div className={style.myInfo}>
            <img src={profileData.photos.large != null ? profileData.photos.large : NoAvatar}
                 className={style.avatar}/>
            {
                isOwner && <button onClick={() => setOpenAvatar(true)}>Change Photo</button>
            }
            <Modal isOpen={isOpenAvatar} onclose={() => setOpenAvatar(false)}>
                <UploadAvatar uploadNewAvatar={uploadNewAvatar} onclose={() => setOpenAvatar(false)}/>
            </Modal>
            <div><b>My Name: </b>{profileData.fullName}</div>

            <ProfileStatus status={status}
                           updateProfileStatusTC={updateProfileStatusTC} isOwner={isOwner}/>
            <div>
                <div><b>About me: </b> {profileData.aboutMe || 'No info'}</div>
                <div><b>Looking For A Job:</b> {profileData.lookingForAJob ? ' Yes' : ' No'} </div>
                <div>
                    {
                        profileData.lookingForAJob && <div>
                            <b>My skills:</b> {profileData.lookingForAJobDescription} </div>
                    }
                </div>
                <div>
                    {
                        isOwner &&
                        <button onClick={() => setOpenEdit(true)}>Edit Information About me</button>
                    }
                    <Modal isOpen={isOpenEdit} onclose={() => setOpenEdit(false)}>
                        <EditProfileForm onclose={() => setOpenEdit(false)}
                                         updateProfile={updateProfile}
                                      profileData={{
                                          aboutMe: profileData.aboutMe,
                                          contacts: {
                                              facebook: profileData.contacts.facebook,
                                              github: profileData.contacts.github,
                                              instagram: profileData.contacts.instagram,
                                              twitter: profileData.contacts.twitter,
                                              youtube: profileData.contacts.youtube,
                                              website: profileData.contacts.website,
                                              mainLink: profileData.contacts.mainLink,
                                              vk: profileData.contacts.vk,

                                          },
                                          fullName: profileData.fullName,
                                          lookingForAJob: profileData.lookingForAJob,
                                          lookingForAJobDescription: profileData.lookingForAJobDescription,
                                      }}
                        />
                    </Modal>
                </div>
            </div>
            < br/>
            <div>
                <b>Contacts: </b> {
                isOwner && <button onClick={() => setOpenContacts(true)}>Edit Contacts</button>
            }
                {Object.keys(profileData.contacts)
                    .map(key => <ProfileContacts key={key}
                                                 objectKey={key}
                                                 objectValue={profileData.contacts[key]}/>)}
                <Modal isOpen={isOpenContacts} onclose={() => setOpenContacts(false)}>
                    <ContactsForm onclose={() => setOpenContacts(false)}
                                  updateProfile={updateProfile}
                                  profileData={profileData}
                                  errorMessage={errorMessage}
                    />
                </Modal>
            </div>
        </div>
    )
}

export default ProfileInform