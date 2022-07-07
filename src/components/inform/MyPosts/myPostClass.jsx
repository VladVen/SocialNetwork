import React from "react";
import Post from "./Post/post1";
import {Form, Formik, Field} from "formik";


class myPostClass extends React.Component {
    render() {
        return (
            <div>
                <div>My Posts</div>
                <div>
                    <PostForm addPost={this.props.addPost}/>
                </div>
                <div>{this.props.postData.map(posts => <Post key={posts.id} id={posts.id} message={posts.message}
                                                             likes={posts.likes} dislikes={posts.dislikes}/>)}</div>
            </div>
        )
    }
}

const PostForm = (props) => {
    const addPost = (newPostText) => {
        props.addPost(newPostText)
    }
    return (
        <Formik initialValues={{newPostText: ''}}
                onSubmit={(values, {resetForm}) => {
                    addPost(values.newPostText);
                    resetForm({values: ""});
                }}>
            <Form>
                <Field placeholder='Enter your post' name={'newPostText'} as={'textarea'}/>
                <button type={"submit"}>Post it</button>
            </Form>
        </Formik>
    )
}


export default myPostClass