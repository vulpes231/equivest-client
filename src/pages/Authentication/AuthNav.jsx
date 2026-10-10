import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { BRAND } from "../Landing/data/config";

export default function AuthNav({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className="fixed-top w-100 bg-body"
      style={{
        zIndex: 1030,
        transition: "all 0.3s ease",
        background: scrolled ? "var(--card)" : "transparent",
        boxShadow: scrolled ? "0 10px 25px rgba(0, 0, 0, 0.05)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="container-fluid">
        <div
          className="d-flex align-items-center justify-content-between"
          style={{
            maxWidth: "1280px",
            height: "64px",
            margin: "0 auto",
            padding: "0 1rem",
          }}
        >
          {/* Logo */}

          <Link
            to="/"
            className="d-flex align-items-center gap-2 text-decoration-none flex-shrink-0"
            style={{ color: "var(--foreground)" }}
          >
            <div
              className="rounded-3 d-flex align-items-center justify-content-center"
              style={{
                width: "32px",
                height: "32px",
                background: "linear-gradient(135deg,#1A3A6B,#00C9A7)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M3 13L7 9L10 12L15 5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <circle cx="15" cy="5" r="2" fill="#00C9A7" />
              </svg>
            </div>

            <span
              className="text-lg"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              {BRAND.name}
            </span>
          </Link>

          <div className="d-flex align-items-center gap-2">
            {/* Dark mode */}

            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="btn border-0 d-flex align-items-center justify-content-center rounded"
              style={{
                width: "56px",
                height: "56px",
                color: "var(--muted-foreground)",
              }}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg
                  width="15"
                  height="15"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="5" />

                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg
                  width="15"
                  height="15"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>

            {/* Desktop auth buttons */}

            <div className="d-none d-sm-flex align-items-center gap-2">
              <Link
                to="/login"
                className="btn text-decoration-none"
                style={{
                  padding: "6px 16px",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  borderRadius: "6px",
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                  background: "transparent",
                }}
              >
                Log In
              </Link>

              <Link
                to="/register"
                className="btn text-white text-decoration-none"
                style={{
                  padding: "6px 16px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  borderRadius: "6px",
                  background: "linear-gradient(135deg,#1A3A6B,#00C9A7)",
                }}
              >
                Create Account
              </Link>
            </div>

            {/* Mobile menu button */}

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="btn border-0 d-lg-none d-flex align-items-center justify-content-center rounded"
              style={{
                width: "36px",
                height: "36px",
                color: "var(--muted-foreground)",
              }}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? (
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}

      {menuOpen && (
        <div
          className="d-lg-none border-top"
          style={{
            background: "var(--card)",
            borderColor: "var(--border)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <div
            className="px-3 py-3"
            style={{
              maxHeight: "75vh",
              overflowY: "auto",
            }}
          >
            {/* {NAV_GROUPS.map((group) => (
              <NavDropdown key={group.label} group={group} isMobile />
            ))} */}

            <div
              className="d-flex gap-2 pt-3 mt-2 border-top"
              style={{
                borderColor: "var(--border)",
              }}
            >
              <Link
                to="/login"
                className="btn flex-fill text-decoration-none"
                style={{
                  padding: "8px",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  borderRadius: "6px",
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                }}
              >
                Log In
              </Link>

              <Link
                to="/register"
                className="btn flex-fill text-white text-decoration-none"
                style={{
                  padding: "8px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  borderRadius: "6px",
                  background: "linear-gradient(135deg,#1A3A6B,#00C9A7)",
                }}
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
