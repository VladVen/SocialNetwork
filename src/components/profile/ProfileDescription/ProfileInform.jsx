import Preloader from "../../../common/Preloader";
import ProfileStatus from "../profileStatus";
import avatar from "../../images/logo192.png";
import style from "../profile.module.css"

const ProfileInform = (props) => {

    if(!props.profileData){
        return <Preloader/>
    }

    return (
        <div>
            <img src={props.profileData.photos.large != null ? props.profileData.photos.large : avatar}
                 className={style.avatar}/>
            <div>{props.profileData.fullName}</div>
            <div>{props.profileData.aboutMe}</div>
            <ProfileStatus status = {props.status}
                           updateProfileStatusTC = {props.updateProfileStatusTC} />
        </div>
    )
}
export default ProfileInform