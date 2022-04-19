import style from './post1.module.css'


const Post1 = () => {
   return ( 
           <div className={style.headliner}>
             <div className={style.post}>
               <img src='https://forbes.ua/static/storage/thumbs/340x340/a/6a/efeb4bc6-62e1e5563aee5a701e457871e538f6aa.png?v=3960_1'/>
               Post 1
               </div>
               <div><span>like</span></div>
               <div><span>dislike</span></div>
               </div>
   )
}
export default Post1