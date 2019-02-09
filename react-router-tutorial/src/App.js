import React from 'react';
import { Route } from 'react-router-dom';
import {
  Home,
  About,
  Posts
} from 'pages';
import Menu from 'components/Menu';

const App = () => {
  return (
    <div>
      <Menu/>
      <Route exact path="/" component={Home} />
      {/* exact: 설정한 path가 정확히 일치할 때만 보이도록 설정함
        exact가 없으면 /about 경로로 들어와도 / 경로의 내부이므로
        일치하는 것으로 간주하여 컴포넌트가 보이게 됨
      */}
      <Route path="/about/:name?" component={About} />
      {/* 라우트 경로에 특정 값 추가 방법 
        1. params (:key)
        - about 컴포넌트 중복을 피하는 방법
          1) exact path="/about"과 path="/about/:name" 사용
          2) path="/about/:name?" :name 값을 선택적으로 입력받을 수 있도록 함
        2. Query String
        문자열로 된 쿼리를 객체 형태로 파싱하려면 query-string 라이브러리 설치 필요
      */}
      <Route path="/posts" component={Posts} />
    </div>
  );
};

export default App;
