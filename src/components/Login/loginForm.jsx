import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import emailValidatorSchema from "../../formValidations/loginValidator";
import {connect} from "react-redux";
import {logInTC} from "../../redux/reducers/authReducer";



class loginForm extends React.Component {
    render() {
        return (
            <div>
                <h1>Login Form</h1>
                <Formik
                    initialValues={{ email: '', password: '', rememberMe: false }}
                    validationSchema={emailValidatorSchema}
                    onSubmit={(values ) => {
                        return this.props.logInTC(values.email, values.password, values.rememberMe);
                    }}>
                        <Form>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="span" />
                            <div><Field type="password" name="password" /></div>
                            <div>
                                <Field type={"checkbox"} name={"rememberMe"} />
                                <label htmlFor={"rememberMe"}> remember me </label>
                            </div>
                            <button type="submit" >
                                Submit
                            </button>
                        </Form>
                </Formik>
            </div>
        );
    }
};

const mapStateToProps = () => {

}


export default connect(mapStateToProps, {logInTC}  )(loginForm)