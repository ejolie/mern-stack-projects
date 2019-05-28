import React, { useCallback } from "react";
import { Avatar, Card, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { logoutAction } from "../reducers/user";

const UserProfile = () => {
  const { dummyUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logoutAction);
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />
          {dummyUser.Post.length}
        </div>,
        <div key="following">
          팔로잉
          <br />
          {dummyUser.Followings.length}
        </div>,
        <div key="follower">
          팔로워
          <br />
          {dummyUser.Followers.length}
        </div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{dummyUser.nickname[0]}</Avatar>}
        title={dummyUser.nickname}
      />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
