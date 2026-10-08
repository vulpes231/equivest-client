import { useState } from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";

const ENDPOINTS = [
  {
    group: "Portfolio",
    color: "#1A3A6B",
    routes: [
      {
        method: "GET",
        path: "/v1/portfolio",
        desc: "Returns current portfolio value, positions, cash balance, and total return for the authenticated account.",
      },
      {
        method: "GET",
        path: "/v1/portfolio/holdings",
        desc: "Returns all current holdings with quantity, average cost, current price, market value, and unrealized P&L.",
      },
      {
        method: "GET",
        path: "/v1/portfolio/history",
        desc: "Returns historical portfolio value over time. Supports ?period=1D|1W|1M|3M|1Y|ALL.",
      },
      {
        method: "GET",
        path: "/v1/portfolio/performance",
        desc: "Returns time-weighted return, alpha, beta, Sharpe ratio, and sector allocation data.",
      },
    ],
  },
  {
    group: "Orders",
    color: "#00C9A7",
    routes: [
      {
        method: "POST",
        path: "/v1/orders",
        desc: "Submit a new order. Supports market, limit, stop, stop-limit, and trailing stop order types for equities and options.",
      },
      {
        method: "GET",
        path: "/v1/orders",
        desc: "Returns a paginated list of all orders. Filter by status (open, filled, cancelled) and date range.",
      },
      {
        method: "GET",
        path: "/v1/orders/:id",
        desc: "Returns full detail for a single order including execution report and fill information.",
      },
      {
        method: "DELETE",
        path: "/v1/orders/:id",
        desc: "Cancels an open order. Returns 409 if the order has already been filled or is in a terminal state.",
      },
    ],
  },
  {
    group: "Market Data",
    color: "#2D6EFF",
    routes: [
      {
        method: "GET",
        path: "/v1/quotes/:symbol",
        desc: "Returns real-time quote for a symbol including bid, ask, last price, volume, and daily change. Real-time on Professional and Wealth plans; 15-minute delay on Starter.",
      },
      {
        method: "GET",
        path: "/v1/quotes/batch",
        desc: "Returns quotes for multiple symbols in one request. Pass symbols as comma-separated query param: ?symbols=AAPL,MSFT,NVDA.",
      },
      {
        method: "GET",
        path: "/v1/bars/:symbol",
        desc: "Returns historical OHLCV candlestick data. Supports ?timeframe=1m|5m|15m|1h|1d|1w|1mo&from=ISO8601&to=ISO8601.",
      },
      {
        method: "GET",
        path: "/v1/options/:symbol/chain",
        desc: "Returns the full options chain for a symbol with all expirations, strikes, bid/ask, IV, and Greeks (Δ Γ Θ V Ρ).",
      },
    ],
  },
  {
    group: "Account",
    color: "#8B5CF6",
    routes: [
      {
        method: "GET",
        path: "/v1/account",
        desc: "Returns account status, buying power, cash balance, equity value, and margin information.",
      },
      {
        method: "GET",
        path: "/v1/account/activities",
        desc: "Returns a paginated log of all account activities including trades, dividends, transfers, and fees.",
      },
      {
        method: "GET",
        path: "/v1/account/watchlists",
        desc: "Returns all saved watchlists with their symbols.",
      },
      {
        method: "POST",
        path: "/v1/account/watchlists",
        desc: "Creates a new watchlist or adds symbols to an existing one.",
      },
    ],
  },
];

const METHOD_COLORS = {
  GET: {
    bg: "rgba(16,185,129,0.12)",
    text: "#10B981",
  },
  POST: {
    bg: "rgba(45,110,255,0.12)",
    text: "#2D6EFF",
  },
  DELETE: {
    bg: "rgba(239,68,68,0.12)",
    text: "#EF4444",
  },
  PUT: {
    bg: "rgba(245,158,11,0.12)",
    text: "#F59E0B",
  },
};

const CODE_EXAMPLES = {
  curl: `curl -X GET https://api.equivestmarket.com/v1/portfolio \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,

  python: `import requests

api_key = "YOUR_API_KEY"
headers = {"Authorization": f"Bearer {api_key}"}

response = requests.get(
    "https://api.equivestmarket.com/v1/portfolio",
    headers=headers
)

portfolio = response.json()
print(f"Total value: {portfolio['total_value']}")`,

  javascript: `const response = await fetch(
  'https://api.equivestmarket.com/v1/portfolio',
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    }
  }
);

const portfolio = await response.json();
console.log('Total value:', portfolio.total_value);`,
};

export default function ApiDocs() {
  const [activeTab, setActiveTab] = useState("curl");

  const quickstartSteps = [
    {
      step: "01",
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
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
        </svg>
      ),
      title: "Get Your API Key",
      desc: "Subscribe to a Professional or Wealth plan. Generate your API key from Account Settings → Developer → API Keys. Keys are scoped to read-only or trading permissions.",
    },
    {
      step: "02",
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
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      title: "Make Your First Request",
      desc: "Set your Authorization header to 'Bearer YOUR_API_KEY'. All requests are to https://api.equivestmarket.com. The base URL is versioned — all current endpoints use /v1/.",
    },
    {
      step: "03",
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
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        </svg>
      ),
      title: "Subscribe to Streams",
      desc: "For real-time data, connect to the WebSocket endpoint at wss://stream.equivestmarket.com/v1. Subscribe to quote streams, order updates, and account events with a single connection.",
    },
  ];

  const rateLimits = [
    {
      plan: "Starter",
      rest: "—",
      ws: "—",
      history: "—",
      access: "No API Access",
    },
    {
      plan: "Professional",
      rest: "200 / min",
      ws: "50 symbols",
      history: "2 years",
      access: "Read + Trade",
    },
    {
      plan: "Wealth",
      rest: "1,000 / min",
      ws: "500 symbols",
      history: "20 years",
      access: "Read + Trade + Admin",
    },
  ];

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="row g-5 align-items-center mb-5">
        <div className="col-lg-6">
          <p
            className="text-uppercase mb-3"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "var(--accent)",
            }}
          >
            Developer API
          </p>

          <h1
            className="mb-4"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "clamp(2.25rem, 5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Build on the
            <br />
            Equivest Platform
          </h1>

          <p
            className="fs-5 lh-lg mb-3"
            style={{ color: "var(--muted-foreground)" }}
          >
            The Equivest API gives developers programmatic access to real-time
            market data, order submission, portfolio analytics, and account
            management — the same data that powers the Equivest web and mobile
            apps.
          </p>

          <p
            className="lh-lg mb-4"
            style={{ color: "var(--muted-foreground)" }}
          >
            Available to all Professional and Wealth plan subscribers. RESTful
            JSON API with WebSocket streaming for real-time quotes and order
            updates. Rate limits scale with your plan tier.
          </p>

          <div className="d-flex flex-wrap gap-3">
            <Button href="/signup" size="lg">
              Get API Access
            </Button>

            <Button
              variant="outline"
              size="lg"
              href="mailto:api@equivestmarket.com"
            >
              Contact Developer Support
            </Button>
          </div>
        </div>

        <div className="col-lg-6">
          <div
            className="rounded overflow-hidden border"
            style={{
              backgroundColor: "#0B1426",
              borderColor: "var(--border)",
            }}
          >
            <div
              className="d-flex align-items-center gap-2 px-4 py-3 border-bottom"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            >
              {["curl", "python", "javascript"].map((tab) => {
                const isActive = activeTab === tab;

                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className="border-0 rounded px-3 py-1"
                    style={{
                      backgroundColor: isActive
                        ? "rgba(255,255,255,0.1)"
                        : "transparent",
                      color: isActive ? "#fff" : "rgba(255,255,255,0.4)",
                      fontSize: "0.75rem",
                      fontFamily: "'JetBrains Mono', monospace",
                      transition: "all 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                      }
                    }}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            <pre
              className="mb-0 p-4 overflow-auto"
              style={{
                color: "#00C9A7",
                fontSize: "0.75rem",
                lineHeight: 1.625,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <code>{CODE_EXAMPLES[activeTab]}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Quickstart */}
      <section className="mb-5">
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "1.5rem",
            fontWeight: 700,
          }}
        >
          Getting Started
        </h2>

        <div className="row g-4">
          {quickstartSteps.map((step) => (
            <div className="col-md-4" key={step.step}>
              <Card>
                <div
                  className="rounded d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "36px",
                    height: "36px",
                    color: "var(--accent)",
                    backgroundColor: "rgba(0,201,167,0.1)",
                  }}
                >
                  {step.icon}
                </div>

                <p
                  className="mb-1"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                  }}
                >
                  STEP {step.step}
                </p>

                <h3
                  className="mb-2"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--foreground)",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  className="mb-0"
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.625,
                    color: "var(--muted-foreground)",
                  }}
                >
                  {step.desc}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Endpoints */}
      <section className="mb-5">
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "1.5rem",
            fontWeight: 700,
          }}
        >
          API Reference
        </h2>

        <div className="d-flex flex-column gap-4">
          {ENDPOINTS.map((group) => (
            <div key={group.group}>
              <div className="d-flex align-items-center gap-3 mb-3">
                <div
                  className="rounded-pill"
                  style={{
                    width: "8px",
                    height: "24px",
                    backgroundColor: group.color,
                  }}
                />

                <h3
                  className="mb-0"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                  }}
                >
                  {group.group}
                </h3>
              </div>

              <div className="d-flex flex-column gap-2">
                {group.routes.map((route) => {
                  const methodStyle =
                    METHOD_COLORS[route.method] || METHOD_COLORS.GET;

                  return (
                    <div
                      key={route.path}
                      className="d-flex flex-wrap align-items-start gap-3 p-3 rounded border"
                      style={{
                        backgroundColor: "var(--card)",
                        borderColor: "var(--border)",
                        transition: "background-color 0.15s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "var(--muted)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "var(--card)";
                      }}
                    >
                      <span
                        className="rounded flex-shrink-0"
                        style={{
                          padding: "4px 8px",
                          marginTop: "2px",
                          backgroundColor: methodStyle.bg,
                          color: methodStyle.text,
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {route.method}
                      </span>

                      <code
                        className="flex-shrink-0"
                        style={{
                          marginTop: "2px",
                          color: "var(--accent)",
                          fontSize: "0.875rem",
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {route.path}
                      </code>

                      <p
                        className="mb-0 flex-grow-1"
                        style={{
                          color: "var(--muted-foreground)",
                          fontSize: "0.875rem",
                          lineHeight: 1.625,
                        }}
                      >
                        {route.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rate limits & plans */}
      <section className="mx-auto mb-5" style={{ maxWidth: "960px" }}>
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "1.5rem",
            fontWeight: 700,
          }}
        >
          Rate Limits by Plan
        </h2>

        <Card padding="none">
          <div className="table-responsive">
            <table
              className="table mb-0"
              style={{
                color: "var(--foreground)",
                fontSize: "0.875rem",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  {[
                    "Plan",
                    "REST Requests/min",
                    "WebSocket Subscriptions",
                    "Historical Data",
                    "Access",
                  ].map((heading) => (
                    <th
                      key={heading}
                      className="px-4 py-3 text-nowrap"
                      style={{
                        color: "var(--muted-foreground)",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        borderBottomColor: "var(--border)",
                      }}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {rateLimits.map((row, index) => {
                  const isWealth = index === 2;

                  return (
                    <tr
                      key={row.plan}
                      style={{
                        backgroundColor: isWealth
                          ? "rgba(0,201,167,0.03)"
                          : "transparent",
                        transition: "background-color 0.15s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "var(--muted)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = isWealth
                          ? "rgba(0,201,167,0.03)"
                          : "transparent";
                      }}
                    >
                      <td
                        className="px-4 py-3"
                        style={{
                          fontWeight: 600,
                          color: isWealth
                            ? "var(--accent)"
                            : "var(--foreground)",
                        }}
                      >
                        {row.plan}
                      </td>

                      <td
                        className="px-4 py-3"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {row.rest}
                      </td>

                      <td
                        className="px-4 py-3"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {row.ws}
                      </td>

                      <td className="px-4 py-3">{row.history}</td>

                      <td
                        className="px-4 py-3"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {row.access}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* CTA */}
      <section
        className="text-center rounded border p-4 p-md-5"
        style={{
          borderColor: "var(--border)",
          background:
            "linear-gradient(135deg, rgba(26,58,107,0.08), rgba(0,201,167,0.08))",
        }}
      >
        <h2
          className="mb-3"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "1.5rem",
            fontWeight: 700,
          }}
        >
          Ready to Build?
        </h2>

        <p
          className="mx-auto mb-4 small"
          style={{
            maxWidth: "448px",
            color: "var(--muted-foreground)",
          }}
        >
          API access is available on Professional and Wealth plans. Questions or
          integration support? Reach our developer team directly.
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          <Button href="/signup">Get API Access</Button>

          <Button variant="outline" href="mailto:api@equivestmarket.com">
            api@equivestmarket.com
          </Button>
        </div>
      </section>
    </div>
  );
}
