import style from './inform.module.css'
import ProfileInform from "./ProfileDescription/ProfileInform";
import MyPostsContainer from "./MyPosts/myPostsContainer";

const Inform = (props) => {
   return ( 
   <div className={style.inform}>

            <ProfileInform />
           <MyPostsContainer />
    </div>
   )
}
export default Inform