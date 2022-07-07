import React from "react";
import style from './login.module.css'
import { Formik, Form, Field } from 'formik';



class loginForm extends React.Component {
    render() {
        return (
            <div>
                <h1>Login Form</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values ) => {
                       console.log(values)
                    }}>
                        <Form>
                            <Field type="email" name="email" />
                            <Field type="password" name="password" />
                            <button type="submit" >
                                Submit
                            </button>
                        </Form>
                </Formik>
            </div>
        );
    }
};

export default loginForm