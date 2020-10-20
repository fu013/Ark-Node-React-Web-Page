import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
import Header from "../index_components/Header";
import Footer from "../index_components/Footer";
import styled from 'styled-components';
axios.defaults.withCredentials = true;
// const headers = { withCredentials: true };

const MypageForm = () => {
  const marginBottom = {
    marginBottom : 5,
    background: "black",
    color: "white"
  };
  const buttonStyle = {
    background: "black",
    color: "white"
  };
  const Section = styled.div `{
    margin: 40px 200px 50px 200px;
    min-width: 1400px;
  }`
  const H1 = styled.h1 `{
    text-align: center;
  }`
  return (
    <>
      <div>
        <Header/>
          <Section>
            <H1>Edit Profile</H1>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>email</Form.Label>
              <Form.Control type="email" disabled value={$.cookie("login_email")}/>
              <Form.Label>name</Form.Label>
              <Form.Control type="text" placeholder="Enter email" />
              <Form.Label>password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
              <Form.Label>new password</Form.Label>
              <Form.Control type="password" placeholder="Enter New Password" />
              <Form.Label>new password check</Form.Label>
              <Form.Control type="password" placeholder="Enter New Password Check" />
            </Form.Group>
            <Button variant="primary"  block style={marginBottom}>
            회원정보 수정
            </Button>
            <Button variant="primary" block style={buttonStyle}>
            회원 탈퇴
            </Button>
          </Section>
        <Footer/>
      </div>
    </>
  );
};

export default MypageForm;