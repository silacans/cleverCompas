import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">CleverCampus</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/messages">Messages</Link></li>
      </ul>
      <div className="navbar-actions">
        <Link to="/about" className="navbar-action-link">About Us</Link>
        <Link to="/contact" className="navbar-action-link">Contact Us</Link>
        <Link to="/faq" className="navbar-action-link">FAQ</Link>
        <Link to="/login" className="login-button">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;

