import style from './myposts.module.css'
import CompiledPostData from "./Post/compiledPostData";
import React from "react";
import {addPostActionCreator, onPostChangerActionCreator} from "../../../redux/reducers/profilePageReducer";




const myPosts = (props) => {
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChanger = (event) => {
        let text = event.target.value;
        props.dispatch(onPostChangerActionCreator(text))
    }
    return (
        <div>
            <div>myPost</div>
            <div>
             <textarea
                 value={props.newPostText}
                 onChange={onPostChanger}
                 placeholder='Enter your post'

             />
                <button onClick={addPost}>New Post</button>
            </div>
            <CompiledPostData postData={props.postData}/>
        </div>
    )
}
export default myPosts