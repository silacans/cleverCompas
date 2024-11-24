import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


// This is the top navbar component
const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">CleverCampus</Link>
        </div>
        <ul className="navbar-links">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/Schedule">Schedule</Link></li>

        </ul>
        <div className="navbar-login">
          <Link to="/login" className="login-button">Login</Link>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
