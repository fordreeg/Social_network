import ReactDOM from "react-dom";
import React from "react";
import state from "./Redux/state";
import './index.css';
import App from "./App";
import {addPost, updateNewPostText, sendNewMessage, updateNewMessageText, subscribe} from "./Redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                updateNewMessageText={updateNewMessageText}
                sendNewMessage={sendNewMessage}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);






