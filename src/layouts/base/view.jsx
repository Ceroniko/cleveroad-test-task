import React, { useMemo } from "react";
import { Layout } from "antd";
import { Header } from "../../components";
import "./style.scss";

const View = React.memo(({ children }) => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  return (
    <Layout className={"layout"}>
      <Layout.Header className={"layout__header"}>
        <Header />
      </Layout.Header>
      <Layout.Content className={"layout__content"}>{children}</Layout.Content>
      <Layout.Footer className={"layout__footer"}>
        Cleveroad test task {currentYear}
      </Layout.Footer>
    </Layout>
  );
});

export { View };
