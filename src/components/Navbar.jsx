import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>News App</h1>
      </div>
      <div className="navbar-categories">
        <NavLink to="/" className="navbar-category">
          Home
        </NavLink>
        <NavLink to="/tech" className="navbar-category">
          Tech
        </NavLink>
        <NavLink to="/business" className="navbar-category">
          Business
        </NavLink>
        <NavLink to="/sports" className="navbar-category">
          Sports
        </NavLink>
        <NavLink to="/search" className="navbar-category">
          Search
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
