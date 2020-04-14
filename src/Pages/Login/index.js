import React from "react";
import s from "./index.module.css";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

class Auth extends React.Component {
  render() {
    return (
      <div className={s.pt32}>
        <h1>Вход</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          // onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Введите номер телефона!",
              },
            ]}
          >
            <Input
              prefix={
                <UserOutlined className="site-form-item-icon" type="phone" />
              }
              placeholder="Телефон"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Введите ваш пароль!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Пароль"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Auth;
