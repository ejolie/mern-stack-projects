import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

/*
  웹 애플리케이션에 BrowserRouter를 적용
  BrowserRouter: HTML5의 history API를 사용해 새로고침하지 않고도
  페이지 주소를 교체할 수 있게 함
*/

const Root = () => {
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
}

export default Root;