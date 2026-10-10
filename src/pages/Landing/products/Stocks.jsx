import ContextShowcase from "../marketing/ContextShowcase";
import Button from "../ui/Button";
import Card from "../ui/Card";
import {
  IconBan,
  IconPieChart,
  IconActivity,
  IconLayers,
  IconSearch,
  IconBell,
  IconTrendingUp,
  IconTarget,
} from "../ui/Icons";

const FEATURES = [
  {
    icon: <IconBan />,
    title: "$0 Commission on Every Trade",
    desc: "Trade any stock or ETF with zero commission — every single trade, every day, with no monthly cap. No account minimums, no hidden routing fees, no restrictions on trade frequency.",
  },
  {
    icon: <IconPieChart />,
    title: "Fractional Share Investing",
    desc: "Invest in any stock with as little as $1. Own a fraction of Amazon, Berkshire Hathaway, or any other high-priced stock without needing thousands of dollars upfront. Great for building diversified portfolios on any budget.",
  },
  {
    icon: <IconActivity />,
    title: "Real-Time Quotes & Advanced Charts",
    desc: "Professional-grade charting with 50+ technical indicators — RSI, MACD, Bollinger Bands, VWAP, and more. Supports candlestick, OHLCV, and line charts across timeframes from 1 minute to 20 years of history.",
  },
  {
    icon: <IconLayers />,
    title: "Six Order Types",
    desc: "Market, limit, stop-loss, stop-limit, trailing stop, and bracket orders. Set conditional orders that execute automatically when your price targets are hit — even when you're away from the screen.",
  },
  {
    icon: <IconSearch />,
    title: "Built-In Research & Fundamentals",
    desc: "Analyst ratings, consensus price targets, SEC filings (10-K, 10-Q, 8-K), earnings estimates, revenue forecasts, and insider transactions — all accessible from the stock detail view without leaving Equivest.",
  },
  {
    icon: <IconBell />,
    title: "News Alerts & Price Notifications",
    desc: "Real-time headlines from 500+ sources with AI-powered sentiment scoring. Set custom price alerts and news notifications for any ticker, delivered by push notification, SMS, or email the moment they trigger.",
  },
];

const STATS = [
  { value: "8,000+", label: "Stocks & ETFs", sub: "Across global exchanges" },
  { value: "$0", label: "Commission Per Trade", sub: "Stocks & ETFs" },
  { value: "$1", label: "Minimum Investment", sub: "Fractional shares" },
  { value: "<50ms", label: "Avg. Order Execution", sub: "Speed to fill" },
];

const ORDER_TYPES = [
  {
    type: "Market Order",
    desc: "Executes immediately at the best available price. Ideal for highly liquid large-cap stocks where speed matters more than a specific execution price. Not recommended for illiquid or low-float stocks.",
    badge: "Fastest",
  },
  {
    type: "Limit Order",
    desc: "Buys at your specified price or lower (buy) / sells at your specified price or higher (sell). Guarantees your price target but not execution. The most commonly used order type by experienced investors.",
    badge: "Most Common",
  },
  {
    type: "Stop-Loss",
    desc: "Automatically sells your position when the stock price drops to your trigger level. Used to cap downside risk on open positions without requiring constant monitoring.",
    badge: "Risk Control",
  },
  {
    type: "Stop-Limit",
    desc: "Triggers a limit order once the stop price is reached. Provides more precise control over execution price than a plain stop, but may not fill if the market gaps through the limit price.",
    badge: "Advanced",
  },
  {
    type: "Trailing Stop",
    desc: "The stop price automatically follows the stock upward as it rises. Locks in gains progressively while providing automatic protection against sudden reversals.",
    badge: "Dynamic",
  },
  {
    type: "Bracket Order",
    desc: "Simultaneously places a take-profit limit order and a stop-loss for an open position. Fully defines your reward-to-risk before the trade is placed — professional-grade risk management.",
    badge: "Professional",
  },
];

const MARKET_COVERAGE = [
  {
    exchange: "Major Exchanges",
    desc: "Large-cap equities and ETFs across the world's leading equity exchanges",
    tickers: "6,000+",
  },
  {
    exchange: "Growth Markets",
    desc: "Technology and growth-focused listings with the most actively traded securities",
    tickers: "Included",
  },
  {
    exchange: "Mid & Small Cap",
    desc: "Smaller-cap equities and specialty ETFs from global exchanges",
    tickers: "Included",
  },
  {
    exchange: "OTC",
    desc: "Over-the-counter markets — selected liquid OTC securities",
    tickers: "Selected",
  },
];

const headingStyle = {
  fontFamily: "'Nunito', sans-serif",
  fontWeight: 700,
};

const mutedTextStyle = {
  color: "var(--muted-foreground)",
};

export default function Stocks() {
  return (
    <div className="container py-5" style={{ marginTop: "70px" }}>
      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        <div className="row g-5 align-items-center mb-5">
          <div className="col-12 col-lg-6">
            <p
              className="small fw-semibold text-uppercase mb-3"
              style={{
                color: "var(--accent)",
                letterSpacing: "0.08em",
              }}
            >
              Stocks
            </p>

            <h1
              className="display-5 mb-4"
              style={{
                ...headingStyle,
                lineHeight: 1.15,
              }}
            >
              Own the Companies
              <br />
              Shaping the Future
            </h1>

            <p className="fs-5 lh-base mb-4" style={mutedTextStyle}>
              Trade 8,000+ stocks and ETFs across global exchanges with{" "}
              <strong style={{ color: "var(--foreground)" }}>
                zero commissions
              </strong>
              , fractional shares from $1, and professional-grade tools that
              were previously reserved for institutional investors with
              six-figure minimums.
            </p>

            <p className="lh-base mb-4" style={mutedTextStyle}>
              Whether you're buying your first share or managing a complex
              multi-position portfolio, Equivest gives you every order type,
              every data point, and every analytical tool — with no gatekeeping,
              no tiered access, and no hidden fees. All plans include
              commission-free trading on stocks and ETFs.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <Button href="/signup" size="lg">
                Start Investing — $0 Commissions
              </Button>

              <Button href="/trading" variant="outline" size="lg">
                Open Trading Terminal
              </Button>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="row g-3">
              {STATS.map((stat) => (
                <div className="col-6" key={stat.label}>
                  <div
                    className="h-100 rounded border p-4 text-center"
                    style={{
                      borderColor: "var(--border)",
                      background:
                        "linear-gradient(135deg, rgba(26,58,107,0.04), rgba(0,201,167,0.04))",
                    }}
                  >
                    <p
                      className="mb-1 fs-2"
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        fontWeight: 800,
                      }}
                    >
                      {stat.value}
                    </p>

                    <p className="small fw-semibold mb-1">{stat.label}</p>

                    <p
                      className="small mb-0"
                      style={{
                        ...mutedTextStyle,
                        fontSize: "0.75rem",
                      }}
                    >
                      {stat.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <section className="mb-5 py-3">
          <h2 className="h2 text-center mb-4" style={headingStyle}>
            Everything Included
          </h2>

          <div className="row g-4">
            {FEATURES.map((feature) => (
              <div className="col-12 col-sm-6 col-lg-4" key={feature.title}>
                <Card hover>
                  <div
                    className="d-flex align-items-center justify-content-center rounded mb-4"
                    style={{
                      width: "40px",
                      height: "40px",
                      color: "var(--accent)",
                      background: "rgba(0,201,167,0.1)",
                    }}
                  >
                    {feature.icon}
                  </div>

                  <h3 className="h6 fw-semibold mb-2">{feature.title}</h3>

                  <p className="small lh-base mb-0" style={mutedTextStyle}>
                    {feature.desc}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Exchange coverage */}
        <section className="mb-5 py-3">
          <h2 className="h2 text-center mb-3" style={headingStyle}>
            Market Coverage
          </h2>

          <p
            className="text-center mx-auto mb-4"
            style={{
              ...mutedTextStyle,
              maxWidth: "600px",
            }}
          >
            Equivest covers all major global equity exchanges with real-time
            data (Professional and Wealth plans) or 15-minute delayed quotes
            (Starter plan).
          </p>

          <div className="row g-3">
            {MARKET_COVERAGE.map((market) => (
              <div className="col-12 col-sm-6 col-lg-3" key={market.exchange}>
                <div
                  className="h-100 rounded border p-4 text-center"
                  style={{
                    background: "var(--card)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center rounded mx-auto mb-3"
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "rgba(26,58,107,0.08)",
                    }}
                  >
                    <IconTrendingUp style={{ color: "var(--primary)" }} />
                  </div>

                  <p className="fs-5 mb-2" style={headingStyle}>
                    {market.exchange}
                  </p>

                  <p className="small mb-3 lh-sm" style={mutedTextStyle}>
                    {market.desc}
                  </p>

                  <p
                    className="small fw-semibold mb-0 font-monospace"
                    style={{ color: "var(--accent)" }}
                  >
                    {market.tickers} tickers
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Order types */}
        <section className="mb-5 py-3">
          <h2 className="h2 text-center mb-3" style={headingStyle}>
            Every Order Type You Need
          </h2>

          <p
            className="text-center mx-auto mb-4"
            style={{
              ...mutedTextStyle,
              maxWidth: "600px",
            }}
          >
            The full professional order toolkit — available on all plan tiers at
            no extra charge.
          </p>

          <div className="row g-3">
            {ORDER_TYPES.map((order) => (
              <div className="col-12 col-sm-6 col-lg-4" key={order.type}>
                <div
                  className="h-100 rounded border p-4"
                  style={{
                    background: "var(--card)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <div
                        className="d-flex align-items-center justify-content-center rounded flex-shrink-0"
                        style={{
                          width: "32px",
                          height: "32px",
                          color: "var(--accent)",
                          background: "rgba(0,201,167,0.1)",
                        }}
                      >
                        <IconTarget />
                      </div>

                      <h3 className="small fw-semibold mb-0">{order.type}</h3>
                    </div>

                    <span
                      className="badge rounded-pill fw-medium flex-shrink-0"
                      style={{
                        color: "var(--accent)",
                        background: "rgba(0,201,167,0.1)",
                      }}
                    >
                      {order.badge}
                    </span>
                  </div>

                  <p className="small lh-base mb-0" style={mutedTextStyle}>
                    {order.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ContextShowcase
          eyebrow="Stock investing in context"
          title="Research the business, not only the ticker"
          description="Stock illustrations and familiar visual markers help connect ownership, company performance, diversification, and risk without imitating a live trading screen."
          variant="stocks"
          points={[
            {
              title: "Discover",
              description: "Explore companies across regions and sectors.",
            },
            {
              title: "Research",
              description: "Compare the business, not just the chart.",
            },
            {
              title: "Diversify",
              description: "Consider each stock within your whole plan.",
            },
          ]}
        />

        {/* CTA */}
        <section
          className="rounded border p-4 p-md-5 text-center mt-5"
          style={{
            borderColor: "var(--border)",
            background:
              "linear-gradient(135deg, rgba(26,58,107,0.08), rgba(0,201,167,0.08))",
          }}
        >
          <h2 className="h2 mb-3" style={headingStyle}>
            Join 340,000+ Investors on Equivest
          </h2>

          <p
            className="mx-auto mb-4"
            style={{
              ...mutedTextStyle,
              maxWidth: "600px",
            }}
          >
            Open your account in minutes. No minimums, $0 commissions on stocks
            and ETFs, and access to every professional tool from day one.
          </p>

          <Button href="/signup" size="lg">
            Open Free Account
          </Button>

          <p className="small mt-4 mb-0" style={mutedTextStyle}>
            Equivest Securities LLC, licensed broker-dealer. Investing involves
            risk including possible loss of principal.
          </p>
        </section>
      </div>
    </div>
  );
}
