import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Header from "../index_components/Header";
import Footer from "../index_components/Footer";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class BoardDetail extends Component {
  state = {
    board: []
  };

  // DOM이 Rendering 되기전에 실행되는 Method
  componentDidMount() {
    if (this.props.location.query !== undefined) {
      this.getDetail();
    } else {
      window.location.href = "/";
    }
  }

  deleteBoard = _id => {
    const send_param = {
      headers,
      _id
    };
    if (window.confirm("정말 삭제하시겠습니까?")) {
      axios
        .post("http://localhost:9983/board/delete", send_param)
        //정상 수행
        .then(returnData => {
          alert("게시글이 삭제 되었습니다.");
          window.location.href = "/#/community";
        })
        //에러
        .catch(err => {
          console.log(err);
          alert("글 삭제 실패");
        });
    }
  };

  getDetail = () => {
    const send_param = {
      headers,
      _id: this.props.location.query._id
    };
    const deleteButton = {
      marginBottom: "5px",
      background: "white",
      color: "black",
      border: "1px solid black"
    };
    const marginBottom = {
      marginBottom: "5px",
      background: "white",
      color: "black",
      border: "1px solid black"
    };
    const divStyle = {
      boxSizing: "border-box",
      padding: "100px 200px",
      minWidth: "1400px",
    };
    const tdStyle = {
      height: "500px"
    };
    axios // 비동기식으로 요청 보내는 엑시오스
      .post("http://localhost:9983/board/detail", send_param)
      //정상 수행
      .then(returnData => {
        if (returnData.data.board[0]) {
          const board = (
            <div>
              <Header/>
              <div style={divStyle}>
                <Table striped bordered hover variant="dark" size="m" responsive="md">
                  <thead>
                    <tr>
                      <th>{returnData.data.board[0].title}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        dangerouslySetInnerHTML={{
                          __html: returnData.data.board[0].content
                        }} style={tdStyle}
                      ></td>
                    </tr>
                  </tbody>
                </Table>
                <div>
                  <NavLink
                    to={{
                      pathname: "/boardWrite",
                      query: {
                        title: returnData.data.board[0].title,
                        content: returnData.data.board[0].content,
                        _id: this.props.location.query._id
                      }
                    }}
                  >
                    <Button block style={marginBottom}>
                      글 수정
                    </Button>
                  </NavLink>
                  <Button
                    block
                    onClick={this.deleteBoard.bind(
                      null,
                      this.props.location.query._id
                    )} style={deleteButton}
                  >
                    글 삭제
                  </Button>
                </div>
              </div>
              <Footer/>
            </div>
          );
          this.setState({
            board: board
          });
        } else {
          alert("글 상세 조회 실패");
        }
      })
      //에러
      .catch(err => {
        console.log(err);
      });
  };

  //onClick={this.getBoard.bind(null,this.props._id)}
  render() {
    return <div>{this.state.board}</div>;
  }
}

export default BoardDetail;
