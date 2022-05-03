import style from './inform.module.css'
import MyPosts from './MyPosts/myPosts'
import ProfileInform from "./ProfileInform/ProfileInform";

const Inform = (props) => {
   return ( 
   <div className={style.inform}>

            <ProfileInform />
           <MyPosts postData={props.postData} addNewPost={props.addNewPost}/>
    </div>
   )
}
export default Inform