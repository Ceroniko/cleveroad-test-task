import "./style.scss";
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
    <div className={"header"}>
      <Row type={"flex"} gutter={36} align={"middle"}>
        <Col>
          <NavLink to={routes["home"].link()}>
            <Typography.Title>Каталог Товаров</Typography.Title>
          </NavLink>
        </Col>
        <Col className={"flex-grow"}>
          <Row type={"flex"} gutter={16} align={"middle"}>
            <Col className={"flex-grow"}>
              <Navlink />
            </Col>
            <Col>{!!currentUser ? <UserMenu /> : <AuthMenu />}</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export { View };
