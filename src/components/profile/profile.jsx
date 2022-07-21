import style from './profile.module.css'
import ProfileInform from "./ProfileDescription/ProfileInform";
import MyPostsContainer from "./MyPosts/myPostsContainer";
import React from "react";

const Profile = (props) => {

   return ( 
   <div className={style.inform}>

            <ProfileInform profileData={props.profileData}
                           status = {props.status}
                           updateProfileStatusTC = {props.updateProfileStatusTC}
            />
           <MyPostsContainer />
    </div>
   )
}
export default Profile