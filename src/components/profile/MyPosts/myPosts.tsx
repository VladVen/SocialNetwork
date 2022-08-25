import React from "react";
import Post from "./Post/post";
import PostForm from "./postForm";
import {PropsType} from "./myPostsContainer";


const myPosts: React.FC<PropsType> = React.memo(({addPost, postData, deletePost}) => {
    return (
        <div>
            <div>My Posts</div>
            <div>
                <PostForm addPost={addPost}/>
            </div>
            <div>
                {
                    [...postData]
                        .reverse()
                        .map(posts =>
                            <Post key={posts.id} id={posts.id} message={posts.message}
                                                      likes={posts.likes} dislikes={posts.dislikes}
                                            onRemove={deletePost}
                        />)
                }
            </div>
        </div>
    )
})


export default myPosts