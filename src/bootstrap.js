import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import "./style/main.scss";

import history from './history';

import Layout from "./components/layout";

import Home from "./components/home";
import Aboutme from "./components/aboutme";
import Privacy from "./components/privacy";
import Service from "./components/service";
import Opinion from "./components/opinion";
import Contact from "./components/contact";
import Blog from "./components/blog";
import LogIn from "./components/login";
import BlogInfo from "./components/bloginfo";


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/sobre-mi' exact component={Aboutme}/>
            <Route path='/política-de-privacidad' exact component={Privacy}/>
            <Route path='/servicios' exact component={Service}/>
            <Route path='/opiniones' exact component={Opinion}/>
            <Route path='/contacto' exact component={Contact}/>
            <Route path='/blog' exact component={Blog}/>
            <Route path='/login' exact component={LogIn }/>
            <Route path="/blog/:slug" component={BlogInfo}/>
          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
