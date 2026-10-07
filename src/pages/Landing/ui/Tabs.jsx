import { useState } from "react";

export default function Tabs({ tabs, defaultIndex = 0, className = "" }) {
  const [active, setActive] = useState(defaultIndex);

  return (
    <div className={className}>
      <div
        className="d-flex gap-1 p-1 rounded"
        style={{
          backgroundColor: "var(--muted)",
          width: "fit-content",
        }}
      >
        {tabs.map((tab, index) => {
          const isActive = active === index;

          return (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              className="btn border-0 px-4 py-2"
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                borderRadius: "4px",
                color: isActive
                  ? "var(--foreground)"
                  : "var(--muted-foreground)",
                backgroundColor: isActive ? "var(--card)" : "transparent",
                boxShadow: isActive ? "0 1px 3px rgba(0, 0, 0, 0.08)" : "none",
                transition: "all 0.15s ease",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="mt-4">{tabs[active]?.content}</div>
    </div>
  );
}
