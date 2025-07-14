import React from "react";
import "./ActivityFeed.css";

// PUBLIC_INTERFACE
function ActivityFeed({ events }) {
  if (!events || !events.length) return (
    <div className="activity-feed empty">No recent activity.</div>
  );
  return (
    <ul className="activity-feed">
      {events.map((event, i) => (
        <li key={i} className="activity-feed-event">
          <span className="activity-feed-dot" />
          <span className="activity-feed-desc">{event.desc}</span>
          <span className="activity-feed-time">{event.when}</span>
        </li>
      ))}
    </ul>
  );
}

export default ActivityFeed;
