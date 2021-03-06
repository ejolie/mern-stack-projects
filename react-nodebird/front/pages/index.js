// action - state를 바꾸는 행동
// dispatch - action을 실행
// reducer - action의 결과로 state를 어떻게 바꿀지 정의
// store - state, action, reducer가 합쳐진 개념

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const Home = () => {
  // Redux에서 state 가져오기
  const { isLoggedIn } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'HELLO_SAGA',
    });
  }, []);

  return (
    <div>
      {isLoggedIn && <PostForm />}
      {mainPosts.map(c => (
        <PostCard key={c} post={c} />
      ))}
    </div>
  );
};

export default Home;
