import {Field, Form, Formik} from "formik";
import Textarea from "../common/customComponent/textarea";
import React from "react";

const AddMessageForm = (props) => {
    return (
        <Formik
            initialValues={{
                newMessageText: "",
            }}
            onSubmit={(values, { resetForm }) => {
                props.addMessage(values.newMessageText);
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