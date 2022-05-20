import React from "react";
import {addPostActionCreator, onPostChangerActionCreator} from "../../../redux/reducers/profilePageReducer";
import MyPosts from "./myPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return (
        {
            postData:  state.profilePage.postData,
            newPostTex: state.profilePage.newPostText
        }
)

}
const mapDispatchToProps = (dispatch) => {

    return (
        {
            addPost: () => {dispatch(addPostActionCreator())},
            updateTextArea: (text) => {
                dispatch(onPostChangerActionCreator(text))
            }
        }
    )
}

const myPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)



export default myPostsContainer