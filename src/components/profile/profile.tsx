import style from './profile.module.css'
import ProfileInform from "./ProfileDescription/ProfileInform";
import MyPostsContainer from "./MyPosts/myPostsContainer";
import React from "react";
import {profileDataType, UpdateProfileDataType} from "../../types/types";


type Props = {
    profileData: profileDataType | null
    status: string | null
    errorMessage: string | null
    isOwner: boolean

    updateProfileStatusTC: (status: string ) => void
    uploadNewAvatar: (file: File ) => void
    updateProfile: (profile: UpdateProfileDataType) => void

}


const Profile: React.FC<Props> = ({profileData,status, updateProfileStatusTC, isOwner,
                                      uploadNewAvatar,updateProfile, errorMessage}) => {

   return ( 
   <div className={style.inform}>

            <ProfileInform profileData={profileData}
                           status = {status}
                           updateProfileStatusTC = {updateProfileStatusTC}
                           isOwner={isOwner}
                           uploadNewAvatar={uploadNewAvatar}
                           updateProfile={updateProfile}
                           errorMessage={errorMessage}
            />
           <MyPostsContainer />
    </div>
   )
}
export default Profile