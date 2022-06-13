import React from "react";
import {addPostActionCreator, onPostChangerActionCreator} from "../../../redux/reducers/profilePageReducer";
import myPostClass from "./myPostClass";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postData:  state.profilePage.postData,
        newPostText:  state.profilePage.newPostText,
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
const myPostsContainer = connect(mapStateToProps, mapDispatchToProps)(myPostClass)
export default myPostsContainer