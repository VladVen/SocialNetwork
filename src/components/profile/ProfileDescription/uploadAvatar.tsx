import React, {ChangeEvent} from "react";
import {Form, Formik} from "formik";

type Props = {
    uploadNewAvatar: (file: File ) => void
    onclose: () => void
}

// todo: make cool avatar uploading

const UploadAvatar: React.FC<Props> = (props) => {
    return (
        <div>
            <Formik
                initialValues={{file: null}}
                onSubmit={async (values, {setSubmitting}) => {
                    if(values.file) {
                        await props.uploadNewAvatar(values.file)
                    }
                    setSubmitting(false);
                    props.onclose()
                }}>
                {({isSubmitting, setFieldValue}) => (
                    <Form>
                        <input id="file" name="file" type="file"
                               onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                   setFieldValue("file", event.currentTarget.files && event.currentTarget.files[0])
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



