import React, { Component } from 'react';
import './App.css';
import LifeCycleSample from './LifeCycleSample';

// function getRandomColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

class App extends Component {
  // state = {
  //   color: '#000000'
  // }

  // handleClick = () => {
  //   this.setState({
  //     color: getRandomColor()
  //   });
  // }
  render() {
    return (
      <div>
        <StyledButton big>버튼</StyledButton>
      </div>
    );
  }
}

export default App;
