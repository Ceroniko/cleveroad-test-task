import React, { useContext } from "react";
import { Typography, Row, Col } from "antd";
import { Navlink } from "../navlink";
import { AuthMenu } from "../authMenu";
import { UserMenu } from "../userMenu";
import { NavLink } from "react-router-dom";
import { routes } from "../../../routes";
import { AuthContext } from "../authProvider";

const View = () => {
  const { currentUser } = useContext(AuthContext);
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
          <Col>{!!currentUser ? <UserMenu /> : <AuthMenu />}</Col>
        </Row>
      </Col>
    </Row>
  );
};

export { View };
