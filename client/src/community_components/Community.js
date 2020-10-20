import React, { Component } from "react";
import BoardForm from "./BoardForm";
import { Navbar, Button } from "react-bootstrap";
import { NavLink, Route } from "react-router-dom";
import Header from "../index_components/Header";
import Footer from "../index_components/Footer";
import styled from 'styled-components';
import $ from "jquery";
import {} from "jquery.cookie";

class Community extends Component {
  render() {
    let resultForm;
    function getResultForm() {
      // console.log($.cookie("login_id"));
      if ($.cookie("login_id")) {
        resultForm = <Route exact path="/Community" component={BoardForm}></Route>;
        return resultForm;
      } else {
        alert("로그인이 필요한 서비스입니다.");
        window.location.href = 'http://localhost:3000/#/LoginForm';
      }
    }
    getResultForm();

    const NavbarStyle = {
      position: "relative",
      padding: "0",
      margin: "0",
      width: "100%",
      minWidth: "1400px"
    };
    const NewWriteButton = {
      position: "absolute",
      background: "none",
      border: "1px solid black",
      color: "black",
      right: "400px"
    };
    const H1 = styled.h1 `{
      text-align: center;
      margin-top: 40px;
      min-width: 1400px;
      font-weight: 333;
    }`

    return (
      <div>
        <Header/>
        <H1>Community</H1>
        <Navbar bg="white" style={NavbarStyle}>
          <Navbar.Toggle/>
          <Navbar.Collapse>
          <NavLink to="/boardWrite">
            <Button variant="primary" style={NewWriteButton}>
              새 글쓰기
            </Button>
          </NavLink>
          </Navbar.Collapse>
        </Navbar>
        {resultForm}
        <Footer/>
      </div>
    );
  }
}

export default Community;
