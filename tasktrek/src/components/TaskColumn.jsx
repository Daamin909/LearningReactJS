import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";
const TaskColumn = ({ columnName, tasks, status, handleDelete }) => {
  return (
    <section className="taskColumn">
      <h2>{columnName}</h2>
      <hr />
      {tasks.map((task, index) => {
        return (
          task.status == status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index = {index}
            />
          )
        );
      })}
    </section>
  );
};

export default TaskColumn;
