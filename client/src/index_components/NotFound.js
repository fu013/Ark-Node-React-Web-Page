import React from 'react';
import "./css/NotFound.css";
import { NavLink } from "react-router-dom";

export default () => (
  <div className="not-found">
    <h1>404 NOT FOUND!</h1>
    <p>페이지를 찾을 수 없습니다. 주소를 재확인 하세요.</p>
    <NavLink to="/">
      홈페이지로 돌아가기
    </NavLink>
  </div>
);
