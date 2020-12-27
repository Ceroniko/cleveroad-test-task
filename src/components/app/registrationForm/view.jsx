import React from "react";
import { Form, Button } from "antd";
import { Field } from "redux-form";
import { EmailField } from "../emailField";
import { PassField } from "../passField";
import { SubmitPassField } from "../submitPassField";
import app from "../../../firebase/base";
import { history } from "../../../routes/history";

const View = ({ registration }) => {
  const handleSignUp = async () => {
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(
          registration.values.email,
          registration.values.password
        );
      history.push("/");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Form onFinish={handleSignUp}>
      <Field name="email" component={EmailField} />
      <Field name="password" component={PassField} />
      <SubmitPassField />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};

export { View };
