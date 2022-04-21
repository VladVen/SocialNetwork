import style from "./post.module.css";

const Post = (props) => {
  return (
    <div className={style.headliner}>
      <div className={style.post}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%97%D0%B5%D0%BB%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%2851939489510%29.jpg/250px-%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%97%D0%B5%D0%BB%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%2851939489510%29.jpg" />
        {props.message}
      </div>
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
