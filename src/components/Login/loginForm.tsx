import React from "react";
import {Navigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from 'formik';
import emailValidatorSchema from "../../formValidations/loginValidator";
import {useDispatch, useSelector} from "react-redux";
import {logInTC} from "../../redux/reducers/authReducer";
import style from "./login.module.css";
import {getErrorMessage, getIsAuth} from "../../redux/selectors/authSelector";
import {AnyAction} from "redux";


const LoginForm = () => {

    const captcha = useSelector(getErrorMessage)
    const errorMessage = useSelector(getErrorMessage)
    const isAuth = useSelector(getIsAuth)

    const dispatch = useDispatch()

    if (isAuth) {
      return <Navigate to={'/profile'} />
    }


    const login = async (email: string, password: string, rememberMe: boolean, captcha: string | null) => {
        await dispatch(logInTC(email, password, rememberMe, captcha) as unknown as AnyAction)
    }

    return (
        <div className={style.login}>
            <h1>Login Form</h1>
            <Formik
                initialValues={{email: '', password: '', rememberMe: false, captcha: ''}}
                validationSchema={emailValidatorSchema}
                onSubmit={async (values, {setSubmitting}) => {
                    await login(values.email, values.password, values.rememberMe, values.captcha)
                    setSubmitting(false);
                }}>
                {({isSubmitting}) => (
                    <Form>
                        <Field type="email" name="email"/>
                        <ErrorMessage name="email" component="span"/>
                        <div><Field type="password" name="password"/></div>
                        <div>
                            <Field type={"checkbox"} name={"rememberMe"}/>
                            <label htmlFor={"rememberMe"}> remember me </label>
                        </div>
                        <div className={style.error}>
                            {
                                errorMessage && <div>{errorMessage}</div>
                            }
                        </div>
                        <div>
                            {
                                captcha && <div>
                                    <img src={captcha}/>
                                    <div>
                                        <Field as={'input'} name="captcha"/>
                                    </div>
                                </div>
                            }
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>

                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default LoginForm