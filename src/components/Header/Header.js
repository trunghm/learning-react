import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "blue" };
  return (
    <div>
      <NavLink exact to="/" activeStyle={activeStyle}>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/login" activeStyle={activeStyle}>
        Login
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </div>
  );
};

export default Header;