import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { BRAND } from "./data/config";

import {
  IconBarChart,
  IconZap,
  IconSearch,
  IconBriefcase,
  IconCpu,
  IconLandmark,
  IconDollarSign,
  IconTrendingUp,
  IconGlobe,
  IconSettings,
  IconCoins,
  IconFileText,
  IconGem,
  IconLayout,
  IconLock,
  IconBookOpen,
  IconHelpCircle,
  IconMessageSquare,
} from "./ui/Icons";

const NAV_GROUPS = [
  {
    label: "Trade",
    items: [
      {
        label: "Markets Overview",
        href: "/markets",
        icon: <IconBarChart />,
        desc: "Live indices, stocks, gainers & losers",
      },
      {
        label: "Trading Terminal",
        href: "/trading",
        icon: <IconZap />,
        desc: "Professional charts, orders & watchlist",
      },
      {
        label: "Stock Detail",
        href: "/stocks/AAPL",
        icon: <IconSearch />,
        desc: "Deep-dive on any stock or ETF",
      },
    ],
  },
  {
    label: "Invest",
    items: [
      {
        label: "Investing",
        href: "/investing",
        icon: <IconBriefcase />,
        desc: "Build a long-term portfolio",
      },
      {
        label: "Automated Investing",
        href: "/auto-investing",
        icon: <IconCpu />,
        desc: "Set goals and invest on autopilot",
      },
      {
        label: "Retirement Accounts",
        href: "/retirement",
        icon: <IconLandmark />,
        desc: "IRA, Roth IRA & 401(k) rollovers",
      },
    ],
  },
  {
    label: "Products",
    items: [
      {
        label: "Cash Management",
        href: "/products/cash",
        icon: <IconDollarSign />,
        desc: "Earn 4.75% APY on uninvested cash",
      },
      {
        label: "U.S. Stocks",
        href: "/products/stocks",
        icon: <IconTrendingUp />,
        desc: "$0 commissions on 8,000+ stocks & ETFs",
      },
      {
        label: "ETFs",
        href: "/products/etfs",
        icon: <IconGlobe />,
        desc: "Diversify instantly with commission-free ETFs",
      },
      {
        label: "Options Trading",
        href: "/products/options",
        icon: <IconSettings />,
        desc: "Calls, puts & spreads at $0.55/contract",
      },
      {
        label: "Cryptocurrencies",
        href: "/products/crypto",
        icon: <IconCoins />,
        desc: "Bitcoin, Ethereum & 10+ digital assets",
      },
      {
        label: "Bonds & Fixed Income",
        href: "/products/bonds",
        icon: <IconFileText />,
        desc: "Treasuries, corporate & municipal bonds",
      },
      {
        label: "Commodities",
        href: "/products/commodities",
        icon: <IconGem />,
        desc: "Gold, oil, agriculture & industrial metals",
      },
    ],
  },
  {
    label: "Platform",
    items: [
      {
        label: "Features",
        href: "/features",
        icon: <IconLayout />,
        desc: "Full platform feature breakdown",
      },
      {
        label: "Security",
        href: "/security",
        icon: <IconLock />,
        desc: "How we protect your account & data",
      },
    ],
  },
  {
    label: "Learn",
    items: [
      {
        label: "Education Center",
        href: "/learn",
        icon: <IconBookOpen />,
        desc: "Guides, articles & video courses",
      },
      {
        label: "FAQ",
        href: "/faq",
        icon: <IconHelpCircle />,
        desc: "Answers to common questions",
      },
      {
        label: "About Us",
        href: "/about",
        icon: <IconBriefcase />,
        desc: "Our mission, team & technology",
      },
      {
        label: "Contact",
        href: "/contact-us",
        icon: <IconMessageSquare />,
        desc: "Support, chat & help center",
      },
    ],
  },
];

function NavDropdown({ group, isMobile = false }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  const isActive = group.items.some((item) => location.pathname === item.href);

  useEffect(() => {
    const handler = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  if (isMobile) {
    return (
      <div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="btn btn-link text-decoration-none w-100 d-flex align-items-center justify-content-between px-3 py-2 rounded text-start"
          style={{
            color: isActive ? "var(--accent)" : "var(--muted-foreground)",
            fontSize: "0.875rem",
            fontWeight: 500,
          }}
        >
          <span>{group.label}</span>

          <svg
            width="14"
            height="14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            style={{
              transition: "transform 0.2s ease",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {open && (
          <div className="ps-3 mt-1">
            {group.items.map((item) => {
              const active = location.pathname === item.href;

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className="d-flex align-items-center gap-2 text-decoration-none px-3 py-2 rounded mb-1"
                  style={{
                    fontSize: "0.875rem",
                    color: active ? "var(--accent)" : "var(--muted-foreground)",
                    background: active ? "var(--secondary)" : "transparent",
                    transition: "all 0.15s ease",
                  }}
                >
                  <span
                    className="flex-shrink-0 d-flex align-items-center justify-content-center"
                    style={{
                      width: "16px",
                      height: "16px",
                    }}
                  >
                    {item.icon}
                  </span>

                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="position-relative"
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        className="btn border-0 d-flex align-items-center gap-1 px-3 py-2 rounded"
        style={{
          fontSize: "0.875rem",
          fontWeight: 500,
          color: isActive || open ? "var(--accent)" : "var(--muted-foreground)",
          background: isActive || open ? "var(--secondary)" : "transparent",
          transition: "all 0.15s ease",
        }}
      >
        {group.label}

        {!(location.pathname === "/markets" && group.label === "Trade") && (
          <svg
            width="12"
            height="12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            style={{
              transition: "transform 0.2s ease",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        )}
      </button>

      {open && (
        <>
          {/* Invisible bridge keeps hover area continuous */}
          <div
            className="position-absolute start-0 end-0"
            style={{
              top: "100%",
              height: "8px",
            }}
          />

          <div
            className="position-absolute bg-body border rounded shadow-lg overflow-hidden"
            style={{
              top: "calc(100% + 4px)",
              left: 0,
              zIndex: 1050,
              width: group.label === "Products" ? "288px" : "256px",
              background: "var(--card)",
              borderColor: "var(--border)",
              animation: "fadeIn 0.15s ease",
            }}
          >
            <div className="p-2">
              {group.items.map((item) => {
                const active = location.pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="d-flex align-items-start gap-3 text-decoration-none px-3 py-2 rounded mb-1"
                    style={{
                      color: active ? "var(--primary)" : "var(--foreground)",
                      background: active ? "var(--secondary)" : "transparent",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <span
                      className="flex-shrink-0 d-flex align-items-center justify-content-center"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginTop: "2px",
                        color: "var(--accent)",
                      }}
                    >
                      {item.icon}
                    </span>

                    <div>
                      <p
                        className="mb-0"
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          lineHeight: 1.2,
                        }}
                      >
                        {item.label}
                      </p>

                      <p
                        className="mb-0 mt-1"
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--muted-foreground)",
                          lineHeight: 1.35,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function Navbar({ darkMode, setDarkMode }) {
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
      className="fixed-top w-100"
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

          {/* Desktop navigation */}

          <div className="d-none d-lg-flex align-items-center gap-1">
            {NAV_GROUPS.map((group) => (
              <NavDropdown key={group.label} group={group} />
            ))}
          </div>

          {/* Right actions */}

          <div className="d-flex align-items-center gap-2">
            {/* Dark mode */}

            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="btn border-0 d-flex align-items-center justify-content-center rounded"
              style={{
                width: "36px",
                height: "36px",
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
                to="/signup"
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
            {NAV_GROUPS.map((group) => (
              <NavDropdown key={group.label} group={group} isMobile />
            ))}

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
                to="/signup"
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
