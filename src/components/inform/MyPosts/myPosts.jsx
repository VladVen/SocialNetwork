import style from './myposts.module.css'
import CompiledPostData from "./Post/compiledPostData";


const myPosts = (props) => {

   return (
     <div>
       <div>myPost</div>
           <div>
             <textarea></textarea>
             <button>New Post</button>
           </div>
         <CompiledPostData postData={props.postData} />
            </div>
   )
}
export default myPosts