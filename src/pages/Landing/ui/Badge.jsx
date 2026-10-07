export default function Badge({ children, variant = "neutral", size = "sm" }) {
  const variants = {
    gain: {
      backgroundColor: "rgba(16, 185, 129, 0.1)",
      color: "var(--gain)",
    },
    loss: {
      backgroundColor: "rgba(239, 68, 68, 0.1)",
      color: "var(--loss)",
    },
    neutral: {
      backgroundColor: "var(--muted)",
      color: "var(--muted-foreground)",
    },
    accent: {
      backgroundColor: "rgba(0, 201, 167, 0.12)",
      color: "var(--accent)",
    },
    primary: {
      backgroundColor: "var(--secondary)",
      color: "var(--primary)",
    },
  };

  const sizes = {
    sm: {
      padding: "2px 8px",
      fontSize: "0.75rem",
    },
    md: {
      padding: "4px 10px",
      fontSize: "0.875rem",
    },
  };

  return (
    <span
      className="d-inline-flex align-items-center rounded fw-medium"
      style={{
        ...variants[variant],
        ...sizes[size],
      }}
    >
      {children}
    </span>
  );
}
