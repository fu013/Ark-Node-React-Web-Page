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
      outline: "0",
      border: "0",
      background: "none",
      color: "black",
      fontWeight: "400",
      textDecoration: "none"
    };
    const OFFlog = {
      display: this.state.loginDisplay,
      margin: "15px 5px 0px 10px",
      outline: "0",
      border: "0",
      background: "none",
      color: "black",
      fontWeight: "400",
      textDecoration: "none"
    }
    const titleStyle = {
      display: "block",
      width: "100%",
      textAlign: "center",
      position: "absolute",
      background: "#f2f2f2",
      color: "black",
      height: "50px",
      lineHeight: "42.5px",
      fontSize: "30px",
      top: "0",
    };

    /* Styled Components */
    const Menubutton = styled.button`
      margin: 0px 0px 0px 10px;
      background: none;
      outline: 0;
      border: 0;
      color: black;
      padding: 20px;
      line-height: 20px;
      font-size: 1.2em;
      vertical-align: top;
      &:hover {
        color: cornflowerblue;
        cursor: pointer;
      }
      &:focus {
        outline: none;
      }
      font-weight: 300;
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
      width: "100%",
      borderTop: "1px solid black"
    };

    const LogWrapStyle = {
      position: "absolute",
      right: "40px",
      bottom: "6px"
    };
    

    const last = {
      margin: "0px 0px 0px 10px"
    };
    const divStyle = {
      display: "block",
      minWidth: "1400px"
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
        text-align: center;
        height: 200px;
        line-height: 200px;
        margin-top: 60px;
        z-index: 9999;
        display: block;
      }
    `
    const LogoIMG = styled.img`{
      width: 400px;
      height: 100px;
    }`
    const ToMenuCenter = {
      justifyContent: "center"
    }
    return (
      <div style={divStyle}>
        <Navbar style={NavbarStyle} bg="white">
          <Navbar.Brand style={titleStyle}>
            <div style={LogWrapStyle}>
                <Navbar.Collapse>
                  {/* 로그스타일 */}

                  <NavLink to="/LoginForm">
                    <Button style={OFFlog} variant="primary">
                      LOGIN
                    </Button>
                  </NavLink>

                  <NavLink to="/RegisterForm">
                    <Button style={OFFlog} variant="primary">
                      GET ACCOUNT
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
                <NavLink to="/">
                  <LogoIMG src="img/dongrimong.png" alt="logo"/>
                </NavLink>
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
                  <NavLink to="/sale">
                    <Menubutton className="hvr-float">
                      SALE
                    </Menubutton>
                  </NavLink>
                  <NavLink to="/ChatRoom">
                    <Menubutton className="hvr-float">
                      LIVECHAT
                    </Menubutton>
                  </NavLink>
                  <NavLink to="/community">
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
