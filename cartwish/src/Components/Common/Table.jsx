import React from "react";

import "./Table.css";
const Table = ({ headings, children }) => {
  console.log(headings);
  return (
    <table className="common-table">
      <thead>
        <tr>
          {headings.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      {children}
    </table>
  );
};

export default Table;
