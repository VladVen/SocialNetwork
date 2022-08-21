import style from "./post.module.css";
import {Avatar} from "../../ProfileDescription/avatar";

const Post = (props) => {
  return (
    <div className={style.headliner}>
      <div className={style.post}>
        <Avatar/>
        {props.message}
      </div>
        <button onClick={() => props.onRemove(props.id)}>Delete</button>
      <div>
        <span>{props.likes} like</span>
      </div>
      <div>
        <span>{props.dislikes} dislike</span>
      </div>
    </div>
  );
};
export default Post;
