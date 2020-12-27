import React from "react";
import { List, Col } from "antd";
import { CardProducts } from "../cardProducts";

const View = ({ data, dispatchProducts, fetching }) => {
  React.useEffect(() => {
    dispatchProducts();
  }, []);

  const onChange = () => {
    dispatchProducts();
  };

  return (
    <List
      grid={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 6, gutter: 16 }}
      dataSource={data}
      loading={fetching}
      renderItem={(item) => {
        return (
          <Col>
            <CardProducts {...item} onChange={onChange} />
          </Col>
        );
      }}
      pagination={{
        defaultPageSize: 6,
        size: "small",
        showSizeChanger: true,
        pageSizeOptions: [6, 12, 18, 24],
      }}
    />
  );
};

export { View };
