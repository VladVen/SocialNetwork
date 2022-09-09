import {Field, Form, Formik} from "formik";
import React from "react";
import style from './contactsForm.module.css'
import {UpdateProfileDataType} from "../../../types/types";
import {Button} from "antd";

type Props = {
    profileData: UpdateProfileDataType
    updateProfile: (vales: UpdateProfileDataType) => void
    errorMessage: string | null
    onclose: () => void
}


class ContactsForm extends React.Component<Props> {

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
                            website: this.props.profileData.contacts.website || '',
                            mainLink: this.props.profileData.contacts.mainLink || '',
                            vk: this.props.profileData.contacts.vk || '',

                        },
                        fullName: this.props.profileData.fullName || '',
                        lookingForAJob: this.props.profileData.lookingForAJob,
                        lookingForAJobDescription: this.props.profileData.lookingForAJobDescription || '',
                    }}
                    onSubmit={async (values, {setSubmitting}) => {
                        await this.props.updateProfile(values)
                        setSubmitting(false)
                        !this.props.errorMessage && this.props.onclose()
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
                                    this.props.errorMessage && <div>
                                        {this.props.errorMessage}
                                    </div>

                                }
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
}

export default ContactsForm