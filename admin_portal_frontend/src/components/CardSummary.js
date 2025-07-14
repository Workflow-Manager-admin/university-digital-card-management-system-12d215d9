import React from "react";
import "./CardSummary.css";

// PUBLIC_INTERFACE
function CardSummary({ label, count, icon, color = "#840132" }) {
  return (
    <div className="card-summary" style={{ borderLeftColor: color }}>
      <span className="card-summary-icon" style={{ color: color }}>
        {icon}
      </span>
      <div className="card-summary-content">
        <span className="card-summary-count">{count}</span>
        <span className="card-summary-label">{label}</span>
      </div>
    </div>
  );
}

export default CardSummary;
