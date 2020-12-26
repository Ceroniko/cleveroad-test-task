import React from "react";
import { Form, Input } from "antd";
import { MailOutlined } from "@ant-design/icons";

const View = ({ input, meta }) => {
  return (
    <Form.Item
      name="Email"
      required
      extra="Введите любую корректную электронную почту"
      rules={[
        {
          required: true,
          message: "Требуется заполнить поле эл.почты",
        },
        {
          type: "email",
          message: "Неправильный формат почты",
        },
      ]}
    >
      <Input {...input} prefix={<MailOutlined />} placeholder="Эл.Почта" />
    </Form.Item>
  );
};

export { View };
