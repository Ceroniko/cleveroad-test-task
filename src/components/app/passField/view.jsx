import React from "react";
import { Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";

const View = ({ input, meta }) => {
  return (
    <Form.Item
      name="password"
      required
      extra="Введите любой корректный пароль"
      rules={[
        {
          required: true,
          message: "Требуется заполнить поле пароля",
        },
        {
          min: 8,
          message: "Пароль должен содержать не менее 8 символов",
        },
        {
          pattern: /^[A-Za-z0-9.-_]+$/i,
          message: "Некорректный формат пароля",
        },
      ]}
    >
      <Input.Password
        {...input}
        prefix={<LockOutlined />}
        placeholder="Пароль"
      />
    </Form.Item>
  );
};

export { View };
