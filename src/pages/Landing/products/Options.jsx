import ContextShowcase from "../marketing/ContextShowcase";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { IconAlertTriangle } from "../ui/Icons";
import {
  IconTable,
  IconTrendingUp,
  IconSettings,
  IconLink,
  IconCalendar,
  IconSmartphone,
} from "../ui/Icons";

const FEATURES = [
  {
    icon: <IconTable />,
    title: "Full Options Chain",
    desc: "Real-time options chain for any optionable stock or ETF — all strikes, all expirations. Color-coded by moneyness (ITM, ATM, OTM) with Delta, Gamma, Theta, Vega, Rho, and implied volatility for every contract.",
  },
  {
    icon: <IconTrendingUp />,
    title: "Interactive P&L Diagram",
    desc: "Instantly visualize your payoff curve before placing any trade. See maximum profit, maximum loss, breakeven points, and probability of profit update in real time as you adjust strikes, expirations, and quantity.",
  },
  {
    icon: <IconSettings />,
    title: "Multi-Leg Strategy Builder",
    desc: "Select from predefined strategies (covered call, iron condor, bull spread) or construct custom structures from scratch. Equivest automatically calculates net premium, margin requirements, and Greeks for the full position.",
  },
  {
    icon: <IconLink />,
    title: "Multi-Leg Order Routing",
    desc: "Submit up to 4-leg spread strategies as a single atomic order. Equivest routes multi-leg orders for best net execution and displays your confirmed net debit or credit before you confirm. No leg-by-leg execution risk.",
  },
  {
    icon: <IconCalendar />,
    title: "Expiration Alerts",
    desc: "Automatic push notifications 30 days, 7 days, and 1 day before any open options position expires. Choose per-position alert settings so you never let an assignment or expiration go unmanaged.",
  },
  {
    icon: <IconSmartphone />,
    title: "Full Mobile Access",
    desc: "Complete options trading capability on iOS and Android — analyze chains, view Greeks, build strategies, adjust spreads, and close positions with the same precision tools available on desktop.",
  },
];

const STRATEGIES = [
  {
    name: "Covered Call",
    risk: "Low",
    complexity: "Beginner",
    best: "Neutral-to-bullish on stock you own",
    desc: "Sell a call option against 100 shares of stock you already own. Generates upfront premium income while capping your upside beyond the strike. Reduces your effective cost basis with each contract sold.",
    example:
      "Own 100 AAPL @ $212. Sell the $220 call for $3.50 = $350 cash received. Break-even drops to $208.50. Capped gain if stock rises above $220.",
  },
  {
    name: "Cash-Secured Put",
    risk: "Low–Medium",
    complexity: "Beginner",
    best: "Willing to buy a stock at a lower price",
    desc: "Sell a put option while reserving cash to buy shares if assigned. Earns premium income and, if assigned, results in purchasing the stock below the current market price.",
    example:
      "Sell AAPL $200 put for $4.20 with $20,000 in cash. Collect $420. If AAPL falls below $200, you buy 100 shares at an effective cost of $195.80.",
  },
  {
    name: "Long Call",
    risk: "Defined",
    complexity: "Intermediate",
    best: "High-conviction bullish directional view",
    desc: "Buy a call option to profit from an anticipated upward move. Maximum loss is limited to the premium paid. Provides leveraged exposure to upside with no risk beyond the initial cost.",
    example:
      "Buy AAPL $220 call for $2.80. Break-even at $222.80. Profitable on any close above $222.80 at expiration with theoretically unlimited upside.",
  },
  {
    name: "Protective Put",
    risk: "Defined",
    complexity: "Intermediate",
    best: "Portfolio hedge against a significant drawdown",
    desc: "Buy a put option on stock you own. Acts as insurance — caps your maximum downside loss at a defined level while preserving full upside potential.",
    example:
      "Own AAPL @ $212. Buy the $200 put for $1.50. Maximum loss now capped at $13.50/share regardless of how far the stock falls.",
  },
  {
    name: "Bull Call Spread",
    risk: "Defined",
    complexity: "Advanced",
    best: "Moderately bullish with limited budget",
    desc: "Buy a lower-strike call and sell a higher-strike call for the same expiration. Reduces the cost of a long call while capping both maximum gain and maximum loss.",
    example:
      "Buy $210 call, sell $220 call for net debit of $4.00. Max profit = $6.00 ($600/contract). Max loss = $4.00 ($400/contract). Break-even at $214.",
  },
  {
    name: "Iron Condor",
    risk: "Defined",
    complexity: "Advanced",
    best: "Low-volatility range-bound environment",
    desc: "Sell a call spread and a put spread simultaneously. Collect net premium when the underlying stays within a defined price range through expiration.",
    example:
      "Sell $220/$225 call spread and $200/$195 put spread for $2.10 net credit. Max profit = $210. Max loss = $290. Profitable between $197.90–$222.10.",
  },
  {
    name: "Long Straddle",
    risk: "Defined",
    complexity: "Advanced",
    best: "Expecting a large move but unsure of direction",
    desc: "Buy a call and a put at the same strike and expiration. Profits if the stock makes a large move in either direction by more than the total premium paid.",
    example:
      "Buy AAPL $212 call + $212 put for $8.00 total. Profitable if stock moves above $220 or below $204 at expiration.",
  },
  {
    name: "Butterfly Spread",
    risk: "Defined",
    complexity: "Expert",
    best: "Expecting the stock to stay near a specific price",
    desc: "Buy one lower-strike call, sell two middle-strike calls, buy one higher-strike call. Maximum profit if the stock closes exactly at the middle strike at expiration.",
    example:
      "Buy $205 call, sell two $212 calls, buy $219 call for net debit of $2.00. Max profit = $5.00 if AAPL closes exactly at $212 at expiration.",
  },
];

const APPROVAL_LEVELS = [
  {
    level: "Level 1",
    includes: "Covered Calls, Cash-Secured Puts",
    req: "No special requirements for most eligible accounts",
  },
  {
    level: "Level 2",
    includes: "Long Calls & Puts, Protective Puts",
    req: "Basic investing knowledge and income/net worth thresholds",
  },
  {
    level: "Level 3",
    includes: "Spreads (debit & credit), Straddles",
    req: "Options experience, demonstrated understanding of spreads",
  },
];

export default function Options() {
  const overviewRows = [
    {
      label: "Commission per contract",
      value: "$0.45",
      highlight: true,
    },
    {
      label: "Per-ticket charge",
      value: "$0.00",
    },
    {
      label: "Assignment / Exercise fee",
      value: "$0.00",
    },
    {
      label: "Strategies supported",
      value: "Single + multi-leg (up to 4)",
    },
    {
      label: "Greeks displayed",
      value: "Δ Gamma Θ Vega Rho + IV",
    },
    {
      label: "Approval levels available",
      value: "Level 1, 2, and 3",
    },
    {
      label: "Optionable stocks & ETFs",
      value: "4,000+",
    },
  ];

  return (
    <div className="container py-5" style={{ marginTop: "70px" }}>
      <div className="d-flex flex-column gap-5">
        {/* Hero */}
        <section className="row g-4 g-lg-5 align-items-center">
          <div className="col-12 col-lg-6">
            <p
              className="small fw-semibold text-uppercase mb-3"
              style={{
                color: "var(--accent)",
                letterSpacing: "0.08em",
              }}
            >
              Options Trading
            </p>

            <h1
              className="display-5 fw-bold mb-4"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Professional Options
              <br />
              Tools, Democratized
            </h1>

            <p
              className="fs-5 mb-3"
              style={{
                color: "var(--muted-foreground)",
                lineHeight: 1.8,
              }}
            >
              Trade equity and index options with a live Greeks display,
              real-time P&L visualizer, multi-leg strategy builder, and{" "}
              <strong style={{ color: "var(--foreground)" }}>
                $0.55 per contract
              </strong>{" "}
              pricing — no per-ticket charges, no per-leg fees.
            </p>

            <p
              className="mb-4"
              style={{
                color: "var(--muted-foreground)",
                lineHeight: 1.8,
              }}
            >
              Whether you're writing covered calls for income, buying protection
              with puts, or executing complex four-leg spreads, Equivest gives
              you every tool a professional options trader relies on — without
              requiring a $25,000 minimum account balance or weeks-long
              application review.
            </p>

            {/* Risk disclosure */}
            <div
              className="d-flex align-items-start gap-3 rounded border p-3 mb-4"
              style={{
                borderColor: "rgba(239,68,68,0.3)",
                background: "rgba(239,68,68,0.04)",
              }}
            >
              <div className="flex-shrink-0 mt-1" style={{ color: "#EF4444" }}>
                <IconAlertTriangle />
              </div>

              <div>
                <p
                  className="small fw-semibold mb-1"
                  style={{ color: "#EF4444" }}
                >
                  Risk Disclosure
                </p>

                <p
                  className="small mb-0"
                  style={{
                    color: "var(--muted-foreground)",
                    lineHeight: 1.75,
                  }}
                >
                  Options trading involves significant risk and is not
                  appropriate for all investors. You may lose the entire premium
                  paid. Multi-leg strategies involve additional risks. Read the{" "}
                  <a
                    href="/legal/disclosures"
                    className="text-decoration-underline"
                    style={{ color: "var(--accent)" }}
                  >
                    Options Risk Disclosure
                  </a>{" "}
                  before trading.
                </p>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-3">
              <Button href="/signup" size="lg">
                Apply for Options Trading
              </Button>

              <Button href="/learn" variant="outline" size="lg">
                Options Education Center
              </Button>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column gap-3">
              {overviewRows.map((row) => (
                <div
                  key={row.label}
                  className="d-flex justify-content-between align-items-center gap-3 py-3 px-3 px-md-4 rounded border"
                  style={{
                    borderColor: row.highlight
                      ? "rgba(0,201,167,0.4)"
                      : "var(--border)",
                    background: row.highlight
                      ? "rgba(0,201,167,0.04)"
                      : "var(--card)",
                  }}
                >
                  <span
                    className="small"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {row.label}
                  </span>

                  <span
                    className="small fw-semibold text-end"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: row.highlight
                        ? "var(--accent)"
                        : "var(--foreground)",
                    }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section>
          <h2
            className="h2 fw-bold text-center mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Options Platform Features
          </h2>

          <div className="row g-4">
            {FEATURES.map((feature) => (
              <div className="col-12 col-md-6 col-lg-4" key={feature.title}>
                <Card hover>
                  <div
                    className="d-flex align-items-center justify-content-center rounded mb-3"
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      background: "rgba(0,201,167,0.1)",
                      color: "var(--accent)",
                    }}
                  >
                    {feature.icon}
                  </div>

                  <h3 className="h5 fw-semibold mb-2">{feature.title}</h3>

                  <p
                    className="small mb-0"
                    style={{
                      color: "var(--muted-foreground)",
                      lineHeight: 1.75,
                    }}
                  >
                    {feature.desc}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Approval levels */}
        <section className="mx-auto w-100" style={{ maxWidth: "56rem" }}>
          <h2
            className="h2 fw-bold text-center mb-3"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Options Approval Levels
          </h2>

          <p
            className="text-center small mb-4"
            style={{ color: "var(--muted-foreground)" }}
          >
            Options access is tiered by strategy complexity. Most eligible
            applicants receive Level 1 or 2 approval within minutes.
          </p>

          <div className="d-flex flex-column gap-3">
            {APPROVAL_LEVELS.map((level) => (
              <div
                key={level.level}
                className="d-flex flex-column flex-sm-row align-items-sm-center gap-3 rounded border p-3 p-md-4"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                <span
                  className="badge rounded-pill px-3 py-2 flex-shrink-0 align-self-start"
                  style={{
                    background: "rgba(0,201,167,0.1)",
                    color: "var(--accent)",
                  }}
                >
                  {level.level}
                </span>

                <div className="flex-grow-1">
                  <p className="small fw-semibold mb-1">{level.includes}</p>

                  <p
                    className="small mb-0"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {level.req}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Strategies */}
        <section>
          <h2
            className="h2 fw-bold text-center mb-3"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Supported Strategies
          </h2>

          <p
            className="text-center mx-auto mb-4"
            style={{
              color: "var(--muted-foreground)",
              maxWidth: "42rem",
              lineHeight: 1.75,
            }}
          >
            From simple income strategies to expert multi-leg structures — all
            available in Equivest with interactive P&L diagrams and live Greeks.
          </p>

          <div className="row g-4">
            {STRATEGIES.map((strategy) => (
              <div className="col-12 col-md-6" key={strategy.name}>
                <div
                  className="h-100 rounded border p-3 p-md-4 d-flex flex-column gap-3"
                  style={{
                    background: "var(--card)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div className="d-flex align-items-start justify-content-between gap-3">
                    <div>
                      <h3 className="h5 fw-semibold mb-1">{strategy.name}</h3>

                      <p
                        className="small mb-0"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {strategy.best}
                      </p>
                    </div>

                    <div className="text-end flex-shrink-0">
                      <span
                        className="badge rounded-pill d-block mb-2"
                        style={{
                          background: "var(--secondary)",
                          color: "var(--muted-foreground)",
                        }}
                      >
                        {strategy.complexity}
                      </span>

                      <span
                        className="small"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Risk: {strategy.risk}
                      </span>
                    </div>
                  </div>

                  <p
                    className="small mb-0"
                    style={{
                      color: "var(--muted-foreground)",
                      lineHeight: 1.75,
                    }}
                  >
                    {strategy.desc}
                  </p>

                  <div
                    className="rounded p-3 mt-auto"
                    style={{ background: "var(--muted)" }}
                  >
                    <p
                      className="small mb-0"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "var(--muted-foreground)",
                        lineHeight: 1.75,
                      }}
                    >
                      {strategy.example}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Context showcase */}
        <ContextShowcase
          eyebrow="Strategy context"
          title="Map the outcome before learning the mechanics"
          description="Options education is clearer when each strategy begins with its purpose, possible outcomes, time horizon, and defined risks."
          variant="options"
          points={[
            {
              title: "Purpose",
              description: "Start with the outcome being considered.",
            },
            {
              title: "Structure",
              description: "See how each contract changes the profile.",
            },
            {
              title: "Risk",
              description: "Understand limits and obligations first.",
            },
          ]}
        />

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
            className="display-6 fw-bold mb-3"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Ready to Trade Options?
          </h2>

          <p
            className="mx-auto mb-4"
            style={{
              maxWidth: "40rem",
              color: "var(--muted-foreground)",
              lineHeight: 1.75,
            }}
          >
            Apply for options approval in minutes. Level 1 access is typically
            granted immediately for eligible accounts. $0.55/contract with no
            ticket charges.
          </p>

          <Button href="/signup" size="lg">
            Apply for Options Trading
          </Button>

          <p
            className="small mt-3 mb-0"
            style={{ color: "var(--muted-foreground)" }}
          >
            Options involve risk and are not suitable for all investors.
            Equivest Securities LLC, member FINRA/SIPC. Read the Options
            Disclosure Document before trading.
          </p>
        </section>
      </div>
    </div>
  );
}
