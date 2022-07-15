import React from "react";
import Post from "./Post/post1";
import PostForm from "../postForm";


const myPostClass = React.memo((props) => {
    return (
        <div>
            <div>My Posts</div>
            <div>
                <PostForm addPost={props.addPost}/>
            </div>
            <div>
                {
                    [...props.postData]
                        .reverse()
                        .map(posts => <Post key={posts.id} id={posts.id} message={posts.message}
                                                      likes={posts.likes} dislikes={posts.dislikes}/>)
                }
            </div>
        </div>
    )
})


export default myPostClass