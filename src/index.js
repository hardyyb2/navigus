import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from 'react-redux'
import configureStore from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);

serviceWorker.unregister();