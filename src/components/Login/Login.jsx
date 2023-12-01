

import React from "react";
import { Button, Form, Input } from "antd";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import "./Login.scss"; 

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const onFinish = (values) => {
    login(values);
    console.log("Login successful:", values);
    setTimeout(() => {
      navigate("/profile");
    }, 1000);
  };

  return (
    <div className="login-container">
      <Form
        className="form-container"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input className="login-input" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password className="login-input" />
        </Form.Item>

        <Form.Item>
          <Button className="login-button" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
