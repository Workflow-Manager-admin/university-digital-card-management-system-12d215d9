import React from "react";

// PUBLIC_INTERFACE
function BarChart({ data, width = 220, height = 90, color = "#840132" }) {
  // data = [{label, value}]
  const maxV = Math.max(...data.map((d) => d.value), 1);
  const barWidth = width / (data.length * 1.7);

  return (
    <svg width={width} height={height} style={{ display: "block", margin: "auto" }} aria-label="Bar chart">
      {data.map((d, i) => (
        <g key={i}>
          <rect
            x={i * barWidth * 1.7}
            y={height - (d.value / maxV) * (height - 30) - 18}
            width={barWidth}
            height={(d.value / maxV) * (height - 30)}
            rx={6}
            fill={color}
          />
          <text
            x={i * barWidth * 1.7 + barWidth / 2}
            y={height - 4}
            textAnchor="middle"
            fontSize="12"
            fill="#555"
          >
            {d.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default BarChart;
