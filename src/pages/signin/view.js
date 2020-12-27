import React from "react";
import { LoginForm } from "../../components";
import { PageHeader, Typography } from "antd";

const View = (props) => {
  return (
    <div className="wrapper">
      <PageHeader
        title={
          <Typography.Title level={3}>Страница авторизации</Typography.Title>
        }
      />
      <LoginForm />
    </div>
  );
};

export { View };
