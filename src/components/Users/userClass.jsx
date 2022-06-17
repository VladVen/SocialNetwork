import style from "./users.module.css";
import avatar from "../images/logo192.png";
import React from "react";
import axios from "axios";
import Pages from "./Pages";


class User extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    currentPageChanger = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)

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
                <div className={style.pages}>
                    <Pages currentPageChanger={this.currentPageChanger} pagesCount={pagesCount}
                           currentPage={this.props.currentPage}/>
                </div>
            </div>
        )
    }
}

export default User
