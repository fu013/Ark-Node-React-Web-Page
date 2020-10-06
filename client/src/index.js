import React, { Component } from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import LoginForm from "./LoginForm";

ReactDOM.render(
  <HashRouter>
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/LoginForm" component={LoginForm} />
      </Switch>
    </div>
  </HashRouter>,
  document.querySelector("#container")
);
