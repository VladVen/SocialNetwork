import React from "react";
import style from './searchForm.module.css'
import {Field, Form, Formik, FormikValues} from "formik";
import {FilterType} from "../../redux/reducers/userPageReducer";
import {Button} from "antd";
import {SearchOutlined} from '@ant-design/icons';


type Props = {
    onFilter: (filter: FilterType) => void,
    pageSize: number
    filter: FilterType
}


const UsersSearchForm: React.FC<Props> = React.memo(({onFilter, filter}) => {


    const onFind = (values: FormikValues) => {
        const formData: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }

        onFilter(formData)
    }
    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{
                    term: filter.term,
                    friend: filter.friend,
                }}
                onSubmit={async (values, {setSubmitting}) => {
                    debugger
                    await onFind(values)
                    setSubmitting(false)
                }}>
                {({isSubmitting}) => {
                    return <Form className={style.form}>
                        <div>
                            <Field
                                name={"term"}
                                as={'input'}
                                placeholder={"Enter name"}
                            />
                            <Field
                                name={"friend"}
                                as={'select'}>
                                <option value={'null'}>All</option>
                                <option value={'true'}>Show following</option>
                                <option value={'false'}>Show Unfollowing</option>
                            </Field>
                        </div>
                        <button name={"submit"} className={style.button} disabled={isSubmitting}>Search</button>
                    </Form>
                }}
            </Formik>
        </div>

    )
})

export default UsersSearchForm