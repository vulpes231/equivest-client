import React from "react";

export default function Card({
  children,
  className = "",
  padding = "md",
  hover = false,
  style = {},
}) {
  const paddingMap = {
    none: "",
    sm: "p-3",
    md: "p-4",
    lg: "p-5",
  };

  return (
    <div
      className={`border rounded shadow-sm ${paddingMap[padding]} ${
        hover ? "card-hover" : ""
      } ${className}`}
      style={{
        backgroundColor: "var(--card)",
        borderColor: "var(--border)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function StatCard({ label, value, change, changeLabel, up, icon }) {
  return (
    <Card className="d-flex flex-column gap-2">
      <div className="d-flex align-items-center justify-content-between">
        <span
          className="text-uppercase"
          style={{
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
            color: "var(--muted-foreground)",
          }}
        >
          {label}
        </span>

        {icon && (
          <div
            className="rounded d-flex align-items-center justify-content-center"
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: "var(--secondary)",
              color: "var(--accent)",
            }}
          >
            {icon}
          </div>
        )}
      </div>

      <div
        className="fs-4"
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 700,
          color: "var(--foreground)",
        }}
      >
        {value}
      </div>

      {change && (
        <div
          className="d-flex align-items-center gap-1"
          style={{
            fontSize: "0.75rem",
            fontWeight: 500,
            color: up ? "var(--gain)" : "var(--loss)",
          }}
        >
          <span>
            {up ? "▲" : "▼"} {change}
          </span>

          {changeLabel && (
            <span
              style={{
                color: "var(--muted-foreground)",
                fontWeight: 400,
              }}
            >
              {changeLabel}
            </span>
          )}
        </div>
      )}
    </Card>
  );
}
