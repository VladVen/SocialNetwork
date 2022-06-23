import Preloader from "../../common/Preloader";

const ProfileInform = (props) => {

    if(!props.profileData){
        return <Preloader/>
    }

    return (
        <div>
            <img src={props.profileData.photos.large} />
            <div>{props.profileData.fullName}</div>
            <div>{props.profileData.aboutMe}</div>
        </div>
    )
}
export default ProfileInform