import React from "react";
import { Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";

const View = ({ input, meta }) => {
  return (
    <Form.Item
      name="confirm"
      dependencies={["password"]}
      required
      extra="Повторите пароль, для подверждения корректности его ввода"
      rules={[
        {
          required: true,
          message: "Пожалуйста, подтвердите свой пароль",
        },
        ({ getFieldValue }) => ({
          validator(rule, value) {
            if (!value || getFieldValue("password") === value) {
              return Promise.resolve();
            }

            return Promise.reject("Пароли не совпадают");
          },
        }),
      ]}
    >
      <Input.Password
        {...input}
        prefix={<LockOutlined />}
        placeholder="Повторите пароль"
      />
    </Form.Item>
  );
};

export { View };
