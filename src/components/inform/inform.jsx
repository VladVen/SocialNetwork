import style from './inform.module.css'
import MyPosts from './MyPosts/myPosts'
import ProfileInforn from "./ProfileInform/ProfileInforn";

const Inform = () => {
   return ( 
   <div className={style.inform}>

            <ProfileInforn />
           <MyPosts />
    </div>
   )
}
export default Inform