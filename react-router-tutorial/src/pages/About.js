import React from 'react';

const About = ({match}) => {
  return (
    <div>
      <h2>소개</h2>
      <p>안녕하세요, 저는 {match.params.name}입니다.</p>
    </div>
  );
};

export default About;