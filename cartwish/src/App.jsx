import React from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/Home/HomePage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;
