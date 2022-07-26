import {Field, Form, Formik} from "formik";
import React from "react";
import style from './contactsForm.module.css'


const ContactsForm = (props) => {
    return(
        <div>
            <Formik
                initialValues={{facebook: '', github: '', instagram:'',twitter: '', youtube:'' ,website: ''}}
                onSubmit={(values, {setSubmitting} ) => {
                    props.updateContacts(values)
                    setSubmitting(false);
                    props.onclose()
                }}>
                {({isSubmitting}) => (
                    <Form className={style.contactsForm}>
                       <div>
                           <b>Facebook :</b><Field type={'input'} name={'facebook'}/>
                       </div>

                       <div>
                           <b>Github :</b><Field type={'input'} name={'github'}/>
                       </div>
                       <div>
                           <b>Instagram :</b><Field type={'input'} name={'instagram'}/>
                       </div>
                       <div>
                           <b>Twitter :</b><Field type={'input'} name={'twitter'}/>
                       </div>
                       <div>
                           <b>Youtube :</b><Field type={'input'} name={'youtube'}/>
                       </div>
                       <div>
                           <b>Website :</b><Field type={'input'} name={'website'}/>
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