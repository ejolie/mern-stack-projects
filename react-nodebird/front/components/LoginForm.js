import React, { useCallback } from "react";
import Link from "next/link";
import { Input, Button, Form } from "antd";
import { useDispatch } from "react-redux";

import { useInput } from "../pages/signup";
import { loginAction } from "../reducers/user";

const LoginForm = () => {
  const [userId, onChangeId] = useInput("");
  const [userPassword, onChangePassword] = useInput("");
  const dispatch = useDispatch();

  // 자식 컴포넌트에 넘기는 함수는 useCallback으로 감싸준다
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(loginAction);
    },
    [userId, userPassword]
  );

  return (
    <Form onSubmit={onSubmitForm} style={{ padding: "10px" }}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input
          name="user-id"
          type="text"
          value={userId}
          onChange={onChangeId}
          required
        />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          tyle="password"
          value={userPassword}
          onChange={onChangePassword}
          required
        />
      </div>
      <div>
        <Button htmlType="submit" onSubmit={onSubmitForm} loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
