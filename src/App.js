import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

// 카멜 형식 표기, classes의 css
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

// INSERT VALUE
const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/128/128/any',
  'name': '이승찬',
  'birthday': '960208',
  'gender': '남자',
  'job': '취준생'
  },
  {
  'id': 2,
  'image': 'https://placeimg.com/128/129/any',
  'name': '신영진',
  'birthday': '961212',
  'gender': '남자',
  'job': '회사원'
  }
]

// Customer
// 태그를 단독으로 쓰는게 아니라면 무조건 상위 태그를 둘러줘야 한다.
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
/*    하드코딩 ver - 1
      <div>
        <Customer 
          id={customers[0].id}
          image={customers[0].image}
          name={customers[0].name}
          birthday={customers[0].birthday}
          gender={customers[0].gender}
          job={customers[0].job}
        />
        <Customer 
          id={customers[1].id}
          image={customers[1].image}
          name={customers[1].name}
          birthday={customers[1].birthday}
          gender={customers[1].gender}
          job={customers[1].job}
        />
      </div> */
      <Paper className={classes.root}>
        <Table className={classes.table}>
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
            {
              // customers를 c라는 이름으로 mapping함.
              customers.map(c => {
                return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> );
              })
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

// Public Option
export default withStyles(styles)(App);
