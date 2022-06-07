import React from "react";
import {addPostActionCreator, onPostChangerActionCreator} from "../../../redux/reducers/profilePageReducer";
import MyPosts from "./myPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage:  state.profilePage,
        }

}
const mapDispatchToProps = (dispatch) => {
    return {
            addPost: () => {
                dispatch(addPostActionCreator())
            },
            onPostChanger: (text) => {

                dispatch(onPostChangerActionCreator(text))
            }
        }
}
const myPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default myPostsContainer