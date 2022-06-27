import {combineReducers, legacy_createStore as createStore} from "redux";
import profilePageReducer from "./reducers/profilePageReducer";
import dialoguesPageReducer from "./reducers/dialoguesPageReducer";
import userPageReducer from "./reducers/userPageReducer";
import authReducer from "./reducers/authReducer";

let reducersPack = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: dialoguesPageReducer,
    usersPage: userPageReducer,
    auth: authReducer

})

let store = createStore(reducersPack)

window.store=store

export default store
