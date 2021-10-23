import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;