// 리엑트안의 컴포넌트를 { Component } 라는 이름으로 쓰겠다. 비구조화 할당
import React from "react";
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
/* import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer"; */
import './index.css';
import App from './App';

ReactDOM.render(
  <HashRouter>
{/*     <Header/>
    <Body/>
    <Footer/> */}
  </HashRouter>,
  document.getElementById('root')
);

// 4강 17분까지 봄 <햄릿슈>