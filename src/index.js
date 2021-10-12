import ReactDOM from "react-dom";
import React from "react";
import store from "./Redux/state";
import './index.css';
import App from "./App";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
                updateNewMessageText={store.updateNewMessageText.bind(store)}
                sendNewMessage={store.sendNewMessage.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);






