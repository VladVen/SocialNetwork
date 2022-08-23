import React from "react";
import {Form, Formik} from "formik";

type Props = {
    uploadNewAvatar: (file: React.ChangeEvent<HTMLInputElement> | null) => void
    onclose: () => void
}


const UploadAvatar: React.FC<Props> = (props) => {
    return (
        <div>
            <Formik
                initialValues={{file: null}}
                onSubmit={async (values, {setSubmitting}) => {
                    await props.uploadNewAvatar(values.file)
                    setSubmitting(false);
                    props.onclose()
                }}>
                {({isSubmitting, setFieldValue}) => (
                    <Form>
                        <input id="file" name="file" type="file"
                               onChange={(event: any) => {
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



