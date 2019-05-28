import React from "react";
import { Form, Input, Button } from "antd";
import { useSelector } from "react-redux";

const PostForm = () => {
  const { imagePaths } = useSelector((state) => state.user.post);

  return (
    <Form encType="multipart/form-data">
      <Input.TextArea maxLength={140} placeholder="오늘의 기분은 어떠신가요?" />
      <div>
        <input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          짹짹
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => {
          return (
            <div key={v} style={{ display: "inline-block" }}>
              <img
                src={"http://localhost:3065/" + v}
                style={{ width: "200px" }}
                alt={v}
              />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Form>
  );
};

export default PostForm;
