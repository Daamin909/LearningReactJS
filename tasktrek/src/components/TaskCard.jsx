import React from "react";
import Tag from "./Tag";
import "./TaskCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <div className="taskCard">
      <p className="taskName">{title}</p>
      <hr className="divider" />
      <div className="nextRow">
        {tags.map((tag, index) => <Tag key={index} name={tag}/>)}
        <button className="deleteTask" onClick={() => handleDelete(index)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
  return <></>;
};

export default TaskCard;
