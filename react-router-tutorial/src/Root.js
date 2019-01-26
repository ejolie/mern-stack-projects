import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

/* BroserRouter - HTML5의 history API를 사용하여
   새로고침하지 않고도 페이지 주소를 교체할 수 있게 한다.
*/

const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Root;