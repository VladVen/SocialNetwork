import style from './myposts.module.css'
import CompiledPostData from "./Post/compiledPostData";


const myPosts = () => {

   return (
     <div>
       <div>myPost</div>
           <div>
             <textarea></textarea>
             <button>New Post</button>
           </div>
         <CompiledPostData />
            </div>
   )
}
export default myPosts