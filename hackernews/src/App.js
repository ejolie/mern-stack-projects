import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]

/* ES5
function isSearched(searchTerm) {
  return function(item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}
*/
// ES6 고차 함수(함수를 반환하는 함수) + 화살표 함수
const isSearched = searchTerm => 
  item => item.title.toLowerCase().includes(searchTerm.toLowerCase());


class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = { // this : 클래스 인스턴스
      list,
      searchTerm: '',
    };

    this.onDismiss = this.onDismiss.bind(this); // 클래스 메서드로 정의하기 위해 바인딩
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value })
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="App">
        <form>
          <input 
            type="text"
            onChange={this.onSearchChange}
          />
        </form>

        { list.filter(isSearched(searchTerm)).map(item => {

          const onHandleDismiss = () => {
            this.onDismiss(item.objectID);
          }

          return (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.url}</a>
              </span>
              <span>{item.title}</span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button 
                  onClick={onHandleDismiss}
                  type="button"
                >
                  dismiss
                </button>
              </span>
            </div>
          );

          }
        )}
      </div>
    );
  }
}

export default App;
