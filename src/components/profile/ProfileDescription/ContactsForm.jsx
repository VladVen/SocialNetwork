import { Field, Form, Formik} from "formik";
import React from "react";
import style from './contactsForm.module.css'


class ContactsForm extends React.Component {
    render() {
        return (
            <div>
                <Formik
                    initialValues={{
                        aboutMe: this.props.profileData.aboutMe || '',
                        contacts: {
                            facebook: this.props.profileData.contacts.facebook || '',
                            github: this.props.profileData.contacts.github || '',
                            instagram: this.props.profileData.contacts.instagram || '',
                            twitter: this.props.profileData.contacts.twitter || '',
                            youtube: this.props.profileData.contacts.youtube || '',
                            website: this.props.profileData.contacts.website || ''
                        },
                        fullName: this.props.profileData.fullName || '',
                        lookingForAJob: this.props.profileData.lookingForAJob,
                        lookingForAJobDescription: this.props.profileData.lookingForAJobDescription || '',
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        let promise = this.props.updateProfile(values)
                        promise.then(setSubmitting(false),
                        !this.props.error && this.props.onclose())

                    }}>
                    {({isSubmitting}) => (
                        <Form className={style.contactsForm}>
                            <div>
                                <b>Facebook :</b><Field type={'input'} name={'contacts.facebook'}/>
                            </div>

                            <div>
                                <b>Github :</b><Field type={'input'} name={'contacts.github'}/>
                            </div>
                            <div>
                                <b>Instagram :</b><Field type={'input'} name={'contacts.instagram'}/>
                            </div>
                            <div>
                                <b>Twitter :</b><Field type={'input'} name={'contacts.twitter'}/>
                            </div>
                            <div>
                                <b>Youtube :</b><Field type={'input'} name={'contacts.youtube'}/>
                            </div>
                            <div>
                                <b>Website :</b><Field type={'input'} name={'contacts.website'}/>
                            </div>
                            <div className={style.error}>
                                {
                                    this.props.error && this.props.errorMessage
                                }
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
}

export default ContactsForm