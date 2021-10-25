import ReactDOM from "react-dom";
import React from "react";
import store from "./Redux/reduxStore";
import './index.css';
import App from "./App";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from "react-redux";

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Route path='/'>
                <App store={store}/>
            </Route>
        </Provider>
    </Router>,
    document.getElementById('root')
);






