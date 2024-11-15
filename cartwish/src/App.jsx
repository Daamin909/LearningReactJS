import React from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/Home/HomePage";
import ProductsPage from "./Components/Products/ProductsPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <HomePage /> */}
        <ProductsPage />
      </main>
    </div>
  );
};

export default App;
