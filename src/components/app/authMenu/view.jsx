import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

const View = () => {
  return (
    <div>
      <NavLink to={"/signin"} style={{ marginRight: 5 }}>
        <Button>Войти</Button>
      </NavLink>
      <NavLink to={"/signup"}>
        <Button>Зарегистрироваться</Button>
      </NavLink>
    </div>
  );
};

export { View };
