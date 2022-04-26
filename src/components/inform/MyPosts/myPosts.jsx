import style from './myposts.module.css'
import Post from './Post/post1'


const myPosts = () => {

    const PostData = [
        {id:1, message: 'Hello world!!!',likes:85,dislikes:1 },
        {id:2, message: 'Slava Ukraine',likes:105,dislikes:15 },
        {id:3, message: 'Crimea is ours',likes:100,dislikes:5 },
        {id:4, message: 'Русские пидоры',likes:456,dislikes:165 }
    ]

   return ( 
     <div>
       <div>myPost</div>
           <div>
             <textarea></textarea>
             <button>New Post</button>
           </div>
         <Post id={PostData[0].id} message={PostData[0].message} likes={PostData[0].likes} dislikes={PostData[0].dislikes} />
         <Post id={PostData[1].id} message={PostData[1].message} likes={PostData[1].likes} dislikes={PostData[1].dislikes} />
         <Post id={PostData[2].id} message={PostData[2].message} likes={PostData[2].likes} dislikes={PostData[2].dislikes} />
         <Post id={PostData[3].id} message={PostData[3].message} likes={PostData[3].likes} dislikes={PostData[3].dislikes} />
    </div>
   )
}
export default myPosts