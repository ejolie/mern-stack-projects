import React, { Component } from 'react';
// import './App.css';
import styled, { createGlobalStyle, css, ThemeProvider } from 'styled-components';
import theme from './theme';

createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.88);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`

const Card = styled.div`
  background-color: white;
`;

const Container = styled.div`
  height: 100vh;
  widht: 100vh;
  background-color: pink;
  ${Card}:last-child {
    background-color: blue;
  }
`

const Input = styled.input.attrs({
  required: true,
  placeholder: 'hello'
})`
  border: none;
  ${awesomeCard};
`

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor}
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Input />
          <Form />
        </Container>
      </ThemeProvider>
    );
  }
}

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);

export default App;
