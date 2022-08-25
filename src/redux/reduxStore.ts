import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import profilePageReducer from "./reducers/profilePageReducer";
import dialoguesPageReducer from "./reducers/dialoguesPageReducer";
import userPageReducer from "./reducers/userPageReducer";
import authReducer from "./reducers/authReducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./reducers/appReducer";

const reducersPack = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: dialoguesPageReducer,
    usersPage: userPageReducer,
    auth: authReducer,
    app: appReducer

})

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionType<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

type reducersPackType = typeof reducersPack
export type AppStateType = ReturnType<reducersPackType>

// to provide Redux DevTools extension in Chrome
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducersPack, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

// @ts-ignore
window.store = store

export default store