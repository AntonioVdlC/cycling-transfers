import React from "react"
import ReactDOM from "react-dom"

import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./reducers"

import { Router, Route, browserHistory } from "react-router"

import App from "./components/App"

let store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/(:selectedTeam)" component={App} />
        </Router>
    </Provider>,
    document.getElementById("root")
)
