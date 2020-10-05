import React, { Component } from "react";
import { Navbar, Button, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
import styled from 'styled-components';
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class Header extends Component {

  state = {
    buttonDisplay: "none"
  };

  /* 쿠키가 남아있는지 여부로 판별, 로그아웃시 Log Buttons OFF, 로그인시 ON */
  componentDidMount() {
    if ($.cookie("login_id")) {
      this.setState({
        buttonDisplay: "block"
      });
    } else {
      this.setState({
        buttonDisplay: "none"
      });
    }
  }
  

  logout = () => {
    axios
      .get("http://localhost:9983/member/logout", {
        headers
      })
      .then(returnData => {
        if (returnData.data.message) {
          $.removeCookie("login_id");
          alert("로그아웃 되었습니다!");
          window.location.href = "/";
        }
      });
  };

  render() {
    /* React-CSS-Style */ 
    /* minWidth: "800px" */
    const NavbarStyle = {
      height: "300px",
      position: "relative",
      padding: "0",
      margin: "0"
    };
    const LogWrapStyle = {
      position: "absolute",
      top: "15px",
      right: "15px"
    };
    const LogButtonStyle = {
      display: this.state.buttonDisplay,
      margin: "0px 5px 0px 10px",
      backgroundColor: "cornflowerblue"
    };
    const titleStyle = {
      display: "block",
      width: "100%",
      textAlign: "center",
      position: "absolute",
      background: "black",
      color: "white",
      height: "100px",
      lineHeight: "85px",
      fontSize: "40px",
      top: "0"
    };
    const MenuWrapper = {
      justifyContent: "center",
      alignItems: "center",
      borderBottom: "1px solid black"
    };
    const MenubuttonStyle = {
      margin: "0px 100px 0px 10px",
      background: "none",
      color: "black",
      padding: "20px",
      lineHeight: "60px",
      fontSize: "1.5em",
      border: "none",
      verticalAlign: "top"
    };
    const MenubuttonLastStyle = {
      margin: "0px 0px 0px 10px",
      background: "none",
      color: "black",
      padding: "20px",
      lineHeight: "60px",
      fontSize: "1.5em",
      border: "none",
    };
    
    /* Styled Components */
    const Menubutton = styled.button`
      margin: 0px 100px 0px 10px;
      background: none;
      color: black;
      padding: 20px;
      line-height: 60px;
      font-size: 1.5em;
      border: none;
      vertical-align: top;
      &:hover {
        color: #ed1212;
        cursor: pointer;
      }
    `
    const last = {
      margin: "0px 0px 0px 10px"
    };

    return (
      <div>
        <Navbar style={NavbarStyle} bg="white">
          <Navbar.Brand href="/" style={titleStyle}>Scarlet WEB Server</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse style={LogWrapStyle}>
            {/* 로그스타일 */}
            <NavLink to="/boardWrite">
              <Button style={LogButtonStyle} variant="primary">
                글쓰기
              </Button>
            </NavLink>
            <Button style={LogButtonStyle} onClick={this.logout} variant="primary">
              로그아웃
            </Button>
          </Navbar.Collapse>
          <Navbar.Collapse style={MenuWrapper}>
            {/* <NavLink to="/mypage">
              <Button style={buttonStyle} variant="primary">
                회원정보 수정
              </Button>
            </NavLink> */}

            {/* MENU */}
            <NavLink to="/">
              <Menubutton variant="primary" onMouseOver={this.toggleHover} onMouseOut={this.toggleHover}>
                Notice
              </Menubutton>
            </NavLink>
            <NavLink to="/">
              <Menubutton variant="primary">
                Servers
              </Menubutton>
            </NavLink>
            <NavLink to="/">
              <Menubutton variant="primary">
                Support
              </Menubutton>
            </NavLink>
            <NavLink to="/">
              <Menubutton variant="primary">
                Community
              </Menubutton>
            </NavLink>
            <NavLink to="/">
              <Menubutton variant="primary">
                Community
              </Menubutton>
            </NavLink>
            <NavLink to="/">
              <Menubutton variant="primary">
                LiveChat
              </Menubutton>
            </NavLink>
            <NavLink to="/">
              <Menubutton style={last} variant="primary">
                Store
              </Menubutton>
            </NavLink>
          </Navbar.Collapse>

        </Navbar>
        <Image src="./img/main.jpg" fluid />
      </div>
    );
  }
}

export default Header;
