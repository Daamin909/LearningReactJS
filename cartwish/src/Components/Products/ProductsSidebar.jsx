import React from "react";

import "./ProductsSidebar.css";
import LinkWithIcon from "../Navbar/LinkWithIcon";
const ProductsSidebar = () => {
  return (
    <aside className="products-sidebar">
      <h2>Category</h2>
      <div className="category-links">
        <LinkWithIcon
          title={"🔌 Electronics"}
          link="products?category=electronics"
          sidebar={true}
        />
      </div>
    </aside>
  );
};

export default ProductsSidebar;
