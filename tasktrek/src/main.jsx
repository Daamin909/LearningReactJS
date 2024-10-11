import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CreateTodo from "./components/CreateTodo.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CreateTodo />
  </StrictMode>
);
