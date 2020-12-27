import React from "react";
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
    <div style={{ width: "400px" }}>
      <Form onFinish={handleSignIn}>
        <Field name="email" component={EmailField} />
        <Field name="password" component={PassField} />
        <Form.Item>
          <Button style={{ width: "100%" }} type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export { View };
