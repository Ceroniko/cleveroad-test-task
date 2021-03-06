import "./style.scss";
import React from "react";
import { RegistrationForm } from "../../components";
import { PageHeader, Typography } from "antd";

const View = (props) => {
  return (
    <div className={"wrapper"}>
      <PageHeader
        title={
          <Typography.Title level={3}>
            Страница регистрации
          </Typography.Title>
        }
      />
      <RegistrationForm />
    </div>
  );
};

export { View };
