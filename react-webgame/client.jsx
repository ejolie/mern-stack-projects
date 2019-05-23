const React = require("react");
const ReactDOM = require("react-dom");
const { hot } = require("react-hot-loader/root");

const NumberBaseball = require("./NumberBaseball");
const Hot = hot(WordRelay);

ReactDOM.render(<Hot />, document.querySelector("#root"));
