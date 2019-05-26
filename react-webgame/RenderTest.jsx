import React, { Component } from "react";

class RenderTest extends Component {
  state = {
    counter: 0
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.counter !== nextState.counter) {
      return true;
    }
    return false;
  }

  onClick = () => {
    this.setState({});
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default RenderTest;
