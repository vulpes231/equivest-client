import ContextShowcase from "./marketing/ContextShowcase";
import { Link } from "react-router-dom";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Badge from "./ui/Badge";
import { HOLDINGS } from "./data/config";

const ETFS = [
  { symbol: "VTI", name: "Vanguard Total Market ETF", expense: "0.03%" },
  { symbol: "VOO", name: "Vanguard S&P 500 ETF", expense: "0.03%" },
  { symbol: "QQQ", name: "Invesco QQQ ETF", expense: "0.20%" },
  { symbol: "VYM", name: "Vanguard High Div. Yield ETF", expense: "0.06%" },
  { symbol: "BND", name: "Vanguard Total Bond Market ETF", expense: "0.03%" },
];

const FEATURES = [
  {
    title: "Monitor Your Portfolio",
    desc: "See the current value, daily change, and total return of your portfolio at any time. Holdings are grouped by asset type and sector, so you always know where your money is and how it's performing.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 16l3-4 3 3 3-5" />
      </svg>
    ),
  },
  {
    title: "Track Investment Activity",
    desc: "Every buy, sell, dividend payment, and fee is logged automatically. Your activity feed shows a complete transaction history with dates, quantities, prices, and account labels for easy record-keeping.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Analyze Performance",
    desc: "Compare your portfolio's performance against benchmark indices over any time period. Attribution analysis breaks down which positions contributed positively or negatively to your overall return.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Manage Your Accounts",
    desc: "Switch between your brokerage account, retirement accounts, and automated portfolios from one dashboard. Each account shows its own balance, performance, and holdings independently.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    title: "Get Investment Insights",
    desc: "Equivest surfaces relevant alerts, rebalancing suggestions, and diversification tips based on your actual portfolio — not generic advice. Insights appear when they're relevant, not constantly.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
];

const MOCK_HOLDINGS = [
  { initial: "A", name: "Apple Inc.", ticker: "AAPL", alloc: 28 },
  { initial: "M", name: "Microsoft Corp.", ticker: "MSFT", alloc: 22 },
  { initial: "N", name: "NVIDIA Corp.", ticker: "NVDA", alloc: 19 },
  { initial: "V", name: "Vanguard Total Market ETF", ticker: "VTI", alloc: 14 },
];

const sectionContainer = {
  maxWidth: "1280px",
};

const sectionLabelStyle = {
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.08em",
  color: "var(--accent)",
};

const headingStyle = {
  fontFamily: "'Nunito', sans-serif",
  fontWeight: 700,
  color: "var(--foreground)",
};

const mutedTextStyle = {
  color: "var(--muted-foreground)",
};

export default function InvestingOut() {
  return (
    <div>
      {/* Hero */}
      <section className="container pt-5 pb-2" style={sectionContainer}>
        <p className="text-uppercase mb-3" style={sectionLabelStyle}>
          Investing Dashboard
        </p>

        <h1
          className="display-5 fw-bold mb-4"
          style={{
            ...headingStyle,
            maxWidth: "700px",
          }}
        >
          Your Portfolio, Clearly Organized
        </h1>

        <p
          className="mb-3 lh-lg"
          style={{
            ...mutedTextStyle,
            maxWidth: "700px",
          }}
        >
          The Investing Dashboard is your central hub for monitoring and
          managing your investment portfolio. Every holding, every transaction,
          and every insight is organized into a single clear view — designed to
          help you stay informed and make confident decisions.
        </p>

        <p
          className="mb-0 lh-lg"
          style={{
            ...mutedTextStyle,
            maxWidth: "700px",
          }}
        >
          Whether you hold a handful of stocks or a multi-account portfolio
          spanning different asset classes, the dashboard brings everything
          together in one place. You see what you own, how it's performing, and
          what actions are available to you — without having to navigate between
          separate tools.
        </p>
      </section>

      {/* What the Dashboard helps you do */}
      <section className="container mt-5" style={sectionContainer}>
        <p className="text-uppercase mb-2" style={sectionLabelStyle}>
          Features
        </p>

        <h2 className="h2 fw-bold mb-4" style={headingStyle}>
          What the Dashboard helps you do
        </h2>

        <div className="row g-4">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className={`col-12 col-sm-6 col-lg-4 ${
                index === 4 ? "offset-lg-0" : ""
              }`}
            >
              <Card>
                <div
                  className="d-flex align-items-center justify-content-center rounded mb-4"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(0,201,167,0.1)",
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  {feature.icon}
                </div>

                <h3
                  className="mb-2"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--foreground)",
                  }}
                >
                  {feature.title}
                </h3>

                <p className="small lh-lg mb-0" style={mutedTextStyle}>
                  {feature.desc}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard UI mockup */}
      <section className="container mt-5" style={sectionContainer}>
        <p className="text-uppercase mb-2" style={sectionLabelStyle}>
          Preview
        </p>

        <h2 className="h2 fw-bold mb-2" style={headingStyle}>
          Dashboard at a glance
        </h2>

        <p
          className="small mb-4"
          style={{
            ...mutedTextStyle,
            maxWidth: "576px",
          }}
        >
          A simplified illustration of the Investing Dashboard layout. Actual
          data reflects your live portfolio once you open an account.
        </p>

        <Card
          className="border-2"
          padding="none"
          style={{
            maxWidth: "768px",
          }}
        >
          {/* Mockup header */}
          <div
            className="px-4 py-3 border-bottom d-flex align-items-center justify-content-between"
            style={{ borderColor: "var(--border)" }}
          >
            <div>
              <p className="mb-1 small" style={{ fontWeight: 600 }}>
                My Portfolio
              </p>

              <p
                className="mb-0"
                style={{
                  fontSize: "0.75rem",
                  color: "var(--muted-foreground)",
                }}
              >
                Individual Brokerage · As of today
              </p>
            </div>

            <div className="d-flex gap-2">
              <span
                className="px-2 py-1 rounded"
                style={{
                  fontSize: "0.75rem",
                  backgroundColor: "var(--secondary)",
                  color: "var(--muted-foreground)",
                }}
              >
                1D
              </span>

              <span
                className="px-2 py-1 rounded"
                style={{
                  fontSize: "0.75rem",
                  backgroundColor: "var(--accent)",
                  color: "#fff",
                  fontWeight: 500,
                }}
              >
                1M
              </span>

              <span
                className="px-2 py-1 rounded"
                style={{
                  fontSize: "0.75rem",
                  backgroundColor: "var(--secondary)",
                  color: "var(--muted-foreground)",
                }}
              >
                1Y
              </span>
            </div>
          </div>

          {/* Stat tiles */}
          <div
            className="row g-0 border-bottom"
            style={{ borderColor: "var(--border)" }}
          >
            {[
              { label: "Total Value", note: "Your portfolio" },
              { label: "Today's Change", note: "vs. yesterday" },
              { label: "Total Return", note: "All-time" },
            ].map((tile, index) => (
              <div
                key={tile.label}
                className={`col-4 px-4 py-3 ${index > 0 ? "border-start" : ""}`}
                style={{
                  borderColor: "var(--border)",
                }}
              >
                <p
                  className="mb-1"
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {tile.label}
                </p>

                <p
                  className="mb-0 fs-5 fw-bold"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    color: "var(--muted-foreground)",
                  }}
                >
                  — —
                </p>

                <p
                  className="mb-0 mt-1"
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {tile.note}
                </p>
              </div>
            ))}
          </div>

          {/* Holdings mock rows */}
          <div>
            {MOCK_HOLDINGS.map((holding) => (
              <div
                key={holding.ticker}
                className="px-4 py-3 border-bottom d-flex align-items-center gap-3"
                style={{ borderColor: "var(--border)" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded fw-bold"
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "var(--secondary)",
                    color: "var(--primary)",
                    fontSize: "0.75rem",
                    flexShrink: 0,
                  }}
                >
                  {holding.initial}
                </div>

                <div className="flex-grow-1 min-w-0" style={{ minWidth: 0 }}>
                  <p
                    className="mb-0 text-truncate"
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                    }}
                  >
                    {holding.name}
                  </p>

                  <p
                    className="mb-0"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {holding.ticker}
                  </p>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div
                    className="d-none d-sm-block rounded-pill"
                    style={{
                      width: "80px",
                      height: "6px",
                      backgroundColor: "var(--muted)",
                    }}
                  >
                    <div
                      className="rounded-pill"
                      style={{
                        width: `${holding.alloc}%`,
                        height: "6px",
                        backgroundColor: "var(--accent)",
                      }}
                    />
                  </div>

                  <span
                    className="text-end"
                    style={{
                      width: "32px",
                      fontSize: "0.75rem",
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    —%
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="px-4 py-3">
            <p
              className="mb-0 text-center fst-italic"
              style={{
                fontSize: "0.75rem",
                color: "var(--muted-foreground)",
              }}
            >
              Illustrative layout only — not real portfolio data
            </p>
          </div>
        </Card>
      </section>

      {/* How the Dashboard is organized */}
      <section className="container mt-5" style={sectionContainer}>
        <p className="text-uppercase mb-2" style={sectionLabelStyle}>
          Structure
        </p>

        <h2 className="h2 fw-bold mb-4" style={headingStyle}>
          How the Dashboard is organized
        </h2>

        <div className="row g-4">
          {[
            {
              num: "1",
              title: "Holdings View",
              desc: "Your current positions grouped by asset class. Each row shows the security name, number of shares, current price, allocation percentage, and unrealized gain or loss.",
            },
            {
              num: "2",
              title: "Performance View",
              desc: "Historical charts, benchmark comparisons, and attribution reporting. Understand not just what happened, but why — which positions drove your returns and which dragged on them.",
            },
            {
              num: "3",
              title: "Activity & Reports",
              desc: "A full transaction history, dividend income log, tax reports, and account statements. Everything you need for personal record-keeping and tax preparation is in one place.",
            },
          ].map((column) => (
            <div key={column.num} className="col-12 col-sm-4">
              <div
                className="d-flex align-items-center justify-content-center rounded-circle text-white fw-bold mb-3"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "var(--primary)",
                  fontSize: "0.875rem",
                }}
              >
                {column.num}
              </div>

              <h3
                className="mb-2"
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                }}
              >
                {column.title}
              </h3>

              <p className="small lh-lg mb-0" style={mutedTextStyle}>
                {column.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Holdings table */}
      <section className="container mt-5" style={sectionContainer}>
        <p className="text-uppercase mb-2" style={sectionLabelStyle}>
          Example holdings
        </p>

        <h2 className="h2 fw-bold mb-2" style={headingStyle}>
          Holdings table
        </h2>

        <p
          className="small mb-4"
          style={{
            ...mutedTextStyle,
            maxWidth: "576px",
          }}
        >
          The Holdings view displays each position with full context — shares
          held, average cost, current value, and allocation weight within your
          total portfolio.
        </p>

        <Card padding="none">
          <div
            className="p-4 border-bottom"
            style={{ borderColor: "var(--border)" }}
          >
            <h3
              className="mb-1"
              style={{
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              My Holdings
            </h3>

            <p
              className="mb-0"
              style={{
                fontSize: "0.75rem",
                color: "var(--muted-foreground)",
              }}
            >
              Illustrative example — sample data only
            </p>
          </div>

          <div className="table-responsive">
            <table
              className="table table-borderless align-middle mb-0"
              style={{
                minWidth: "850px",
                color: "var(--foreground)",
              }}
            >
              <thead>
                <tr
                  style={{
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {[
                    "Asset",
                    "Shares",
                    "Avg Cost",
                    "Current Value",
                    "24H P&L",
                    "Total P&L",
                    "Allocation",
                  ].map((heading) => (
                    <th
                      key={heading}
                      className="px-3 py-3 text-nowrap"
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--muted-foreground)",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {HOLDINGS.map((holding) => (
                  <tr
                    key={holding.symbol}
                    style={{
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    <td className="px-3 py-3">
                      <div className="d-flex align-items-center gap-3">
                        <div
                          className="d-flex align-items-center justify-content-center rounded fw-bold"
                          style={{
                            width: "32px",
                            height: "32px",
                            backgroundColor: "var(--secondary)",
                            color: "var(--primary)",
                            fontSize: "0.75rem",
                          }}
                        >
                          {holding.symbol[0]}
                        </div>

                        <div>
                          <p
                            className="mb-0"
                            style={{
                              fontWeight: 600,
                              color: "var(--primary)",
                            }}
                          >
                            {holding.symbol}
                          </p>

                          <p
                            className="mb-0 text-nowrap"
                            style={{
                              fontSize: "0.75rem",
                              color: "var(--muted-foreground)",
                            }}
                          >
                            {holding.name}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td
                      className="px-3 py-3"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.875rem",
                      }}
                    >
                      {holding.shares}
                    </td>

                    <td
                      className="px-3 py-3"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.875rem",
                      }}
                    >
                      {holding.avgCost}
                    </td>

                    <td
                      className="px-3 py-3"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                      }}
                    >
                      {holding.currentValue}
                    </td>

                    <td className="px-3 py-3">
                      <Badge variant={holding.up ? "gain" : "loss"}>
                        {holding.gainPct}
                      </Badge>
                    </td>

                    <td
                      className="px-3 py-3"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.875rem",
                      }}
                    >
                      {holding.gain}
                    </td>

                    <td className="px-3 py-3">
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="rounded-pill flex-grow-1"
                          style={{
                            width: "64px",
                            maxWidth: "64px",
                            height: "6px",
                            backgroundColor: "var(--muted)",
                          }}
                        >
                          <div
                            className="rounded-pill"
                            style={{
                              width: `${holding.allocation}%`,
                              height: "6px",
                              backgroundColor: "var(--accent)",
                            }}
                          />
                        </div>

                        <span
                          className="text-nowrap"
                          style={{
                            fontSize: "0.75rem",
                            fontFamily: "'JetBrains Mono', monospace",
                            color: "var(--muted-foreground)",
                          }}
                        >
                          {holding.allocation}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* ETFs */}
      <section className="container mt-5" style={sectionContainer}>
        <p className="text-uppercase mb-2" style={sectionLabelStyle}>
          ETFs
        </p>

        <h2 className="h2 fw-bold mb-2" style={headingStyle}>
          Featured on our platform
        </h2>

        <p
          className="small mb-4"
          style={{
            ...mutedTextStyle,
            maxWidth: "576px",
          }}
        >
          Equivest offers access to thousands of exchange-traded funds. These
          are a selection of commonly held, low-cost ETFs available for trading
          and for use within Auto Investing portfolios.
        </p>

        <Card padding="none">
          <div>
            {ETFS.map((etf) => (
              <div
                key={etf.symbol}
                className="px-4 py-3 d-flex align-items-center gap-3 border-bottom"
                style={{
                  borderColor: "var(--border)",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded fw-bold"
                  style={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: "var(--secondary)",
                    color: "var(--primary)",
                    fontSize: "0.75rem",
                    flexShrink: 0,
                  }}
                >
                  {etf.symbol[0]}
                </div>

                <div className="flex-grow-1">
                  <p
                    className="mb-1"
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                    }}
                  >
                    {etf.symbol}
                  </p>

                  <p
                    className="mb-0"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {etf.name}
                  </p>
                </div>

                <div className="text-end">
                  <p
                    className="mb-1"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    Expense ratio
                  </p>

                  <p
                    className="mb-0"
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--gain)",
                    }}
                  >
                    {etf.expense}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <div className="container mt-5" style={sectionContainer}>
        <ContextShowcase
          eyebrow="Portfolio context"
          title="Keep every holding connected to a purpose"
          description="A useful portfolio view explains not only what you own, but how each part contributes to diversification, progress, and long-term goals."
          variant="investing"
          points={[
            {
              title: "Organize",
              description: "Group holdings by role and asset type.",
            },
            {
              title: "Understand",
              description: "See allocation and concentration clearly.",
            },
            {
              title: "Adjust",
              description: "Review changes against your original goal.",
            },
          ]}
          contained
        />
      </div>

      {/* CTA strip */}
      <section className="container pt-5 pb-5" style={sectionContainer}>
        <div
          className="rounded p-4 p-md-5 text-center"
          style={{
            background: "linear-gradient(135deg, #0B1426, #1A3A6B)",
          }}
        >
          <h2
            className="h2 fw-bold text-white mb-3"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
            }}
          >
            Ready to start investing?
          </h2>

          <p
            className="small mx-auto mb-4"
            style={{
              maxWidth: "448px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Open an Equivest brokerage account and get access to the full
            Investing Dashboard, commission-free trading, and real-time
            portfolio analytics.
          </p>

          <Button href="/signup" size="lg">
            Open Your Investing Account
          </Button>
        </div>
      </section>
    </div>
  );
}
