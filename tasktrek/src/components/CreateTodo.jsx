import React, { useState } from "react";

const CreateTodo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const tasks = ["Task 1", "Task 2", "Task 3"];
  const handleClick = () => setCount(count + 1);
  const handleChange = (event) => setInput(event.target.value);
  return (
    <>
      <h1>Tasks: {count}</h1>
      <h2>
        Input: <small style={{ fontSize: 20, fontWeight: 100 }}>{input}</small>
      </h2>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick} value="Add a task">
        Add Task
      </button>
      <ul>
        {...(tasks.map((task) =>  <li>{task}</li>))}
      </ul>
    </>
  );
};

export default CreateTodo;
