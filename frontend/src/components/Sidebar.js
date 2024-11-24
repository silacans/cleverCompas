import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ children }) => {
  return (
    <div className="layout-container">
      <aside className="sidebar">
        <ul className="sidebar-links">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/Schedule">Schedule</Link></li>
          <li><Link to="/students">Example</Link></li>

        </ul>
      </aside>
      <main className="content">{children}</main>
    </div>
  );
};

export default Sidebar;
