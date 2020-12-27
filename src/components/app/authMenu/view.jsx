import React from "react";
import { NavLink } from "react-router-dom";

const View = () => {
  return (
    <div>
      <NavLink to={"/signin"}>Sign In</NavLink>
      <NavLink to={"/signup"}>Sign Up</NavLink>
    </div>
  );
};

export { View };
