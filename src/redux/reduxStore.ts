import {Action, applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import profilePageReducer from "./reducers/profilePageReducer";
import dialoguesPageReducer from "./reducers/dialoguesPageReducer";
import userPageReducer from "./reducers/userPageReducer";
import authReducer from "./reducers/authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import appReducer from "./reducers/appReducer";
import {useDispatch} from "react-redux";
import chatReducer from "./reducers/chatReducer";

const reducersPack = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: dialoguesPageReducer,
    usersPage: userPageReducer,
    auth: authReducer,
    app: appReducer,
    chat: chatReducer

})

export type InferActionType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

type reducersPackType = typeof reducersPack
export type AppStateType = ReturnType<reducersPackType>

export type CommonThunkType<A extends Action, P = Promise<void>> = ThunkAction<P, AppStateType, unknown, A>


// to provide Redux DevTools extension in Chrome
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducersPack, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));


export type TypedDispatch = typeof store.dispatch;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();

export default store