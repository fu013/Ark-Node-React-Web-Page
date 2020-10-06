import React, { Component } from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import NotFound from "./NotFound";
import MypageForm from "./MypageForm";
import Community from "./Community";
import BoardWriteForm from "./BoardWriteForm";
import BoardDetail from "./BoardDetail";
ReactDOM.render(
  <HashRouter>
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/LoginForm" component={LoginForm}/>
        <Route path="/RegisterForm" component={RegisterForm}/>
        <Route path="/MypageForm" component={MypageForm}/>
        <Route path="/Community" component={Community}/>
        <Route path="/boardWrite" component={BoardWriteForm}/>
        <Route path="/board/detail" component={BoardDetail}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </div>
  </HashRouter>,
  document.querySelector("#container")
);
