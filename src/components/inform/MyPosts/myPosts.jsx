import style from './myposts.module.css'
import CompiledPostData from "./Post/compiledPostData";
import React from "react";


const myPosts = (props) => {
    let newPostElement = React.createRef();
let addPost = () => {
    let text = newPostElement.current.value;
    props.addNewPost(text)
}
   return (
     <div>
       <div>myPost</div>
           <div>
             <textarea ref={newPostElement}></textarea>
             <button onClick={addPost}>New Post</button>
           </div>
         <CompiledPostData postData={props.postData} />
            </div>
   )
}
export default myPosts