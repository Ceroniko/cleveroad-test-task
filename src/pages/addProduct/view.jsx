import React from "react";
import { AddProductsForm } from "../../components";
import { PageHeader, Typography } from "antd";
import { history } from "../../routes/history";

const View = (props) => {
  return (
    <div className="wrapper">
      <PageHeader
        onBack={history.goBack}
        title={
          <Typography.Title level={3}>
            Страница добавления товара
          </Typography.Title>
        }
      />
      <AddProductsForm />
    </div>
  );
};

export { View };
