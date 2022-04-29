import Post from "./post1";
import {postData} from "../../../../index";



let compiledPostData = () =>( postData.map(posts => <Post id={posts.id} message={posts.message} likes={posts.likes} dislikes={posts.dislikes} /> ))

export default compiledPostData