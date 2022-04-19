import style from './myposts.module.css'
import Post1 from './Post/post1'


const myPosts = () => {
   return ( 
     <div>
       <div>myPost</div>
           <div>
             <textarea></textarea>
             <button>New Post</button>
           </div>
         <Post1 />
    </div>
   )
}
export default myPosts