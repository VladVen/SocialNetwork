import MyContext from "../../myContext";
import Dialogues from "./dialogues";


const DialoguesContainer = () => {


    return (
        <MyContext.Consumer >
            {
                (store) => {
                    let state = store.getState()

                    return (
                        <div>
                            <Dialogues dialoguesData={state.messagesPage.dialoguesData}
                                       messagesData={state.messagesPage.messagesData} />
                        </div>
                    )
                }
            }
        </MyContext.Consumer>
    )
}

export default DialoguesContainer