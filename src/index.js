import ReactDOM from "react-dom";
import React from "react";
import store from "./Redux/reduxStore";
import './index.css';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

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






