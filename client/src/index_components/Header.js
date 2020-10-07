import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
import styled from 'styled-components';
import SplitText from 'react-pose-text';
import "./css/hover.css";

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
      background: "none",
      color: "black",
      fontWeight: "400",
      border: "1px solid black"
    };
    const OFFlog = {
      display: this.state.loginDisplay,
      margin: "0px 5px 0px 10px",
      background: "none",
      color: "black",
      fontWeight: "400",
      border: "1px solid black"
    }
    const titleStyle = {
      display: "block",
      width: "100%",
      textAlign: "center",
      position: "absolute",
      background: "white",
      color: "black",
      height: "100px",
      lineHeight: "85px",
      fontSize: "40px",
      top: "0",
      borderBottom: "1px solid black"
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
        color: cornflowerblue;
        cursor: pointer;
      }
      &:focus {
        outline: none;
      }
    `
    const last = {
      margin: "0px 0px 0px 10px"
    };
    const divStyle = {
      minWidth: "1600px"
    };
    const charPoses = {
      exit: { opacity: 0, y: 20 },
      enter: {
        opacity: 1,
        y: 0,
        delay: ({ charIndex }) => charIndex * 30
      }
    };

    return (
      <div style={divStyle}>
        <Navbar style={NavbarStyle} bg="white">
          <Navbar.Brand href="/" style={titleStyle}>
            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                Scarlet WEB Server
            </SplitText>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse style={LogWrapStyle}>
            {/* 로그스타일 */}

            <NavLink to="/LoginForm">
              <Button style={OFFlog} variant="primary">
                LogIn
              </Button>
            </NavLink>

            <NavLink to="/RegisterForm">
              <Button style={OFFlog} variant="primary">
                GetAccount
              </Button>
            </NavLink>

            <NavLink to="/MypageForm">
              <Button style={ONlog} variant="primary">
                Profile
              </Button>
            </NavLink>

            <Button style={ONlog} onClick={this.logout} variant="primary">
              LogOut
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
              <Menubutton className="hvr-float">
                Notice
              </Menubutton>
            </NavLink>
            <NavLink to="/servers">
              <Menubutton className="hvr-float">
                Servers
              </Menubutton>
            </NavLink>
            <NavLink to="/support">
              <Menubutton className="hvr-float">
                Support
              </Menubutton>
            </NavLink>
            <NavLink to="/community">
              <Menubutton className="hvr-float">
                Community
              </Menubutton>
            </NavLink>
            <NavLink to="/ChatRoom">
              <Menubutton className="hvr-float">
                LiveChat
              </Menubutton>
            </NavLink>
            <NavLink to="/store">
              <Menubutton style={last} className="hvr-float">
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
