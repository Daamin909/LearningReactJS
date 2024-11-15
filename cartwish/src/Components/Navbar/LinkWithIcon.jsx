import React from "react";

import "./LinkWithIcon.css";

const LinkWithIcon = ({ title, link }) => {
  return (
    <a href={link} className="align-center">
      {title}
    </a>
  );
};

export default LinkWithIcon;
