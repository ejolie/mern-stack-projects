import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Maven+Pro:400,500');
  ${reset};
  body {
    font-family: 'Maven Pro', sans-serif;
    background-color: #ecf0f1;
  }
  a {
    color: inherit;
  }
  main {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
  }
`;
