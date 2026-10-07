import { useState } from "react";

export default function Accordion({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="d-flex flex-column gap-2">
      {items.map((item, index) => {
        const isOpen = open === index;

        return (
          <div
            key={index}
            className="border rounded overflow-hidden"
            style={{
              borderColor: "var(--border)",
            }}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              className="w-100 border-0 d-flex align-items-center justify-content-between text-start px-4 py-3"
              style={{
                backgroundColor: "transparent",
                color: "var(--foreground)",
                transition: "background-color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--muted)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                {item.q}
              </span>

              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                style={{
                  flexShrink: 0,
                  marginLeft: "1rem",
                  color: "var(--muted-foreground)",
                  transition: "transform 0.2s ease",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {isOpen && (
              <div className="px-4 pb-3">
                <p
                  className="mb-0"
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.625,
                    color: "var(--muted-foreground)",
                  }}
                >
                  {item.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
