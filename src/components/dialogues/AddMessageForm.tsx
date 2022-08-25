import {Field, Form, Formik} from "formik";
import Textarea from "../../common/customComponent/textarea";
import React from "react";

type Props = {
    addMessage: (title: string) => void
}


const AddMessageForm:React.FC<Props> = ({addMessage}) => {
    return (
        <Formik
            initialValues={{
                newMessageText: "",
            }}
            onSubmit={(values, { resetForm }) => {
                addMessage(values.newMessageText);
                // @ts-ignore
                resetForm({ values: "" });
            }}>
            <Form>
                <div>
                    <Field
                        name={"newMessageText"}
                        as={Textarea}
                        placeholder={"enter text"}
                    />
                </div>
                <button type={"submit"}>Send</button>
            </Form>
        </Formik>
    );
};

export default AddMessageForm