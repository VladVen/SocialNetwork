import style from './myposts.module.css'
import CompiledPostData from "./Post/compiledPostData";
import React from "react";
import {addPostActionCreator, onPostChangerActionCreator} from "../../../redux/state";



const myPosts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChanger = () => {
        let text = newPostElement.current.value;
        props.dispatch(onPostChangerActionCreator(text))
    }
    return (
        <div>
            <div>myPost</div>
            <div>
             <textarea
                 ref={newPostElement}
                 value={props.newPostText}
                 onChange={onPostChanger}
             />
                <button onClick={addPost}>New Post</button>
            </div>
            <CompiledPostData postData={props.postData}/>
        </div>
    )
}
export default myPosts