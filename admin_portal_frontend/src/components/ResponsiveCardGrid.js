import React from "react";

// PUBLIC_INTERFACE
function ResponsiveCardGrid({ children, minWidth = 240, gap = 24 }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}px, 1fr))`,
        gap: gap,
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}

export default ResponsiveCardGrid;
