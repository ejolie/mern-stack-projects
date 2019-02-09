import React from 'react';
import queryString from 'query-string';
/* /about 주소로 들어왔을 때 보이는 라우트 */

const About = ({location, match}) => {
  const query = queryString.parse(location.search);
  const { color } = query;  // red

  return (
    <div>
      <h2 style={{color}}>소개</h2>
      <p>안녕하세요, 저는 {match.params.name}입니다.</p>
    </div>
  );
};

export default About;