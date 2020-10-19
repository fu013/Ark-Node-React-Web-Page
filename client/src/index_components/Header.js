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
      margin: "0",
    };
    const ONlog = {
      display: this.state.logoutDisplay,
      margin: "15px 5px 0px 10px",
      background: "none",
      color: "black",
      fontWeight: "400",
      border: "1px solid black"
    };
    const OFFlog = {
      display: this.state.loginDisplay,
      margin: "15px 5px 0px 10px",
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
      height: "60px",
      lineHeight: "42.5px",
      fontSize: "30px",
      top: "0",
      borderBottom: "1px solid black"
    };

    /* Styled Components */
    const Menubutton = styled.button`
      margin: 0px 30px 0px 10px;
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


    // header
    const NavWrapper = styled.div`{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
      }
    `
    const MenuWrapper = {
      margin: "40px",
      borderTop: "1px solid black",
    };

    const LogWrapStyle = {
      position: "absolute",
      right: "5px",
      bottom: "10px"
    };
    

    const last = {
      margin: "0px 0px 0px 10px"
    };
    const divStyle = {
      display: "block",
      minWidth: "1200px"
    };
    const charPoses = {
      exit: { opacity: 0, y: 20 },
      enter: {
        opacity: 1,
        y: 0,
        delay: ({ charIndex }) => charIndex * 30
      }
    };

    const LogoDiv = styled.div`{
        border-bottom: 1px solid black;
        height: 300px;
        margin-top: 20px;
        z-index: 9999;
        display: block;

      }
    `
    const MenuDiv = {

    }
    const ToMenuCenter = {
      justifyContent: "center"
    }
    return (
      <div style={divStyle}>
        <Navbar style={NavbarStyle} bg="white">
          <Navbar.Brand href="/" style={titleStyle}>
            <div style={LogWrapStyle}>
                <Navbar.Collapse>
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
                      PROFILE
                    </Button>
                  </NavLink>

                  <Button style={ONlog} onClick={this.logout} variant="primary">
                    LOGOUT
                  </Button>
                </Navbar.Collapse>
              </div>
            </Navbar.Brand>
          <Navbar.Toggle />
            <NavWrapper>
              <div style={MenuWrapper}>
              <LogoDiv>
              </LogoDiv>
                <Navbar.Collapse style={ToMenuCenter}>
                  {/* MENU */}
                  <NavLink to="/best">
                    <Menubutton className="hvr-float">
                      BEST
                    </Menubutton>
                  </NavLink>
                  <NavLink to="/shop">
                    <Menubutton className="hvr-float">
                      SHOP 
                    </Menubutton>
                  </NavLink>
                  <NavLink to="/support">
                    <Menubutton className="hvr-float">
                      EVENT
                    </Menubutton>
                  </NavLink>
                  <NavLink to="/community">
                    <Menubutton className="hvr-float">
                      SALE
                    </Menubutton>
                  </NavLink>
                  <NavLink to="/ChatRoom">
                    <Menubutton className="hvr-float">
                      LIVECHAT
                    </Menubutton>
                  </NavLink>
                  <NavLink to="/store">
                    <Menubutton style={last} className="hvr-float">
                      FAQ
                    </Menubutton>
                  </NavLink>
                </Navbar.Collapse>
              </div>
            </NavWrapper>
        </Navbar>
      </div>
    );
  }
}

export default Header;
