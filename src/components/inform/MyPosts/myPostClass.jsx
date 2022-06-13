import React from "react";
import Post from "./Post/post1";




class myPostClass extends React.Component {

    addPost = () => {
        this.props.addPost()
    }
    onPostChanger = (event) => {
        let text = event.currentTarget.value;
        this.props.onPostChanger(text)

    }

    render() {
        return (
            <div>
                <div>myPost</div>
                <div>
             <textarea
                 value={this.props.newPostText}
                 onChange={this.onPostChanger}
                 placeholder='Enter your post'

             />
                    <button onClick={this.addPost}>New Post</button>
                </div>
                <div>{this.props.postData.map(posts => <Post key={posts.id} id={posts.id} message={posts.message}
                                                        likes={posts.likes} dislikes={posts.dislikes}/>)}</div>
            </div>
        )
    }
}
export default myPostClass