import Post from "./post1";

let postData = [
    {id:1, message: 'Hello world!!!',likes:85,dislikes:1 },
    {id:2, message: 'Slava Ukraine',likes:105,dislikes:15 },
    {id:3, message: 'Crimea is ours',likes:100,dislikes:5 },
    {id:4, message: 'Русские пидоры',likes:456,dislikes:165 },
    {id:5, message: 'Русские пидоры',likes:456,dislikes:165 }
]

let compiledPostData = () =>( postData.map(posts => <Post id={posts.id} message={posts.message} likes={posts.likes} dislikes={posts.dislikes} /> ))

export default compiledPostData