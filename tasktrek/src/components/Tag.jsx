import React from "react";
import "./Tag.css";
const Tag = ({ name, selectTag, selected }) => {
  var styles = {
    HTML: { backgroundColor: "Yellow" },
    CSS: { backgroundColor: "Tomato" },
    JavaScript: { backgroundColor: "#84c584" },
    React: { backgroundColor: "Aqua" },
    selected: { border: "3px solid #09ff00", fontWeight: "700"}
  };
  const newStyles = selected
    ? { ...styles[name], ...styles.selected }
    : { ...styles[name] };
  return (
    <button
      type="button"
      id={name}
      className="tag"
      onClick={() => selectTag(name)}
      style={newStyles}
    >
      {name}
    </button>
  );
};

export default Tag;
