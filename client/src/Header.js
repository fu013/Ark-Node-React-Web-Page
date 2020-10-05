import React, { Component } from "react";
import { Navbar, Button, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    const Item = styled.h3`
      height: 600px;
      background: lightgray;
      position: relative;
      background-image: url('./img/1.jpg');
      background-repeat: no-repeat;
      background-size: 100% 100%;
    `
    const ItemSecond = {
      backgroundImage: "url('./img/2.jpg')"
    };
    const ItemThird = {
      backgroundImage: "url('./img/3.jpg')"
    };
    const last = {
      margin: "0px 0px 0px 10px"
    };
    // 슬릭 슬라이더 세팅
    const settings = {
      dots: true, // 캐러셀이미지가 몇번째인지 알려주는 점을 보여줄지 정한다.
      infinite: true, // loop를 만들지(마지막 이미지-처음 이미지-중간 이미지들-마지막 이미지)
      speed: 500, // 애미메이션의 속도, 단위는 milliseconds
      slidesToShow: 1, // 한번에 몇개의 슬라이드를 보여줄 지
      slidesToScroll: 1 // 한번 스크롤시 몇장의 슬라이드를 넘길지
    };

    return (
      <div>
        <Navbar style={NavbarStyle} bg="white">
          <Navbar.Brand href="/" style={titleStyle}>Scarlet WEB Server</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse style={LogWrapStyle}>
            {/* 로그스타일 */}

            <NavLink to="/boardWrite">
              <Button style={ONlog} variant="primary">
                글쓰기
              </Button>
            </NavLink>

            <NavLink to="/Login">
              <Button style={OFFlog} variant="primary">
                로그인
              </Button>
            </NavLink>

            <NavLink to="/Register">
              <Button style={OFFlog} variant="primary">
                회원가입
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
        <Slider {...settings}>
          <div>
            <Item>{/* Slider Img 1 */}</Item>
          </div>
          <div>
            <Item style={ItemSecond}>{/* Slider Img 2 */}</Item>
          </div>
          <div>
            <Item style={ItemThird}>{/* Slider Img 3 */}</Item>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Header;
