import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./redux/store";

import Main from './pages/main/main'

import "./index.css";

ReactDOM.render(
    <Provider store={Store}>
        <Main />
    </Provider>,
    document.getElementById("root")
);
