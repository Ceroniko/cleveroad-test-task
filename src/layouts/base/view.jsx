import React from "react";
import { Layout } from "antd";
import "./style.scss";

const View = React.memo(({ children }) => {
  return (
    <Layout className={"layout layout--base"}>
      <Layout.Header className={"layout__header"}>Header</Layout.Header>
      <Layout.Content className={"layout__content"}>{children}</Layout.Content>
      <Layout.Footer className={"layout__footer"}>Footer</Layout.Footer>
    </Layout>
  );
});

export { View };