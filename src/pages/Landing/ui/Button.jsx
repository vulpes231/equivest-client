import React from "react";
import { Link } from "react-router-dom";

const baseStyles =
  "d-inline-flex align-items-center justify-content-center gap-2 fw-medium rounded transition-all";

const sizes = {
  sm: "px-3 py-2",
  md: "px-4 py-2",
  lg: "px-5 py-3",
};

const variants = {
  primary: {
    color: "#fff",
    background: "linear-gradient(135deg, #1A3A6B, #00C9A7)",
    border: "none",
  },
  secondary: {
    backgroundColor: "var(--secondary)",
    color: "var(--primary)",
    border: "none",
  },
  outline: {
    backgroundColor: "transparent",
    color: "var(--foreground)",
    border: "1px solid var(--border)",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--muted-foreground)",
    border: "none",
  },
  gain: {
    backgroundColor: "var(--gain)",
    color: "#fff",
    border: "none",
  },
  loss: {
    backgroundColor: "var(--loss)",
    color: "#fff",
    border: "none",
  },
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  className = "",
  type = "button",
  fullWidth = false,
}) {
  const variantStyle = variants[variant] || variants.primary;

  const classNames = [
    baseStyles,
    sizes[size] || sizes.md,
    fullWidth ? "w-100" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const style = {
    fontSize: size === "lg" ? "1rem" : "0.875rem",
    transition: "all 0.15s ease",
    ...variantStyle,
  };

  if (href) {
    return (
      <Link to={href} className={classNames} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames}
      style={{
        ...style,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {children}
    </button>
  );
}
