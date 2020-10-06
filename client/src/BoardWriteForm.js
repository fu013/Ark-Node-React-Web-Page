import React, { Component } from "react";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button, Form} from "react-bootstrap";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
import Header from "./Header";
import Footer from "./Footer";
import styled from 'styled-components';
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class BoardWriteForm extends Component {
  state = {
    data: ""
  };

  componentDidMount() {
    if (this.props.location.query !== undefined) {
      this.boardTitle.value = this.props.location.query.title;
    }
  }

  componentWillMount(){
    if (this.props.location.query !== undefined) {
      this.setState({
        data: this.props.location.query.content
      });
    }
  }

  writeBoard = () => {
    let url;
    let send_param;

    const boardTitle = this.boardTitle.value;
    const boardContent = this.state.data;

    if (boardTitle === undefined || boardTitle === "") {
      alert("글 제목을 입력 해주세요.");
      boardTitle.focus();
    } else if (boardContent === undefined || boardContent === "") {
      alert("글 내용을 입력 해주세요.");
      boardContent.focus();
    }
    
    if (this.props.location.query !== undefined) {
      url = "http://localhost:9983/board/update";
      send_param = {
        headers,
        "_id" : this.props.location.query._id,
        "title": boardTitle,
        "content": boardContent
      };
    } else {
      url = "http://localhost:9983/board/write";
      send_param = {
        headers,
        "_id" : $.cookie("login_id"),
        "title": boardTitle,
        "content": boardContent
      };

    }

    axios
      .post(url, send_param)
      //정상 수행
      .then(returnData => {
        if (returnData.data.message) {
          alert(returnData.data.message);
          window.location.href = "/";
        } else {
          alert("글쓰기 실패");
        }
      })
      //에러
      .catch(err => {
        console.log(err);
      });
  };

  onEditorChange = ( event, editor ) => {
    this.setState({
      data: editor.getData()
    });
  }

  render() {
    const titleStyle = {
      marginBottom: "5"
    };
    const buttonStyle = {
      marginTop: "5",
      backgroundColor: "cornflowerblue"
    };
    const Section = styled.div `{
      margin: 50px;
    }`

    return (
      <div className="App">
        <Header/>
        <Section>
          <h2>글쓰기</h2>
          <Form.Control
            type="text"
            style={titleStyle}
            placeholder="글 제목"
            ref={ref => (this.boardTitle = ref)}
          />
          <CKEditor
            editor={ ClassicEditor }
            data={this.state.data}
            onChange={this.onEditorChange}
          />
          <Button style={buttonStyle} onClick={this.writeBoard} block>
            저장하기
          </Button>
        </Section>
        <Footer/>
      </div>
    );
  }
}

export default BoardWriteForm;
