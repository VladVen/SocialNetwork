import React from "react";
import {addPost} from "../../../redux/reducers/profilePageReducer";
import myPostClass from "./myPostClass";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postData:  state.profilePage.postData,
        newPostText:  state.profilePage.newPostText,
        }

}
const mapDispatchToProps = {
            addPost,

}
const myPostsContainer = connect(mapStateToProps, mapDispatchToProps)(myPostClass)
export default myPostsContainer