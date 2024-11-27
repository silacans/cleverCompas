import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  // Automatically collapse the sidebar when the location changes
  useEffect(() => {
    setIsCollapsed(true);
  }, [location]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="layout-container">
      <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isCollapsed ? '>' : '<'}
        </button>
        {!isCollapsed && (
          <ul className="sidebar-links">
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/example">Example</Link></li>
          </ul>
        )}
      </aside>
      <main className={`content ${isCollapsed ? 'expanded' : ''}`}>{children}</main>
    </div>
  );
};

export default Sidebar;
