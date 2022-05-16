import {combineReducers, createStore} from "redux";
import profilePageReducer from "./reducers/profilePageReducer";
import dialoguesPageReducer from "./reducers/dialoguesPageReducer";

let reducersPack = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: dialoguesPageReducer

})

let store = createStore(reducersPack)

export default store
