import ContextShowcase from "./marketing/ContextShowcase";
import { Link } from "react-router-dom";
import Card from "./ui/Card";
import Button from "./ui/Button";

const DETAIL_CARDS = [
  {
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
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Price History & Charts",
    desc: "View a security's price history across multiple time frames (1 day, 1 week, 1 month, 1 year, all-time) using clean interactive charts. Switch between line and candlestick views to analyze price action.",
  },
  {
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
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Key Statistics",
    desc: "Instantly access the metrics that matter most: market capitalization, P/E ratio, EPS, dividend yield, 52-week high/low, average volume, and beta. All stats update after market close each trading day.",
  },
  {
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
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Analyst Ratings",
    desc: "See the consensus view from Wall Street analysts — Buy, Hold, or Sell — along with the distribution of individual ratings and the average price target versus the current price.",
  },
  {
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
    title: "Earnings History",
    desc: "Review the last 8 quarters of earnings results, including actual EPS vs. consensus estimates and post-earnings price reactions. Upcoming earnings dates are highlighted with analyst estimate ranges.",
  },
  {
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
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Company Profile",
    desc: "Every stock page includes a plain-language company description, industry classification, geographic exposure, leadership team overview, and a list of major institutional shareholders.",
  },
  {
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
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
        <path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z" />
      </svg>
    ),
    title: "Related News",
    desc: "A curated feed of news articles, press releases, and analyst reports specific to the company. Click any article to read the full story without leaving the platform.",
  },
];

const BAR_HEIGHTS = [30, 55, 42, 68, 50, 80, 60, 75, 45, 90, 65, 72];

const TABS = ["Overview", "Charts", "Earnings", "News", "Profile"];

const STATS = [
  { label: "Market Cap", val: "$84.2B" },
  { label: "P/E Ratio", val: "22.4x" },
  { label: "Analyst Rating", val: "Buy (12/3/2)" },
];

export default function StockDetail() {
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
          Research &amp; Analysis
        </p>

        <h1
          className="display-5 fw-bold mb-4 lh-sm"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
          }}
        >
          Stock Detail View
        </h1>

        <p
          className="fs-5 lh-base mb-3"
          style={{ color: "var(--muted-foreground)" }}
        >
          The Stock Detail view is your in-depth research tool for any
          individual security. It brings together price history, fundamental
          data, analyst opinions, earnings information, and company background
          in one place — so you can go from curiosity to conviction without
          opening another tab.
        </p>

        <p
          className="lh-base mb-0"
          style={{ color: "var(--muted-foreground)" }}
        >
          Every public stock and ETF on major exchanges has a dedicated detail
          page. The data is sourced from institutional-grade market data
          providers and updated throughout the trading day, giving you the same
          research depth that professional analysts rely on — organized in a way
          that's easy to navigate.
        </p>
      </section>

      {/* Everything on one page */}
      <section className="mb-5 pb-4">
        <h2
          className="h2 fw-bold mb-2"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
          }}
        >
          Everything on one page
        </h2>

        <p
          className="mb-4"
          style={{
            color: "var(--muted-foreground)",
            maxWidth: "672px",
          }}
        >
          Six research modules organized to take you from price awareness to
          investment decision.
        </p>

        <div className="row g-4">
          {DETAIL_CARDS.map((card) => (
            <div className="col-12 col-sm-6" key={card.title}>
              <Card className="h-100">
                <div
                  className="d-flex align-items-center justify-content-center rounded mb-3"
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "var(--accent)",
                    backgroundColor: "rgba(0,201,167,0.1)",
                  }}
                >
                  {card.icon}
                </div>

                <h3 className="h6 fw-semibold mb-2">{card.title}</h3>

                <p
                  className="small lh-base mb-0"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {card.desc}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* UI mockup */}
      <section className="mb-5 pb-4">
        <h2
          className="h2 fw-bold mb-4"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
          }}
        >
          What a Stock Detail page looks like
        </h2>

        <div
          className="border rounded overflow-hidden shadow-sm"
          style={{
            maxWidth: "672px",
            backgroundColor: "var(--card)",
            borderColor: "var(--border)",
            borderRadius: "12px",
          }}
        >
          {/* Stock header */}
          <div
            className="p-4 border-bottom d-flex align-items-center justify-content-between gap-3"
            style={{ borderColor: "var(--border)" }}
          >
            <div>
              <div className="d-flex align-items-center gap-2 mb-1">
                <span
                  className="fw-bold fs-5"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  ACME Corp
                </span>

                <span
                  className="small px-2 py-1 rounded"
                  style={{
                    backgroundColor: "var(--muted)",
                    color: "var(--muted-foreground)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  ACME
                </span>

                <span
                  className="small"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Global Exchange
                </span>
              </div>

              <p
                className="small mb-0"
                style={{ color: "var(--muted-foreground)" }}
              >
                Technology · Consumer Electronics
              </p>
            </div>

            <div className="text-end flex-shrink-0">
              <p
                className="h3 fw-bold mb-1"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                $148.32
              </p>

              <span
                className="small fw-semibold px-2 py-1 rounded-pill text-white"
                style={{ backgroundColor: "#10B981" }}
              >
                +1.4%
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div
            className="d-flex border-bottom px-3 overflow-auto"
            style={{ borderColor: "var(--border)" }}
          >
            {TABS.map((tab, i) => (
              <button
                key={tab}
                type="button"
                className="btn rounded-0 border-0 px-3 py-3 small fw-medium flex-shrink-0"
                style={{
                  color: i === 0 ? "var(--accent)" : "var(--muted-foreground)",
                  borderBottom:
                    i === 0
                      ? "2px solid var(--accent)"
                      : "2px solid transparent",
                  backgroundColor: "transparent",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Stat tiles */}
          <div className="row g-0" style={{ backgroundColor: "var(--border)" }}>
            {STATS.map((stat) => (
              <div className="col-4" key={stat.label}>
                <div
                  className="p-3 h-100"
                  style={{
                    backgroundColor: "var(--card)",
                  }}
                >
                  <p
                    className="small mb-1"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {stat.label}
                  </p>

                  <p
                    className="small fw-semibold mb-0"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {stat.val}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative bar chart */}
          <div className="p-4">
            <p
              className="small fw-medium mb-3"
              style={{ color: "var(--muted-foreground)" }}
            >
              Price History — Illustration
            </p>

            <div
              className="d-flex align-items-end gap-1"
              style={{ height: "80px" }}
            >
              {BAR_HEIGHTS.map((h, i) => (
                <div
                  key={i}
                  className="flex-fill rounded-sm"
                  style={{
                    height: `${h}%`,
                    minWidth: "4px",
                    background:
                      i === BAR_HEIGHTS.length - 1
                        ? "linear-gradient(180deg, #00C9A7, #1A3A6B)"
                        : "var(--muted)",
                    opacity:
                      i === BAR_HEIGHTS.length - 1
                        ? 1
                        : 0.6 + (i / BAR_HEIGHTS.length) * 0.4,
                  }}
                />
              ))}
            </div>

            <p
              className="small fst-italic mt-3 mb-0"
              style={{ color: "var(--muted-foreground)" }}
            >
              Illustration only — not live data
            </p>
          </div>
        </div>
      </section>

      {/* From research to action */}
      <section className="mb-5 pb-4" style={{ maxWidth: "768px" }}>
        <h2
          className="h2 fw-bold mb-4"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
          }}
        >
          From research to action
        </h2>

        <div
          className="d-flex flex-column gap-3 lh-base"
          style={{ color: "var(--muted-foreground)" }}
        >
          <p className="mb-0">
            The Stock Detail page is designed to connect research directly to
            portfolio decisions. When you read an analyst upgrade, you can
            immediately see the historical price target accuracy and the
            consensus distribution. When you review earnings trends, you see not
            just the numbers but how the market reacted to each report — context
            that helps you calibrate your own expectations.
          </p>

          <p className="mb-0">
            Once your research is complete, the order ticket is one click away.
            You can move from reviewing a company profile to placing an informed
            buy or sell order without leaving the page — keeping the research
            context visible as you commit to a decision.
          </p>
        </div>
      </section>

      <ContextShowcase
        eyebrow="Company story"
        title="A stock is more than a price line"
        description="Colorful visual cues and focused research cards connect performance, company fundamentals, news, and risk into one understandable company story."
        variant="stocks"
        points={[
          {
            title: "Performance",
            description: "Read movement across useful time horizons.",
          },
          {
            title: "Fundamentals",
            description: "Understand the business behind the symbol.",
          },
          {
            title: "Context",
            description: "Compare news, sector, and company signals.",
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
          Start Researching Stocks
        </h2>

        <p className="mb-4" style={{ color: "var(--muted-foreground)" }}>
          Stock Detail pages are available on all Equivest account tiers at no
          extra cost.
        </p>

        <Link to="/signup">
          <Button>Start Researching Stocks</Button>
        </Link>
      </section>
    </div>
  );
}
