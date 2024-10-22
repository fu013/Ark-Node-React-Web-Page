import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { loadReCaptcha, ReCaptcha } from "react-recaptcha-v3";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
import styled from 'styled-components';
import Header from "../index_components/Header";
import Footer from "../index_components/Footer";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class LoginForm extends Component {
  componentDidMount() {
    loadReCaptcha("6LfGieAUAAAAAJSOoqXS5VQdT_e5AH8u0n2e1PDb");
  }

  verifyCallback = recaptchaToken => {
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken, "<= your recaptcha token");
  };

  login = () => {
    const loginEmail = this.loginEmail.value;
    const loginPw = this.loginPw.value;

    if (loginEmail === "" || loginEmail === undefined) {
      alert("이메일 주소를 입력해주세요.");
      this.loginEmail.focus();
      return;
    } else if (loginPw === "" || loginPw === undefined) {
      alert("비밀번호를 입력해주세요.");
      this.loginPw.focus();
      return;
    }

    const send_param = {
      headers,
      email: this.loginEmail.value,
      password: this.loginPw.value
    };
    axios
      .post("http://localhost:9983/member/login", send_param)
      //정상 수행
      .then(returnData => {
        if (returnData.data.message) {
          // console.log("login_id:" + returnData.data._id);
          $.cookie("login_id", returnData.data._id, { expires: 1 });
          $.cookie("login_email", returnData.data.email, { expires: 1 });
          alert(returnData.data.message);
          window.location.href = 'http://localhost:3000/#/';
        } else {
          alert(returnData.data.message);
          window.location.href = 'http://localhost:3000/#/';
        }
      })
      //에러
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const formStyle = {
      margin: "50px 50px 70px 50px"
    };
    const buttonStyle = {
      marginTop: 10,
      background: "black",
      color: "white"
    };
    const Section = styled.div `{
      margin: 50px 400px 0 400px;
      min-width: 800px;
    }`
    const Title = styled.h1 `{
      text-align: center;
    }` 

    return (
      <div>
        <Header/>
        <Section>
          <Title>LOGIN</Title>
          <Form style={formStyle}>
            <Form.Group controlId="loginForm">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                maxLength="100"
                ref={ref => (this.loginEmail = ref)}
                placeholder="Enter email"
              />
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                maxLength="20"
                ref={ref => (this.loginPw = ref)}
                placeholder="Password"
              />
              <ReCaptcha
                sitekey="6LfGieAUAAAAAJSOoqXS5VQdT_e5AH8u0n2e1PDb"
                action="login"
                verifyCallback={this.verifyCallback}
              />
              <Button
                style={buttonStyle}
                onClick={this.login}
                variant="primary"
                type="button"
                block
              >
                로그인
              </Button>
            </Form.Group>
          </Form>
        </Section>
        <Footer/>
      </div>
    );
  }
}

export default LoginForm;
