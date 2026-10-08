import { Link } from "react-router-dom";
import Card from "./ui/Card";
import Button from "./ui/Button";

const FEATURE_CARDS = [
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
    title: "Global Market Indices",
    desc: "Track major benchmark indices like the S&P 500, NASDAQ, FTSE 100, Nikkei, and DAX in one place. See the day's performance, year-to-date returns, and overall market direction at a glance.",
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
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: "Sector Performance",
    desc: "See which industry sectors — Technology, Healthcare, Energy, Financials, and more — are leading or lagging on any given day. Sector data helps you spot rotation patterns and understand where market activity is concentrated.",
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
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Top Movers",
    desc: "Discover which stocks and ETFs had the biggest price moves today — gainers and decliners across all asset classes. Top Movers surfaces opportunities and risks you might otherwise miss.",
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
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Economic Calendar",
    desc: "Stay ahead of scheduled market-moving events: central bank rate decisions, inflation reports, employment data, and earnings releases. Each event includes consensus estimates and historical market reactions.",
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
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "Stock & ETF Search",
    desc: "Search any stock or ETF by name or ticker to instantly see its current price, historical performance, analyst ratings, and key financial metrics. A starting point for any investment research.",
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
        <path d="M18 14h-8" />
        <path d="M15 18h-5" />
        <path d="M10 6h8v4h-8V6Z" />
      </svg>
    ),
    title: "Market News Feed",
    desc: "A curated stream of financial news, company announcements, and macroeconomic commentary filtered to your watchlist and interests. Stay informed without information overload.",
  },
];

const HOW_IT_HELPS = [
  {
    title: "Time Your Decisions",
    desc: "Understanding whether the overall market is trending up or down helps you decide when to add to positions or hold back. Market context prevents reactive decisions during short-term volatility.",
  },
  {
    title: "Spot Opportunities",
    desc: "Top Movers and sector data reveal where institutional money is flowing. Early awareness of momentum shifts can help you identify investment ideas worth researching further.",
  },
  {
    title: "Stay Informed Effortlessly",
    desc: "Rather than monitoring dozens of news sources manually, Market Overview consolidates the signals that matter. You see what's relevant to your portfolio without noise.",
  },
];

export default function Markets() {
  return (
    <div
      className="container py-5"
      style={{
        maxWidth: "1280px",
      }}
    >
      {/* Hero */}
      <section className="mb-5 pb-4" style={{ maxWidth: "768px" }}>
        <p
          className="small fw-semibold text-uppercase mb-3"
          style={{
            color: "var(--accent)",
            letterSpacing: "0.08em",
          }}
        >
          Market Overview
        </p>

        <h1
          className="display-5 fw-bold mb-4 lh-sm"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
            color: "var(--foreground)",
          }}
        >
          Understand the Markets Before You Invest
        </h1>

        <p
          className="fs-5 lh-base mb-3"
          style={{ color: "var(--muted-foreground)" }}
        >
          Market Overview is a research and discovery tool that helps investors
          understand broad market conditions, track indices, and discover
          trending sectors — all in one place. Whether you're just starting out
          or reviewing conditions before executing a trade, it gives you the
          full picture without requiring a financial background.
        </p>

        <p
          className="lh-base mb-0"
          style={{ color: "var(--muted-foreground)" }}
        >
          From global benchmark indices to individual stock research, the Market
          Overview consolidates the information you need to make informed
          decisions. Stay on top of economic events, monitor sector rotations,
          and read curated news — all from a single, unified view that updates
          throughout the trading day.
        </p>
      </section>

      {/* Feature cards */}
      <section className="mb-5 pb-4">
        <h2
          className="h2 fw-bold mb-2"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
          }}
        >
          What you can see in Market Overview
        </h2>

        <p
          className="mb-4"
          style={{
            color: "var(--muted-foreground)",
            maxWidth: "672px",
          }}
        >
          Six research modules designed to give you complete situational
          awareness before you invest.
        </p>

        <div className="row g-4">
          {FEATURE_CARDS.map((card, index) => (
            <div className="col-12 col-sm-6 col-lg-4" key={card.title}>
              <Card className="h-100">
                {index !== 0 && (
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
                )}

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

      {/* How it's organized */}
      <section className="row g-5 align-items-start mb-5 pb-4">
        <div className="col-12 col-lg-6">
          <h2
            className="h2 fw-bold mb-4"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
            }}
          >
            How market information is organized
          </h2>

          <h3 className="h5 fw-semibold mb-3">From Macro to Micro</h3>

          <div
            className="d-flex flex-column gap-3 lh-base"
            style={{ color: "var(--muted-foreground)" }}
          >
            <p className="mb-0">
              Markets start with the broad view: the major indices tell you how
              the overall market is performing. A rising S&P 500 generally
              signals investor confidence in large US companies, while
              divergence between indices can reveal which segments of the market
              are driving activity.
            </p>

            <p className="mb-0">
              Drilling into sectors lets you see which parts of the economy are
              moving. When Technology outperforms while Energy lags, that sector
              rotation tells a story about where investors expect future growth
              to come from — and helps you position accordingly.
            </p>

            <p className="mb-0">
              Finally, you research individual companies in the context of their
              sector and the broader market. A stock rising 3% means something
              different when its sector is down 2% than when the whole market is
              up 3%. Market Overview gives you all three layers at once.
            </p>
          </div>
        </div>

        {/* UI mockup */}
        <div className="col-12 col-lg-6">
          <div
            className="border rounded p-4 shadow-sm"
            style={{
              backgroundColor: "var(--card)",
              borderColor: "var(--border)",
              borderRadius: "12px",
            }}
          >
            <p
              className="small fw-semibold text-uppercase mb-4"
              style={{
                color: "var(--muted-foreground)",
                letterSpacing: "0.08em",
              }}
            >
              Market Overview — Illustration
            </p>

            {/* Index cards */}
            <div className="row g-3 mb-4">
              {[
                { name: "S&P 500", val: "5,891", chg: "+0.8%", up: true },
                { name: "FTSE 100", val: "7,642", chg: "+0.3%", up: true },
                { name: "Nikkei 225", val: "38,204", chg: "-0.4%", up: false },
              ].map((idx) => (
                <div className="col-4" key={idx.name}>
                  <div
                    className="rounded p-3 h-100"
                    style={{
                      backgroundColor: "var(--muted)",
                    }}
                  >
                    <p
                      className="small mb-1"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {idx.name}
                    </p>

                    <p
                      className="small fw-semibold mb-0"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {idx.val}
                    </p>

                    <p
                      className="small fw-medium mt-1 mb-0"
                      style={{
                        color: idx.up ? "var(--gain)" : "var(--loss)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {idx.chg}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sectors */}
            <div>
              <p className="small fw-semibold mb-3">Sectors Today</p>

              <div className="d-flex flex-column gap-2">
                {[
                  { name: "Technology", chg: "+1.4%", up: true },
                  { name: "Healthcare", chg: "+0.6%", up: true },
                  { name: "Energy", chg: "-0.9%", up: false },
                ].map((s) => (
                  <div key={s.name} className="d-flex align-items-center gap-2">
                    <span
                      className="rounded-circle flex-shrink-0"
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: s.up ? "var(--gain)" : "var(--loss)",
                      }}
                    />

                    <span className="small flex-grow-1">{s.name}</span>

                    <span
                      className="small fw-medium"
                      style={{
                        color: s.up ? "var(--gain)" : "var(--loss)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {s.chg}
                    </span>
                  </div>
                ))}
              </div>

              <p
                className="small fst-italic mt-4 mb-0"
                style={{ color: "var(--muted-foreground)" }}
              >
                Illustration only — not live data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How market data helps you */}
      <section className="mb-5 pb-4">
        <h2
          className="h2 fw-bold mb-2"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
          }}
        >
          How market data helps you
        </h2>

        <p
          className="mb-4"
          style={{
            color: "var(--muted-foreground)",
            maxWidth: "672px",
          }}
        >
          Market context transforms isolated stock picks into informed
          investment decisions.
        </p>

        <div className="row g-4">
          {HOW_IT_HELPS.map((item) => (
            <div className="col-12 col-sm-4" key={item.title}>
              <div
                className="border rounded p-4 h-100"
                style={{
                  backgroundColor: "var(--card)",
                  borderColor: "var(--border)",
                  borderRadius: "12px",
                }}
              >
                <h3 className="h6 fw-semibold mb-2">{item.title}</h3>

                <p
                  className="small lh-base mb-0"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

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
          Explore Market Overview
        </h2>

        <p className="mb-4" style={{ color: "var(--muted-foreground)" }}>
          Available on all Equivest account tiers. No subscription required.
        </p>

        <Link to="/signup">
          <Button>Explore Market Overview</Button>
        </Link>
      </section>
    </div>
  );
}
