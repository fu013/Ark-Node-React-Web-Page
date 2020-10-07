import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Switch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./index_components/Home";
import RegisterForm from "./auth_components/RegisterForm";
import LoginForm from "./auth_components/LoginForm";
import NotFound from "./index_components/NotFound";
import MypageForm from "./auth_components/MypageForm";
import Community from "./community_components/Community";
import BoardWriteForm from "./community_components/BoardWriteForm";
import BoardDetail from "./community_components/BoardDetail";
import JoinRoom from "./chat_components/JoinRoom/JoinRoom";
import Chat from "./chat_components/Chat/Chat";
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
        <Route path="/ChatRoom/Chat" component={Chat}/>
        <Route path="/ChatRoom" component={JoinRoom}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </div>
  </HashRouter>,
  document.querySelector("#container")
);
