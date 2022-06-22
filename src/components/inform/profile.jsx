import style from './profile.module.css'
import ProfileInform from "./ProfileDescription/ProfileInform";
import MyPostsContainer from "./MyPosts/myPostsContainer";

const Profile = (props) => {
   return ( 
   <div className={style.inform}>

            <ProfileInform />
           <MyPostsContainer />
    </div>
   )
}
export default Profile