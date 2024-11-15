import React from "react";

import "./LinkWithIcon.css";

const LinkWithIcon = ({ title, link, sidebar }) => {
  return (
    <a href={link} className={sidebar ? "sidebar-link" : "align-center"}>
      {title}
    </a>
  );
};

export default LinkWithIcon;
