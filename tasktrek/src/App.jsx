import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import "./App.css";
import TaskColumn from "./components/TaskColumn";

const oldTasks = localStorage.getItem("tasks");
const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="appMain">
        <TaskColumn
          columnName=" 🎯 | To Do"
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          columnName=" 🌟 | Doing"
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          columnName=" ✅ | Done"
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
