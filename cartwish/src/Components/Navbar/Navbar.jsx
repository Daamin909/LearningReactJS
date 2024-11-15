import React from "react";

import "./Navbar.css";
import LinkWithIcon from "./LinkWithIcon";

const Navbar = () => {
  return (
    <nav className="align-center navbar">
      <div className="align-center">
        <h1 className="navbar-heading">CartWish</h1>
        <form className="align-center navbar-form">
          <input
            type="text"
            className="navbar-search"
            placeholder="Search products."
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
      <div className="align-center navbar-links">
        <LinkWithIcon title={"Home 🏠"} link={"/"} />
        <LinkWithIcon title={"Products 🛍️"} link={"/products"} />
        <LinkWithIcon title={"Login 🆔"} link={"/login"} />
        <LinkWithIcon title={"Signup 📝"} link={"/signup"} />
        <LinkWithIcon title={"My Orders 🛒"} link={"/myorders"} />
        <LinkWithIcon title={"Logout 🔐"} link={"/logout"} />
        <a href="/cart" className="align-center">
          Cart <p className="align-center cart_counts">0</p>
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
