import React from "react";
import Post from "./Post/post1";




const myPosts = (props) => {

    let state = props.profilePage
    let emptyArea = state.newPostText

    let compiledPostData = state.postData.map(posts => <Post key={posts.id} id={posts.id} message={posts.message} likes={posts.likes} dislikes={posts.dislikes} /> )


    let addPost = () => {
        props.addPost()
    }
    let onPostChanger = (event) => {
        let text = event.currentTarget.value;
        props.onPostChanger(text)

    }
    return (
        <div>
            <div>myPost</div>
            <div>
             <textarea
                 value={emptyArea}
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