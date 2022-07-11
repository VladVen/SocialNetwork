import React from "react";
import Post from "./Post/post1";
import {Form, Formik, Field, ErrorMessage} from "formik";
import myPostValidatorSchema from "../../../formValidations/myPostValidator";


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

    return (
        <Formik initialValues={{newPostText: ''}}
                validationSchema={myPostValidatorSchema}
                onSubmit={(values, {resetForm}) => {
                    props.addPost(values.newPostText);
                    resetForm({values: ""});
                }}
        >
            <Form>
                <Field placeholder='Enter your post' name={'newPostText'} as={'textarea'}/>
                <ErrorMessage name={'newPostText'} component={'div'}/>
                <button type={"submit"}>Post it</button>
            </Form>
        </Formik>
    )
}


export default myPostClass