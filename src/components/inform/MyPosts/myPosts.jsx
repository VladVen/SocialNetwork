import style from './myposts.module.css'
import Post from './Post/post1'


const myPosts = () => {
   return ( 
     <div>
       <div>myPost</div>
           <div>
             <textarea></textarea>
             <button>New Post</button>
           </div>
         <Post message="Hello world!!!" likes="15" dislikes="1"/>
         <Post message="I'm gay" likes="85" dislikes="5"/>
    </div>
   )
}
export default myPosts