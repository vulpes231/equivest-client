import ContextShowcase from "./marketing/ContextShowcase";
import Card from "./ui/Card";
import Button from "./ui/Button";
import {
  IconTrendingUp,
  IconBriefcase,
  IconFlask,
  IconCpu,
  IconBarChart,
  IconClipboard,
  IconLayers,
  IconSettings,
  IconActivity,
  IconFileText,
  IconScale,
  IconShieldCheck,
  IconAward,
  IconCalendar,
  IconNewspaper,
  IconRefresh,
  IconTarget,
  IconTrophy,
  IconZap,
} from "./ui/Icons";

const FEATURE_SECTIONS = [
  {
    category: "Trading",
    icon: <IconTrendingUp />,
    color: "#1A3A6B",
    features: [
      {
        title: "Advanced Charting",
        desc: "Candlestick, line, and OHLCV charts with 50+ technical indicators including RSI, MACD, Bollinger Bands, and custom drawing tools. Supports 1-minute to monthly timeframes.",
        icon: <IconBarChart />,
      },
      {
        title: "Order Types",
        desc: "Market, limit, stop-loss, stop-limit, trailing stop, and bracket orders. Set conditional orders that execute automatically when your price targets are met.",
        icon: <IconClipboard />,
      },
      {
        title: "Level 2 Quotes",
        desc: "Real-time order book depth showing bid/ask stacks, market maker IDs, and time-and-sales data. Available on Equivest.",
        icon: <IconLayers />,
      },
      {
        title: "Options Trading",
        desc: "Trade calls, puts, vertical spreads, covered calls, and cash-secured puts. Includes a strategy builder, P&L visualizer, and Greeks display (Delta, Gamma, Theta, Vega).",
        icon: <IconSettings />,
      },
    ],
  },
  {
    category: "Portfolio",
    icon: <IconBriefcase />,
    color: "#00C9A7",
    features: [
      {
        title: "Performance Analytics",
        desc: "Time-weighted and money-weighted returns, alpha and beta vs. benchmarks, Sharpe ratio, maximum drawdown, and sector attribution — all updated daily after market close.",
        icon: <IconActivity />,
      },
      {
        title: "Tax Tools",
        desc: "Year-round tax-loss harvesting alerts, realized/unrealized gain tracking, wash sale detection, and downloadable 1099 and 8949 reports. Available on Equivest.",
        icon: <IconFileText />,
      },
      {
        title: "Portfolio Rebalancing",
        desc: "Set target allocations by asset class, sector, or individual position. Equivest alerts you when drift exceeds your threshold and lets you rebalance in one click.",
        icon: <IconScale />,
      },
      {
        title: "Risk Dashboard",
        desc: "Visualize portfolio concentration, view historical drawdown scenarios, track correlation across holdings, and receive alerts when a single position exceeds 20% of your portfolio.",
        icon: <IconShieldCheck />,
      },
    ],
  },
  {
    category: "Research",
    icon: <IconFlask />,
    color: "#2D6EFF",
    features: [
      {
        title: "Analyst Ratings",
        desc: "Consensus Buy/Hold/Sell ratings and price targets aggregated from 30+ Wall Street analysts. Updated after each rating change with a 12-month price target history.",
        icon: <IconAward />,
      },
      {
        title: "Earnings Calendar",
        desc: "Full global earnings calendar with consensus EPS and revenue estimates, historical surprise percentages, and company-issued guidance. Subscribe to alerts for any ticker.",
        icon: <IconCalendar />,
      },
      {
        title: "SEC Filings",
        desc: "Instant access to 10-K, 10-Q, 8-K, proxy (DEF 14A), and Form 4 insider transaction filings sourced directly from EDGAR — no login required.",
        icon: <IconFileText />,
      },
      {
        title: "News & Sentiment",
        desc: "Real-time headlines from 500+ sources with AI-powered sentiment scoring. Set custom price and news alerts delivered by push notification, email, or SMS.",
        icon: <IconNewspaper />,
      },
    ],
  },
  {
    category: "Automation",
    icon: <IconCpu />,
    color: "#8B5CF6",
    features: [
      {
        title: "Recurring Investments",
        desc: "Schedule automatic deposits weekly, biweekly, or monthly. Funds are invested the same day they arrive — no cash drag, no manual steps required.",
        icon: <IconRefresh />,
      },
      {
        title: "Smart Rebalancing",
        desc: "Equivest's rebalancing engine monitors your allocation daily and executes trades to bring your portfolio back to target weights every quarter — or whenever drift exceeds 5%.",
        icon: <IconTarget />,
      },
      {
        title: "Goal Tracking",
        desc: "Create goals for retirement, a home down payment, or education. Equivest shows your projected completion date and sends milestone alerts at 25%, 50%, 75%, and 100%.",
        icon: <IconTrophy />,
      },
      {
        title: "API Access",
        desc: "RESTful API and WebSocket streaming for account data, order submission, portfolio analytics, and real-time market quotes. Available on Equivest.",
        icon: <IconZap />,
      },
    ],
  },
];

const INTEGRATIONS = [
  "Apex Clearing",
  "Plaid",
  "TurboTax",
  "Polygon.io",
  "Alpaca Markets",
  "DriveWealth",
];

export default function Features() {
  return (
    <div className="container py-5" style={{ maxWidth: "1280px" }}>
      {/* Header */}
      <div className="text-center mx-auto" style={{ maxWidth: "768px" }}>
        <p
          className="text-uppercase fw-semibold mb-3"
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.08em",
            color: "var(--accent)",
          }}
        >
          Platform Features
        </p>

        <h1
          className="mb-4"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(2.25rem, 5vw, 3rem)",
            fontWeight: 700,
            color: "var(--foreground)",
          }}
        >
          Everything You Need to Invest
        </h1>

        <p
          className="mb-3"
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.7,
            color: "var(--muted-foreground)",
          }}
        >
          Equivest is built for every kind of investor — from someone placing
          their first stock order to a professional trader running a
          multi-strategy portfolio. Here's a full breakdown of every capability
          available on the platform today.
        </p>

        <p
          className="mb-4"
          style={{
            fontSize: "0.875rem",
            lineHeight: 1.7,
            color: "var(--muted-foreground)",
          }}
        >
          From professional charting and advanced order types to automated
          goal-based portfolios and tax-advantaged retirement accounts —
          everything below is built into Equivest and available at
          equivestmarket.com.
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-2">
          {[
            "Trading",
            "Portfolio",
            "Research",
            "Automation",
            "Security",
            "Education",
          ].map((tag) => (
            <span
              key={tag}
              className="badge fw-medium px-3 py-2"
              style={{
                backgroundColor: "var(--secondary)",
                border: "1px solid var(--border)",
                color: "var(--muted-foreground)",
                borderRadius: "999px",
                fontSize: "0.75rem",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Feature sections */}
      <div className="mt-5 d-flex flex-column gap-5">
        {FEATURE_SECTIONS.map((section) => (
          <div key={section.category}>
            <div className="d-flex align-items-center gap-3 mb-4">
              <div
                className="d-flex align-items-center justify-content-center rounded"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: `${section.color}15`,
                  color: section.color,
                  flexShrink: 0,
                }}
              >
                {section.icon}
              </div>

              <h2
                className="mb-0"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "var(--foreground)",
                }}
              >
                {section.category}
              </h2>
            </div>

            <div className="row g-3">
              {section.features.map((feature) => (
                <div key={feature.title} className="col-12 col-sm-6 col-lg-3">
                  <Card hover>
                    <div
                      className="d-flex align-items-center justify-content-center rounded mb-3"
                      style={{
                        width: "36px",
                        height: "36px",
                        backgroundColor: "rgba(0,201,167,0.1)",
                        color: "var(--accent)",
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

                    <p
                      className="mb-0"
                      style={{
                        fontSize: "0.875rem",
                        lineHeight: 1.65,
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {feature.desc}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="my-5">
        <ContextShowcase
          eyebrow="One connected platform"
          title="Features that support a complete investing journey"
          description="Research, portfolio planning, trading education, and account protection work best when they share a consistent language and workflow."
          variant="features"
          points={[
            {
              title: "Discover",
              description: "Find ideas with structured market context.",
            },
            {
              title: "Evaluate",
              description: "Use clear research and comparison tools.",
            },
            {
              title: "Follow through",
              description: "Track decisions in one organized place.",
            },
          ]}
        />
      </div>

      {/* Integrations */}
      <div className="text-center mt-5">
        <p
          className="text-uppercase fw-semibold mb-4"
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.08em",
            color: "var(--muted-foreground)",
          }}
        >
          Integrations & Partners
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          {INTEGRATIONS.map((integration) => (
            <div
              key={integration}
              className="px-4 py-2 rounded"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                color: "var(--muted-foreground)",
                fontSize: "0.875rem",
                fontWeight: 500,
              }}
            >
              {integration}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
