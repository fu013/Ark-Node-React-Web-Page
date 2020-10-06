import React, { Component } from "react";
import BoardForm from "./BoardForm";
import { Navbar, Button, Image } from "react-bootstrap";
import { NavLink, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
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
      minWidth: "1600px"
    };
    const NavbarTitle = {
      display: "block"
    };
    const NewWriteButton = {
      position: "absolute",
      right: "200px"
    };
    const H1 = styled.h1 `{
      text-align: center;
      margin-top: 20px;
      min-width: 1600px;
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
