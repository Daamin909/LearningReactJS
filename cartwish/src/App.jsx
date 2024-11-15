import React from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/Home/HomePage";
import ProductsPage from "./Components/Products/ProductsPage";
import SingleProductPage from "./Components/SingleProduct/SingleProductPage";
import CartPage from "./Components/Cart/CartPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <HomePage /> */}
        {/* <ProductsPage /> */}
        {/* <SingleProductPage /> */}
        <CartPage />
      </main>
    </div>
  );
};

export default App;
