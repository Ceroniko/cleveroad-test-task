import "./style.scss";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../../routes";
import { AuthContext } from "../authProvider";

const View = () => {
  const { currentUser } = useContext(AuthContext);
  const navbarRoutes = !!currentUser
    ? [
        { name: "Главная", key: "home" },
        { name: "Товары", key: "listcard" },
        { name: "Добавить товар", key: "addproduct" },
      ]
    : [{ name: "Главная", key: "home" }];
  return (
    <div className={"navbar"}>
      <ul className={"navbar__list"}>
        {navbarRoutes.map((route) => (
          <li key={route.key} className={"navbar__item"}>
            <NavLink to={routes[route.key].link()}>{route.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { View };
