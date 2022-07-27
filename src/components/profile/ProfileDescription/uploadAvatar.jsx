import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";

;


const UploadAvatar = (props) => {
    return (
        <div>
            <Formik
                initialValues={{file: null}}
                onSubmit={async (values, {setSubmitting} ) => {
                    await props.uploadNewAvatar(values.file)
                    setSubmitting(false);
                    props.onclose()
                }}>
                {({isSubmitting, setFieldValue}) => (
                    <Form>
                        <input id="file" name="file" type="file" onChange={(event) => {
                            setFieldValue("file", event.currentTarget.files[0])
                        }}/>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default UploadAvatar



