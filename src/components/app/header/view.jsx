import React from "react";
import { Typography, Row, Col } from "antd";
import { Navlink } from "../navlink";
import { NavLink } from "react-router-dom";
import { routes } from "../../../routes";

const View = () => {
  return (
    <Row align={"middle"}>
      <Col>
        <NavLink to={routes["home"].link()}>
          <Typography.Title>Каталог Товаров</Typography.Title>
        </NavLink>
      </Col>
      <Col>
        <Row align={"middle"}>
          <Col>
            <Navlink />
          </Col>
          <Col></Col>
        </Row>
      </Col>
    </Row>
  );
};

export { View };
