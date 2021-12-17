import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Aboutme from "./components/aboutme";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

import history from './history';
import Privacy from "./components/privacy";
import Service from "./components/service";
import Opinion from "./components/opinion";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/sobre-mi' exact component={Aboutme}/>
          <Route path='/política-de-privacidad' exact component={Privacy}/>
          <Route path='/servicios' exact component={Service}/>
          <Route path='/opiniones' exact component={Opinion}/>
        </Switch>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
