import React, { useContext } from "react";
import { Form, Button } from "antd";
import { Field } from "redux-form";
import { EmailField } from "../emailField";
import { PassField } from "../passField";
import app from "../../../firebase/base";
import { history } from "../../../routes/history";

const View = ({ login }) => {
  const handleSignIn = async () => {
    try {
      await app
        .auth()
        .signInWithEmailAndPassword(login.values.email, login.values.password);
      history.push("/");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Form onFinish={handleSignIn}>
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
