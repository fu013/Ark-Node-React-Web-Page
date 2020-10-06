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
        logoutDisplay: "block"
      });
    } else {
      this.setState({
        logoutDisplay: "none"
      });
    }

    if (!$.cookie("login_id")) {
      this.setState({
        loginDisplay: "block"
      });
    } else {
      this.setState({
        loginDisplay: "none"
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
  
  /*minWidth: "800px", Tablet-PC Reactive Web*/
  render() {
    /* React-CSS-Style */ 
    const NavbarStyle = {
      position: "relative",
      padding: "0",
      margin: "0"
    };
    const LogWrapStyle = {
      position: "absolute",
      top: "45px",
      right: "15px"
    };
    const ONlog = {
      display: this.state.logoutDisplay,
      margin: "0px 5px 0px 10px",
      background: "none"
    };
    const OFFlog = {
      display: this.state.loginDisplay,
      margin: "0px 5px 0px 10px",
      background: "none"
    }
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
      marginTop: "100px",
      justifyContent: "center",
      alignItems: "center",
      borderBottom: "1px solid black"
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

            <NavLink to="/LoginForm">
              <Button style={OFFlog} variant="primary">
                로그인
              </Button>
            </NavLink>

            <NavLink to="/RegisterForm">
              <Button style={OFFlog} variant="primary">
                회원가입
              </Button>
            </NavLink>

            <NavLink to="/MypageForm">
              <Button style={ONlog} variant="primary">
                회원정보
              </Button>
            </NavLink>

            <Button style={ONlog} onClick={this.logout} variant="primary">
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
            <NavLink to="/notice">
              <Menubutton variant="primary" onMouseOver={this.toggleHover} onMouseOut={this.toggleHover}>
                Notice
              </Menubutton>
            </NavLink>
            <NavLink to="/servers">
              <Menubutton variant="primary">
                Servers
              </Menubutton>
            </NavLink>
            <NavLink to="/support">
              <Menubutton variant="primary">
                Support
              </Menubutton>
            </NavLink>
            <NavLink to="/community">
              <Menubutton variant="primary">
                Community
              </Menubutton>
            </NavLink>
            <NavLink to="/liveChat">
              <Menubutton variant="primary">
                LiveChat
              </Menubutton>
            </NavLink>
            <NavLink to="/store">
              <Menubutton style={last} variant="primary">
                Store
              </Menubutton>
            </NavLink>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
