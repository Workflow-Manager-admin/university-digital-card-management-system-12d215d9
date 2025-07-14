import React, { useState } from "react";
import { FiBell, FiUser, FiSettings } from "react-icons/fi";
import "./TopNavbar.css";

// PUBLIC_INTERFACE
function TopNavbar({ onMenuClick, sidebarCollapsed }) {
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header className="top-navbar">
      <button
        className="top-navbar-menu"
        aria-label="Open Sidebar"
        onClick={onMenuClick}
        style={{ visibility: sidebarCollapsed ? "visible" : "hidden" }}
      >
        <span />
        <span />
        <span />
      </button>
      <span className="top-navbar-title">University Admin Portal</span>
      <nav className="top-navbar-icons">
        <button
          aria-label="Notifications"
          className="icon-btn"
          onClick={() => setNotifOpen(!notifOpen)}
        >
          <FiBell />
          <span className="top-navbar-dot" />
        </button>
        <button aria-label="Profile" className="icon-btn">
          <FiUser />
        </button>
        <button aria-label="Settings" className="icon-btn">
          <FiSettings />
        </button>
      </nav>
      {/* Notification dropdown */}
      {notifOpen && (
        <div className="top-navbar-dropdown" role="menu" tabIndex={-1}>
          <div className="top-navbar-dropdown-header">
            Notifications
          </div>
          {/* Demo notification */}
          <div className="top-navbar-dropdown-item">
            No new notifications.
          </div>
        </div>
      )}
    </header>
  );
}

export default TopNavbar;
