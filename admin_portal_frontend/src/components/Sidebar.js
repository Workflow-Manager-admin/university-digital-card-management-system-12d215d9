import React, { useState } from "react";
import { FiHome, FiUsers, FiUserPlus, FiLogOut, FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import theme from "../theme";
import "./Sidebar.css";

// PUBLIC_INTERFACE
function Sidebar({ collapsed, setCollapsed }) {
  return (
    <aside className={`sidebar${collapsed ? " collapsed" : ""}`}>
      <div className="sidebar-header">
        <button
          aria-label="Toggle Menu"
          className="sidebar-toggle"
          onClick={() => setCollapsed(!collapsed)}
        >
          <FiMenu />
        </button>
        {!collapsed && <h2 className="sidebar-title">Admin Portal</h2>}
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className="sidebar-link">
          <FiHome /> {!collapsed && "Dashboard"}
        </NavLink>
        <NavLink to="/users" className="sidebar-link">
          <FiUsers /> {!collapsed && "Users"}
        </NavLink>
        <NavLink to="/create-profile" className="sidebar-link">
          <FiUserPlus /> {!collapsed && "Create Profile"}
        </NavLink>
      </nav>
      <div className="sidebar-footer">
        <NavLink to="/logout" className="sidebar-link logout">
          <FiLogOut /> {!collapsed && "Logout"}
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;
