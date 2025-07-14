import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar";
import { Outlet } from "react-router-dom";
import "./AppLayout.css";

// PUBLIC_INTERFACE
function AppLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
      <div className="layout-main-area">
        <TopNavbar
          onMenuClick={() => setSidebarCollapsed((s) => !s)}
          sidebarCollapsed={sidebarCollapsed}
        />
        <main className="layout-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
