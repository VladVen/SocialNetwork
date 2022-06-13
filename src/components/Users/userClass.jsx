import style from "./users.module.css";
import avatar from "../images/logo192.png";
import React from "react";
import axios from "axios";


class User extends React.Component {

    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return (
            <div className={style.inform}>
                {
                    this.props.usersData.map(users => <div key={users.id}>
            <span>
                <div className={style.ava}><img src={users.photos.small != null ? users.photos.small : avatar}/></div>
                {users.follow
                    ? <button onClick={() => {
                        this.props.setUnfollow(users.id)
                    }}> Unfollow </button>
                    : <button onClick={() => {
                        this.props.setFollow(users.id)
                    }}> Follow </button>}
            </span>
                            <span>
                <span>
                <div>{users.name} </div>
                <div>{users.bio}</div>
                    </span>
                <span>
                    <div>{'users.location'}</div>
                </span>
            </span>
                        </div>
                    )
                }
                <div>
                    <button>Show More</button>
                </div>
            </div>
        )
    }
}
export default User
