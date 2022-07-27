import {ErrorMessage, Field, Form, Formik} from "formik";
import myPostValidatorSchema from "../../../formValidations/myPostValidator";
import React from "react";

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

export default PostForm