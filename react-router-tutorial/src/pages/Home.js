import React from 'react';

/*
  페이지를 열었을 때(주소에 아무것도 지정하지 않았을 때)
  기본적으로 보여 줄 Home 라우트
*/

const Home = ({history}) => {
  return (
    <div>
      <h2>홈</h2>
      <button onClick={() => {
        history.push('/about/javascript')
      }}
      >자바스크립트를 사용하여 이동</button>
    </div>
  );
};

export default Home;