import style from "./post.module.css";
import {Avatar} from "../../ProfileDescription/avatar";
import React from "react";


type Props = {
    message: string
    onRemove: (id: number) => void
    likes: number
    dislikes: number
    id: number
}

const Post: React.FC<Props> = ({message, onRemove, likes, dislikes, id}) => {
  return (
    <div className={style.headliner}>
      <div className={style.post}>
        <Avatar/>
        {message}
      </div>
        <button onClick={() => onRemove(id)}>Delete</button>
      <div>
        <span>{likes} like</span>
      </div>
      <div>
        <span>{dislikes} dislike</span>
      </div>
    </div>
  );
};
export default Post;
