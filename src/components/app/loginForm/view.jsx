import React from "react";
import { Form, Button } from "antd";
import { Field } from "redux-form";
import { EmailField } from "../emailField";
import { PassField } from "../passField";

const View = () => {
  return (
    <Form>
      <Field name="email" component={EmailField} />
      <Field name="password" component={PassField} />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};

export { View };
