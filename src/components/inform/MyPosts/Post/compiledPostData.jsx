import Post from "./post1";



let compiledPostData = (props) =>( props.postData.map(posts => <Post id={posts.id} message={posts.message} likes={posts.likes} dislikes={posts.dislikes} /> ))

export default compiledPostData