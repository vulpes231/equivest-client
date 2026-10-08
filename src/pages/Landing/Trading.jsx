import ContextShowcase from "./marketing/ContextShowcase";
import { Link } from "react-router-dom";
import Card from "./ui/Card";
import Button from "./ui/Button";

const TERMINAL_FEATURES = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "Security Search & Discovery",
    desc: "Find any stock, ETF, or options contract using the integrated search bar. Filter by exchange, sector, market cap, or asset type. Each result shows a price summary, analyst rating, and quick-access link to the full Stock Detail view for deeper research.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Live Price Monitoring",
    desc: "Your watchlist displays real-time or delayed prices alongside each security's daily performance. Color-coded gain/loss indicators and mini sparkline graphs let you monitor your tracking list at a glance without leaving the main terminal view.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Order Types & Execution",
    desc: "Place market, limit, stop-loss, stop-limit, and trailing-stop orders from a streamlined order ticket. Review your estimated cost, confirm quantity, and submit — the system routes your order to the best available price automatically.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Active Order & Position Management",
    desc: "Monitor all open orders and current positions from the same view. Cancel or modify pending orders, track filled quantities, and review your average entry price and unrealized P&L in real time.",
  },
];

const PROCESS_STEPS = [
  {
    num: "1",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    label: "Find a Security",
    desc: "Search by name or ticker symbol",
  },
  {
    num: "2",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    label: "Review the Price",
    desc: "Check chart, stats, and analyst ratings",
  },
  {
    num: "3",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    label: "Place an Order",
    desc: "Choose order type, quantity, and confirm",
  },
  {
    num: "4",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    label: "Track Your Position",
    desc: "Monitor P&L and manage open orders",
  },
];

const FEATURES_LEFT = [
  "Candlestick & line charts",
  "60+ technical indicators",
  "Level 2 order book depth",
  "Pre-market & after-hours trading",
  "Fractional shares from $1",
];

const FEATURES_RIGHT = [
  "Market, limit, and advanced order types",
  "Real-time position tracking",
  "Options chains with Greeks",
  "Price alerts & notifications",
  "Commission-free on stocks & ETFs",
];

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Trading() {
  return (
    <div className="container py-5" style={{ maxWidth: "1280px" }}>
      {/* Hero */}
      <section className="mb-5 pb-4" style={{ maxWidth: "768px" }}>
        <p
          className="small fw-semibold text-uppercase mb-3"
          style={{
            color: "var(--accent)",
            letterSpacing: "0.08em",
          }}
        >
          Trading Terminal
        </p>

        <h1
          className="display-5 fw-bold mb-4 lh-sm"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
          }}
        >
          Professional Trading Tools for Every Investor
        </h1>

        <p
          className="fs-5 lh-base mb-3"
          style={{ color: "var(--muted-foreground)" }}
        >
          The Trading Terminal is Equivest's full-featured order execution
          environment. Whether you're placing a simple market order or executing
          a multi-leg options strategy, every tool you need lives in one unified
          workspace — designed to load instantly and stay out of your way.
        </p>

        <p
          className="lh-base mb-0"
          style={{ color: "var(--muted-foreground)" }}
        >
          Built for beginners and experienced traders alike, the Terminal adapts
          to your needs. First-time investors get a guided order flow with clear
          explanations at every step. Active traders get advanced charting,
          Level 2 data, and full options chain access — all without switching
          tools or tabs.
        </p>
      </section>

      {/* What the Terminal includes */}
      <section className="mb-5 pb-4">
        <h2
          className="h2 fw-bold mb-2"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
          }}
        >
          What the Terminal includes
        </h2>

        <p
          className="mb-4"
          style={{
            color: "var(--muted-foreground)",
            maxWidth: "672px",
          }}
        >
          Four core modules covering every phase of the trading workflow.
        </p>

        <div className="row g-4">
          {TERMINAL_FEATURES.map((f) => (
            <div className="col-12 col-sm-6" key={f.title}>
              <Card className="h-100">
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 mb-3"
                  style={{
                    width: "48px",
                    height: "48px",
                    color: "var(--accent)",
                    backgroundColor: "rgba(0,201,167,0.1)",
                  }}
                >
                  {f.icon}
                </div>

                <h3 className="h6 fw-semibold mb-2">{f.title}</h3>

                <p
                  className="small lh-base mb-0"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {f.desc}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Process flow */}
      <section className="mb-5 pb-4">
        <h2
          className="h2 fw-bold mb-2"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
          }}
        >
          How a trade works
        </h2>

        <p
          className="mb-4"
          style={{
            color: "var(--muted-foreground)",
            maxWidth: "672px",
          }}
        >
          Four steps from discovery to position management.
        </p>

        <div className="row g-3">
          {PROCESS_STEPS.map((step) => (
            <div className="col-12 col-sm-6 col-lg-3" key={step.num}>
              <div
                className="border rounded p-4 h-100"
                style={{
                  backgroundColor: "var(--card)",
                  borderColor: "var(--border)",
                  borderRadius: "12px",
                }}
              >
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span
                    className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 fw-bold text-white"
                    style={{
                      width: "28px",
                      height: "28px",
                      fontSize: "0.75rem",
                      background: "linear-gradient(135deg,#1A3A6B,#00C9A7)",
                    }}
                  >
                    {step.num}
                  </span>

                  <span style={{ color: "var(--accent)" }}>{step.icon}</span>
                </div>

                <p className="small fw-semibold mb-1">{step.label}</p>

                <p
                  className="small mb-0"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature list */}
      <section className="mb-5 pb-4">
        <h2
          className="h2 fw-bold mb-4"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
          }}
        >
          Terminal features at a glance
        </h2>

        <Card>
          <div className="row g-4">
            <div className="col-12 col-sm-6">
              <div className="d-flex flex-column gap-3">
                {FEATURES_LEFT.map((f) => (
                  <div key={f} className="d-flex align-items-center gap-2">
                    <span
                      className="flex-shrink-0"
                      style={{ color: "var(--accent)" }}
                    >
                      <CheckIcon />
                    </span>

                    <span className="small">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="d-flex flex-column gap-3">
                {FEATURES_RIGHT.map((f) => (
                  <div key={f} className="d-flex align-items-center gap-2">
                    <span
                      className="flex-shrink-0"
                      style={{ color: "var(--accent)" }}
                    >
                      <CheckIcon />
                    </span>

                    <span className="small">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </section>

      <ContextShowcase
        eyebrow="A calmer workflow"
        title="Turn market information into a considered decision"
        description="The terminal brings discovery, research, order planning, and review into one clear sequence so every action has context."
        variant="trading"
        points={[
          {
            title: "Observe",
            description: "Build a view before opening an order.",
          },
          {
            title: "Plan",
            description: "Set an order type and risk boundary.",
          },
          {
            title: "Review",
            description: "Confirm the full instruction before action.",
          },
        ]}
      />

      {/* CTA */}
      <section
        className="border rounded p-4 p-md-5 text-center"
        style={{
          backgroundColor: "var(--card)",
          borderColor: "var(--border)",
          borderRadius: "12px",
        }}
      >
        <h2
          className="h2 fw-bold mb-3"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
          }}
        >
          Open a Trading Account
        </h2>

        <p className="mb-4" style={{ color: "var(--muted-foreground)" }}>
          No minimums. Commission-free stocks and ETFs. Start in minutes.
        </p>

        <Link to="/signup">
          <Button>Open a Trading Account</Button>
        </Link>
      </section>
    </div>
  );
}
