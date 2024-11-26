import React from 'react';
import { useState, useEffect } from 'react'; // for using the state to make the sidebar toggle and for usefect which helps side bar go away evrytime we new page is loaded
import { Link , useLocation} from 'react-router-dom';
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
      <div className={`layout-container ${isCollapsed ? 'collapsed' : ''}`}>
        <aside className="sidebar">
          <button className="toggle-button" onClick={toggleSidebar}>
            {isCollapsed ? '>' : '<'}
          </button>
          <ul className="sidebar-links">
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/example">Example</Link></li>
          </ul>
        </aside>
        <main className="content">{children}</main>
      </div>
    );
  };
  
  export default Sidebar;