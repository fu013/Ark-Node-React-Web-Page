import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

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
    return (
      // 하드코딩 ver - 1
      // <div>
      //   <Customer 
      //     id={customers[0].id}
      //     image={customers[0].image}
      //     name={customers[0].name}
      //     birthday={customers[0].birthday}
      //     gender={customers[0].gender}
      //     job={customers[0].job}
      //   />
      //   <Customer 
      //     id={customers[1].id}
      //     image={customers[1].image}
      //     name={customers[1].name}
      //     birthday={customers[1].birthday}
      //     gender={customers[1].gender}
      //     job={customers[1].job}
      //   />
      // </div>
      <div>
        {
          // customers를 c라는 이름으로 mapping함.
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

// Public Option
export default App;
