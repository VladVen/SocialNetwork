import {Field, Form, Formik} from "formik";
import React from "react";
import style from './contactsForm.module.css'


const ContactsForm = (props) => {
    return (
        <div>
            <Formik
                initialValues={{
                    aboutMe: props.profileData.aboutMe || '',
                    contacts: {
                        facebook: props.profileData.contacts.facebook || '',
                        github: props.profileData.contacts.github || '',
                        instagram: props.profileData.contacts.instagram || '',
                        twitter: props.profileData.contacts.twitter || '',
                        youtube: props.profileData.contacts.youtube || '',
                        website: props.profileData.contacts.website || ''
                    },
                    fullName: props.profileData.fullName || '',
                    lookingForAJob: props.profileData.lookingForAJob,
                    lookingForAJobDescription: props.profileData.lookingForAJobDescription || '',
                }}
                onSubmit={async (values, {setSubmitting}) => {
                    await props.updateProfile(values)
                    setSubmitting(false);
                    props.onclose()
                }}>
                {({isSubmitting}) => (
                    <Form className={style.contactsForm}>
                        <div>
                            <b>Full Name :</b><Field type={'input'} name={'fullName'}/>
                        </div>
                        <div>
                            <b>About Me :</b><Field type={'input'} name={'aboutMe'}/>
                        </div>
                        <div>
                            <b>Looking For A Job :</b><Field type={'checkbox'} name={'lookingForAJob'}/>
                        </div>
                        <div>
                            <b>My skills :</b>
                            <div>(wouldn't shown if you don't looking fo a job)</div>
                            <Field type={'input'} name={'lookingForAJobDescription'}/>
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ContactsForm