import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        {/* Menu Icon */}
        <i className="fas fa-bars menu-icon" title="Menu"></i>
        {/* Prime Video Logo */}
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg"
          alt="Prime Video Logo"
        />
      </div>
      <ul className="nav-links">
        {/* Home Icon */}
        <li>
          <i className="fas fa-home nav-icon" title="Home"></i> Home
        </li>
        {/* TV Shows Icon */}
        <li>
          <i className="fas fa-tv nav-icon" title="TV Shows"></i> TV Shows
        </li>
        {/* Movies */}
        <li>
          <i className="fas fa-film nav-icon" title="Movies"></i> Movies
        </li>
        {/* Kids */}
        <li>
          <i className="fas fa-child nav-icon" title="Kids"></i> Kids
        </li>
      </ul>
      <div className="navbar-right">
        {/* Search Icon */}
        <i className="fas fa-search search-icon" title="Search"></i>
      
        <img
          className="profile-icon"
          src="https://via.placeholder.com/40"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Navbar;
