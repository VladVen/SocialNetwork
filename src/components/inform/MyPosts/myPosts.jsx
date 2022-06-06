import React from "react";
import Post from "./Post/post1";




const myPosts = (props) => {

    let compiledPostData = props.postData.map(posts => <Post id={posts.id} message={posts.message} likes={posts.likes} dislikes={posts.dislikes} /> )


    let addPost = () => {
        props.addPost()
    }
    let onPostChanger = (event) => {
        let text = event.target.value;
        props.onPostChanger(text)
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
            <div>{compiledPostData}</div>
        </div>
    )
}
export default myPosts