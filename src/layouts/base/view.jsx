import React, { useMemo } from "react";
import { Layout } from "antd";

const View = React.memo(({ children }) => {
  return (
    <Layout>
      <Layout.Header>Header</Layout.Header>
      <Layout.Content>{children}</Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  );
});

export { View };
