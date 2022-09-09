import React, {useEffect, useState} from "react";
import TextArea from "antd/es/input/TextArea";
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {sendMessage} from "../../redux/reducers/chatReducer";
import {AnyAction} from "redux";


export const SendMessageForm: React.FC = React.memo(() => {
    const dispatch = useDispatch()
    return <div>
        <Formik initialValues={{newPostText: ''}}
                onSubmit={async (values, {resetForm, setSubmitting}) => {
                    await dispatch(sendMessage(values.newPostText) as unknown as AnyAction)
                    // @ts-ignore
                    resetForm({newPostText: ""})
                    setSubmitting(false)
                }}>
            {
                ({isSubmitting}) => {
                    return <Form>
                        <Field placeholder='Enter your post' name={'newPostText'} as={TextArea} showCount
                               maxLength={500}
                               style={{width: 500, height: 70}}/>
                        <button name={"submit"} disabled={isSubmitting}>Send</button>
                    </Form>
                }
            }

        </Formik>
    </div>
})