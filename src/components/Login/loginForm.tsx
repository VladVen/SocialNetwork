import React from "react";
import {Navigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from 'formik';
import emailValidatorSchema from "../../formValidations/loginValidator";
import {connect} from "react-redux";
import {logInTC} from "../../redux/reducers/authReducer";
import style from "./login.module.css";
import {AppStateType} from "../../redux/reduxStore";

type MapState = {
    isAuth: boolean
    errorMessage: string | null
    captcha: null | string

}
type MapDispatch = {
    logInTC: (email: string, password:string, rememberMe: boolean, captcha: null | string ) => void
}


type Props = MapState & MapDispatch

class loginForm extends React.Component<Props> {
    render() {
        if(this.props.isAuth) {
            return <Navigate to={"/profile"}/>
        }
        return (
            <div className={style.login}>
                <h1>Login Form</h1>
                <Formik
                    initialValues={{ email: '', password: '', rememberMe: false, captcha: '' }}
                    validationSchema={emailValidatorSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                        await this.props.logInTC(values.email, values.password, values.rememberMe, values.captcha)
                        setSubmitting(false);
                    }}>
                    {({ isSubmitting }) => (
                        <Form>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="span" />
                            <div><Field type="password" name="password" /></div>
                            <div>
                                <Field type={"checkbox"} name={"rememberMe"} />
                                <label htmlFor={"rememberMe"}> remember me </label>
                            </div>
                            <div className={style.error}>
                                {
                                    this.props.errorMessage &&<div>{this.props.errorMessage}</div>
                                }
                            </div>
                            <div>
                                {
                                    this.props.captcha && <div>
                                            <img src={this.props.captcha}/>
                                            <div>
                                                <Field as={'input'} name="captcha" />
                                            </div>
                                        </div>
                                }
                            </div>

                            <button type="submit"  disabled={isSubmitting}>
                                Submit
                            </button>

                        </Form>
                        )}
                </Formik>
            </div>
        );
    }
}



const mapStateToProps = (state: AppStateType): MapState => ({
    captcha: state.auth.captchaUrl,
    errorMessage: state.auth.errorMessage,
    isAuth: state.auth.isAuth,
})




export default connect<MapState, MapDispatch, unknown,  AppStateType>(mapStateToProps, {logInTC})(loginForm)