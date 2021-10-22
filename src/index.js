import ReactDOM from "react-dom";
import React from "react";
import store from "./Redux/reduxStore";
import './index.css';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App
                        store={store}
                    />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree(store.getState());
});






