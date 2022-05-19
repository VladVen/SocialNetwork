import React from "react";
import {addPostActionCreator, onPostChangerActionCreator} from "../../../redux/reducers/profilePageReducer";
import MyPosts from "./myPosts";
import MyContext from "../../../myContext";


const myPostsContainer = () => {

    return (
        <MyContext.Consumer>
            {
                (store) => {
                    let state = store.getState()
                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    let onPostChanger = (event) => {
                        let text = event.target.value;
                        store.dispatch(onPostChangerActionCreator(text))
                    }
                    return (
                        <MyPosts updateTextArea={onPostChanger} addPost={addPost}
                                 postData={state.profilePage.postData}
                                 newPostText={state.profilePage.newPostText}/>
                    )
                }
            }
        </MyContext.Consumer>
    )
}
export default myPostsContainer