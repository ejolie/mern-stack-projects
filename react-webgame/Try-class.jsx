import React, { PureComponent } from "react";

class Try extends PureComponent {
  state = {
    result: this.props.result,
    try: this.props.try
  };

  // constructor(props) {
  //   super(props);
  //   // 다른 동작, 정밀한 컨트롤이 필요할 때 constructor 함수 사용
  //   const filtered = this.props.filter(() => {});
  //   this.state = {};
  // }

  render() {
    return (
      <li>
        <div>{this.state.try}</div>
        <div>{this.state.result}</div>
      </li>
    );
  }
}

export default Try;
