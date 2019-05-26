import React, { PureComponent } from "react";

class RenderTest extends PureComponent {
  state = {
    counter: 0,
    string: "hello",
    number: 1,
    boolean: true,
    array: [],
    object: {}
  };

  onClick = () => {
    this.setState({
      array: []
    });
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
