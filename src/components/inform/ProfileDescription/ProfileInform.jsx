import Preloader from "../../common/Preloader";
import ProfileStatus from "../profileStatus";

const ProfileInform = (props) => {

    if(!props.profileData){
        return <Preloader/>
    }

    return (
        <div>
            <img src={props.profileData.photos.large} />
            <div>{props.profileData.fullName}</div>
            <div>{props.profileData.aboutMe}</div>
            <ProfileStatus status = {props.status}
                           updateProfileStatusTC = {props.updateProfileStatusTC} />
        </div>
    )
}
export default ProfileInform