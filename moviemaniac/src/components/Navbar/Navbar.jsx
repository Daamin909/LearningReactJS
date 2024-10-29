import React from "react";
import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Movie Maniac</h1>
      <div className="navbar_links">
        <DarkMode />
        <NavLink to="/">🔥 | Popular</NavLink>
        <NavLink to="/top-rated">🌟 | Top Rated</NavLink>
        <NavLink to="/upcoming">🥳 | Upcoming</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
