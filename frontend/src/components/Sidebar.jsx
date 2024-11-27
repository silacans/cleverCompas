import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Automatically collapse the sidebar when the location changes
  useEffect(() => {
    setIsCollapsed(true);
  }, [location]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };


  // This is for the logout button functions
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="layout-container">
      <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isCollapsed ? '>' : '<'}
        </button>
        {!isCollapsed && (
          <>
          <ul className="sidebar-links">
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/Notification">Notification</Link></li> {/* Need to add pages */}
          </ul>
          <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </aside>
      <main className={`content ${isCollapsed ? 'expanded' : ''}`}>{children}</main>
    </div>
  );
};

export default Sidebar;
