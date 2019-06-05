import React, { useState, useCallback, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ADD_POST_REQUEST } from '../reducers/post';

const PostForm = () => {
  const [text, setText] = useState('');
  const { imagePaths, isAddingPost, postAdded } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    setText('')
  }, [postAdded === true]);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: ADD_POST_REQUEST,
      data: {
        text
      }
    })
  }, []);

  return (
    <Form encType="multipart/form-data" onSubmit={onSubmitForm}>
      <Input.TextArea maxLength={140} placeholder="오늘의 기분은 어떠신가요?" value={text} onChange={onChangeText}/>
      <div>
        <input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit" loading={isAddingPost}>
          짹짹
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => ({
            <div key={v} style={{ display: "inline-block" }}>
              <img
                src={`http://localhost:3065/${v}`}
                style={{ width: "200px" }}
                alt={v}
              />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          );
        }))}
      </div>
    </Form>
  );
};

export default PostForm;
