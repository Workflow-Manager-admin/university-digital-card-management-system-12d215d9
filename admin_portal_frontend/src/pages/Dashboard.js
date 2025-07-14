import React from "react";
import CardSummary from "../components/CardSummary";
import { FiUsers, FiUserPlus, FiActivity, FiDatabase } from "react-icons/fi";
import ActivityFeed from "../components/ActivityFeed";
import ResponsiveCardGrid from "../components/ResponsiveCardGrid";
import BarChart from "../components/BarChart";
import "./Dashboard.css";

// PUBLIC_INTERFACE
function Dashboard() {
  // Placeholder/dummy stats for illustration
  const stats = [
    { label: "Total Users", count: 3425, icon: <FiUsers />, color: "#840132" },
    { label: "Active Cards", count: 2954, icon: <FiDatabase />, color: "#F6C90E" },
    { label: "Pending Profiles", count: 81, icon: <FiUserPlus />, color: "#222" }
  ];
  const recentEvents = [
    { desc: "New student profile approved", when: "Just now" },
    { desc: "Dr. B. Lee updated profile", when: "5m ago" },
    { desc: "QR linked: John S.", when: "9m ago" },
    { desc: "Admin Alice added new card", when: "22m ago" },
    { desc: "Staff QR - lost card reported", when: "55m ago" }
  ];
  const barData = [
    { label: "Mon", value: 8 },
    { label: "Tue", value: 11 },
    { label: "Wed", value: 4 },
    { label: "Thu", value: 7 },
    { label: "Fri", value: 6 },
    { label: "Sat", value: 2 },
    { label: "Sun", value: 1 }
  ];
  return (
    <div className="dashboard-main">
      <h1 className="dashboard-title">Dashboard Overview</h1>
      <ResponsiveCardGrid minWidth={240} gap={22}>
        {stats.map((stat) => (
          <CardSummary key={stat.label} {...stat} />
        ))}
      </ResponsiveCardGrid>
      <div className="dashboard-section-split">
        <div style={{ flex: "2 2 340px" }}>
          <h2 className="dashboard-subheader">Recent Activity</h2>
          <ActivityFeed events={recentEvents} />
        </div>
        <div style={{ flex: "1 1 180px" }}>
          <h2 className="dashboard-subheader">Profile Creates (wk)</h2>
          <BarChart data={barData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
