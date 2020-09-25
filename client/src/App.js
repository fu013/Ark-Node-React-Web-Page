import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

// Class, Component 명은 무조건 대문자로 시작하며, 문자의 첫글자는 대문자로 표기한다.

/*
  리액트는 거의 모든 표기가 camel 형식
  예를들어 button onclick="" 이라는 html 태그도 리액트에서 사용하면
  => button onClick 이런식으로 카멜 형식으로 표기함.
  또한 바닐라 자바스크립트에서 주로 사용하는 이벤트 발생시,
  기본 동작을 방지하는 return false; 를 사용할수 없고
  오로지 e.preventDefault(); 함수를 써서 방지해야함.
*/

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

/*
  1) constructor()
  : this.state를 지정하는 constructor(생성자) Method.

  2) componentWillMount()
  : Component에 의해 생성된 DOM이 삭제될때마다

  3) render()
  : DOM Object를 rendering한다.

  4) componentDidMount()
  : Component가 처음 DOM에 rendering 될 때마다

  */

  /* 

  props or state => shouldComponentUpdate()
  각각의 컴포넌트들은 shouldComponentUpdate라는 메소드를 가지고 있고 
  이것은 state가 변경되거나 부모 컴포넌트로부터 새로운 props를 전달받을 때 실행이 된다.
  이 함수를 false로 바꿔주면 컴포넌트가 re-rendering 되는 현상을 막을 수 있다.

  <shouldComponentUpdate()를 false로 Override 해주는 예제>
    shouldComponentUpdate(nextProps, nextState) {
        const vitalPropsChange = this.props.bar !== nextProps.bar;
        const vitalStateChange = this.state.foo !== nextState.foo;    
        return vitalPropsChange || vitalStateChange;
    }
*/

// 태그는 !무조건! 상위태그를 둘러줘야 한다.
class App extends Component {

  state = {
    customers: "",
    completed: 0
  }

  // App이 처음 DOM에 Rendering 될 때마다 실행되는 Method
  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi() // Promise 비동기 처리
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed : completed >= 100 ? 0 : completed + 1});
  }

  callApi = async () => { // 비동기 처리
    const response = await fetch('/api/customers'); //  서버에서 데이터를 받아오는 HTTP 통신 코드
    const body = await response.json(); // 해당 URL의 json 형식의 데이터를 읽어온다.
    return body; // body 즉, json 데이터를 return한다.
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={ classes.root }>
        <Table className={ classes.table }>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers.map ? this.state.customers.map(c => {
                return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);
              }) : 
              <TableRow>
                <TableCell colSpan="6" align="center">
                  <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
                </TableCell>
              </TableRow>
              }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

// Public Option
export default withStyles(styles)(App);
