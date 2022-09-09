import {Field, Form, Formik} from "formik";
import React from "react";
import style from './contactsForm.module.css'
import {UpdateProfileDataType} from "../../../types/types";
import {Button} from "antd";


type Props = {
    profileData: UpdateProfileDataType
    updateProfile: (vales: UpdateProfileDataType) => void
    onclose: () => void
}


const ContactsForm: React.FC<Props> = ({profileData, updateProfile, onclose}) => {
    return (
        <div>
            <Formik
                initialValues={{
                    aboutMe: profileData.aboutMe || '',
                    contacts: {
                        facebook: profileData.contacts.facebook || '',
                        github: profileData.contacts.github || '',
                        instagram: profileData.contacts.instagram || '',
                        twitter: profileData.contacts.twitter || '',
                        youtube: profileData.contacts.youtube || '',
                        website: profileData.contacts.website || '',
                        mainLink: profileData.contacts.mainLink || '',
                        vk: profileData.contacts.vk || ''
                    },
                    fullName: profileData.fullName || '',
                    lookingForAJob: profileData.lookingForAJob,
                    lookingForAJobDescription: profileData.lookingForAJobDescription || '',
                }}
                onSubmit={async (values, {setSubmitting}) => {
                    await updateProfile(values)
                    setSubmitting(false);
                    onclose()
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

                        <Button name="submit" disabled={isSubmitting} type={"primary"}>
                            Submit
                        </Button>

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ContactsForm