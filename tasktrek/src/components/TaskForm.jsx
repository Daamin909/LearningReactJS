import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";
const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };
  const selectTag = (tag) => {
    if (checkTag(tag)) {
      const newTags = taskData.tags.filter((element) => element !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: newTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    })
  };
  return (
    <header className="appHeader">
      <form onSubmit={handleSubmit}>
        <input
          id="input"
          value={taskData.task}
          name="task"
          className="taskInput"
          type="text"
          placeholder="Add a task"
          maxLength={400}
          onChange={handleChange}
        />
        <div className="taskFormBottomLine">
          <div>
            <Tag
              name="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag name="CSS" selectTag={selectTag} selected={checkTag("CSS")} />
            <Tag
              name="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            />
            <Tag
              name="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
          </div>
          <div>
            <select
              className="taskStatus"
              onChange={handleChange}
              name="status"
              value={taskData.status}
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button className="taskSubmit" type="submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
