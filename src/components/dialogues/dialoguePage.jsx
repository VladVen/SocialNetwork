import React from "react";
import style from "./dialogues.module.css";
import DialogueMembers from "./DialogueMembers";
import Message from "./Message";
import { Formik, Form, Field } from 'formik';
import Textarea from "../common/customComponent/textarea";



class dialoguePage extends React.Component {



    render() {
        return (
            <div className={style.dialogues}>
                            <div className={style.dialoguesNames}> {
                                this.props.dialoguesData.map(dialogues => <DialogueMembers key={dialogues.id}
                                                                                           name={dialogues.name}
                                                                                           id={dialogues.id}/>)
                            }
                            </div>
                            <div className={style.messages}> {
                                this.props.messagesData.map(messages => <Message key={messages.id}
                                                                                 message={messages.message}
                                                                                 id={messages.id}/>)
                            }
                                <div>
                   <AddMessageForm addMessage={this.props.addMessage}/>
                                </div>
                            </div>
                        </div>

        )
    }
}

const AddMessageForm = (props) => {

    return (
        <Formik
            initialValues={{
                newMessageText: "",
            }}
            onSubmit={(values, { resetForm }) => {
                props.addMessage(values.newMessageText);
                resetForm({ values: "" });
            }}>
                <Form>
                    <div>
                        <Field
                            name={"newMessageText"}
                            as={Textarea}
                            placeholder={"enter text"}
                        />
                    </div>
                    <button type={"submit"}>Send</button>
                </Form>
        </Formik>
    );
};

export default dialoguePage