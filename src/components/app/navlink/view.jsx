import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../../routes";

const View = () => {
  const navbarRoutes = useMemo(() => [{ name: "Home", key: "home" }], []);
  return (
    <div>
      <ul>
        {navbarRoutes.map((route) => (
          <li key={route.key}>
            <NavLink to={routes[route.key].link()}>{route.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { View };
