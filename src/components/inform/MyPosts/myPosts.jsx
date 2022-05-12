import style from './myposts.module.css'
import CompiledPostData from "./Post/compiledPostData";
import React from "react";


const myPosts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-NEW-POST'})
    }
    let onPostChanger = () => {
        let text = newPostElement.current.value;
        props.dispatch({
            type: 'UPDATE-POST-AREA',
            postText: text
        })
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