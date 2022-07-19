import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import profilePageReducer from "./reducers/profilePageReducer";
import dialoguesPageReducer from "./reducers/dialoguesPageReducer";
import userPageReducer from "./reducers/userPageReducer";
import authReducer from "./reducers/authReducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./reducers/appReducer";

let reducersPack = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: dialoguesPageReducer,
    usersPage: userPageReducer,
    auth: authReducer,
    app: appReducer

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducersPack, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export default store