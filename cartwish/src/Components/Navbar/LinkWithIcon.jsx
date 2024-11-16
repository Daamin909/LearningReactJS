import React from "react";

import "./LinkWithIcon.css";
import { NavLink } from "react-router-dom";

const LinkWithIcon = ({ title, link, sidebar, emoji }) => {
  return (
    <NavLink to={link} className={sidebar ? "sidebar-link" : "align-center"}>
      {title} {emoji && <img src={emoji} alt="" className="link-emoji" />}
    </NavLink>
  );
};

export default LinkWithIcon;
