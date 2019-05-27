// action - state를 바꾸는 행동
// dispatch - action을 실행
// reducer - action의 결과로 state를 어떻게 바꿀지 정의
// store - state, action, reducer가 합쳐진 개념

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { LOG_IN, loginAction, logoutAction } from "../reducers/user";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      user: {
        id: 1,
        nickname: "박은정"
      },
      content: "첫 번째 게시글",
      img: "https://pbs.twimg.com/media/D1dZVehWwAATF8a.jpg"
    }
  ]
};

const Home = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch({
      // param: action
      type: LOG_IN,
      data: {
        nickname: "박은정"
      }
    });
    // dispatch(loginAction);
  }, []);

  return (
    <div>
      {user ? (
        <div>{user.nickname}님 안녕하세요.</div>
      ) : (
        <div>{user.nickname}님 안녕히 가세요.</div>
      )}
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map((c) => {
        return <PostCard key={c} post={c} />;
      })}
    </div>
  );
};

export default Home;
