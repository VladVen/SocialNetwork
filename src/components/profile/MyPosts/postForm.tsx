import {ErrorMessage, Field, Form, Formik} from "formik";
import myPostValidatorSchema from "../../../formValidations/myPostValidator";
import React from "react";
import {Input} from "antd";
import TextArea from "antd/es/input/TextArea";


type Props = {
    addPost: (value: string) => void
}


const PostForm: React.FC<Props> = ({addPost}) => {
    return (
        <Formik initialValues={{newPostText: ''}}
                validationSchema={myPostValidatorSchema}
                onSubmit={(values, {resetForm}) => {
                    addPost(values.newPostText);
                    // @ts-ignore
                    resetForm({values: ""});
                }}
        >
            <Form>
                <Field placeholder='Enter your post' name={'newPostText'} as={TextArea} showCount maxLength={500} style={{ width: 500, height: 70 }}/>
                <ErrorMessage name={'newPostText'} component={'div'}/>
                <button type={"submit"}>Post it</button>
            </Form>
        </Formik>
    )
}

export default PostForm