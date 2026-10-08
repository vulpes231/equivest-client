import ContextShowcase from "./marketing/ContextShowcase";
import Card from "./ui/Card";
import Button from "./ui/Button";

import {
  IconRefresh,
  IconScale,
  IconTarget,
  IconPieChart,
  IconShieldCheck,
  IconSmartphone,
} from "./ui/Icons";

const PLANS = [
  {
    name: "Conservative",
    desc: "Primarily bonds and stable assets. Low volatility, modest returns. Best for preserving capital or short-to-medium timelines.",
    allocations: [
      { label: "Bonds", pct: "60%" },
      { label: "Equities", pct: "30%" },
      { label: "Cash", pct: "10%" },
    ],
    color: "#1A3A6B",
  },
  {
    name: "Moderate",
    desc: "Balanced mix of equities and bonds. Aims for steady growth with manageable risk. Suitable for medium to long-term goals.",
    allocations: [
      { label: "Equities", pct: "60%" },
      { label: "Bonds", pct: "30%" },
      { label: "Cash", pct: "10%" },
    ],
    color: "#2D6EFF",
  },
  {
    name: "Growth",
    desc: "Equity-focused portfolio with global diversification. Higher potential returns over the long term. Best for investors comfortable with short-term fluctuations.",
    allocations: [
      { label: "Equities", pct: "80%" },
      { label: "Bonds", pct: "15%" },
      { label: "Cash", pct: "5%" },
    ],
    color: "#00C9A7",
  },
  {
    name: "Aggressive",
    desc: "Maximum equity exposure across global markets. Highest potential long-term returns. Suitable for long investment horizons and high risk tolerance.",
    allocations: [
      { label: "Equities", pct: "95%" },
      { label: "Bonds", pct: "0%" },
      { label: "Cash", pct: "5%" },
    ],
    color: "#10B981",
  },
];

const PROCESS_STEPS = [
  {
    num: "02",
    title: "Choose a Plan",
    desc: "Select an investment plan that matches your goals and risk tolerance. Plans range from Conservative to Aggressive and are built around globally diversified portfolios.",
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
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    num: "01",
    title: "Fund Your Account",
    desc: "Fund your account with amount starting from $5000. You can also make recurring deposits at any time.",
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
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Automated Investing",
    desc: "Your funds are automatically allocated across the plan's target portfolio. The system buys, holds, and rebalances on your behalf — no manual trades required.",
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
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Monitor Performance",
    desc: "Track your plan's progress, contribution history, and projected growth from your dashboard. Adjust your plan or contribution amount at any time.",
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
];

const BENEFITS = [
  {
    title: "No Investment Experience Required",
    desc: "You don't need to know how to pick stocks or time the market. Auto Investing is designed for anyone who wants their money working for them without daily management.",
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
  },
  {
    title: "Disciplined, Consistent Contributions",
    desc: "Recurring deposits and automatic rebalancing enforce the discipline that's hard to maintain manually. Your portfolio stays aligned with your goals regardless of short-term market noise.",
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
  },
  {
    title: "Low Cost, Professional-Grade Portfolios",
    desc: "Auto Investing portfolios are built from low-cost, globally diversified ETFs. Professional asset allocation strategies are available to all investors, not just the wealthy.",
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
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export default function AutomatedInvesting() {
  return (
    <div className="d-flex flex-column gap-5">
      {/* Hero */}
      <section className="container pt-4 pt-lg-5 pb-2">
        <p
          className="text-uppercase mb-3"
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "var(--accent)",
          }}
        >
          Automated Investing
        </p>

        <h1
          className="mb-4 fw-bold"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(2.25rem, 5vw, 3rem)",
            fontWeight: 700,
            maxWidth: "672px",
            lineHeight: 1.2,
          }}
        >
          Investing That Works for You, Automatically
        </h1>

        <p
          className="lh-lg mb-3"
          style={{
            color: "var(--muted-foreground)",
            maxWidth: "672px",
          }}
        >
          Auto Investing is Equivest's managed portfolio service. You choose an
          investment plan, fund your account, and the system handles everything
          else — asset allocation, diversification, periodic contributions,
          rebalancing, and performance monitoring.
        </p>

        <p
          className="lh-lg mb-0"
          style={{
            color: "var(--muted-foreground)",
            maxWidth: "672px",
          }}
        >
          You invest; the platform does the work. There are no individual stock
          picks to make and no need to monitor markets daily. Auto Investing is
          built for investors who want a structured, cost-effective way to grow
          their money over time.
        </p>
      </section>

      {/* How Auto Investing works */}
      <section className="container">
        <p
          className="text-uppercase mb-2"
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "var(--accent)",
          }}
        >
          Process
        </p>

        <h2
          className="fs-2 fw-bold mb-4"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
          }}
        >
          How Auto Investing works
        </h2>

        <div className="row g-4">
          {PROCESS_STEPS.map((step, index) => (
            <div key={step.num} className="col-12 col-sm-6 col-lg-3">
              <div className="position-relative h-100">
                {/* Arrow connector */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div
                    className="d-none d-lg-flex position-absolute align-items-center justify-content-center"
                    style={{
                      top: "28px",
                      left: "calc(100% - 12px)",
                      width: "24px",
                      zIndex: 10,
                      color: "var(--border)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                )}

                <div
                  className="rounded mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "56px",
                    height: "56px",
                    color: "var(--accent)",
                    background:
                      "linear-gradient(135deg, rgba(26,58,107,0.1), rgba(0,201,167,0.1))",
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
                  STEP {step.num}
                </p>

                <h3 className="fs-6 fw-semibold mb-2">{step.title}</h3>

                <p
                  className="small lh-lg mb-0"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Investment plans */}
      <section className="container">
        <p
          className="text-uppercase mb-2"
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "var(--accent)",
          }}
        >
          Plans
        </p>

        <h2
          className="fs-2 fw-bold mb-2"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
          }}
        >
          Choose a plan that fits your goals
        </h2>

        <p
          className="small lh-lg mb-4"
          style={{
            color: "var(--muted-foreground)",
            maxWidth: "576px",
          }}
        >
          Each Auto Investing plan is a diversified portfolio of low-cost ETFs,
          managed automatically. Select the plan that best matches your timeline
          and comfort with market fluctuations.
        </p>

        <div className="row g-4">
          {PLANS.map((plan) => (
            <div key={plan.name} className="col-12 col-sm-6 col-lg-3">
              <Card className="h-100 d-flex flex-column">
                <div
                  className="rounded-circle mb-3"
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: plan.color,
                  }}
                />

                <h3
                  className="fs-5 fw-semibold mb-2"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  {plan.name}
                </h3>

                <p
                  className="small lh-lg mb-3 flex-grow-1"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {plan.desc}
                </p>

                <div className="d-flex flex-wrap gap-2 mb-3">
                  {plan.allocations
                    .filter((allocation) => allocation.pct !== "0%")
                    .map((allocation) => (
                      <span
                        key={allocation.label}
                        className="rounded px-2 py-1"
                        style={{
                          backgroundColor: "var(--secondary)",
                          color: "var(--muted-foreground)",
                          fontSize: "0.75rem",
                          fontWeight: 500,
                        }}
                      >
                        {allocation.label} {allocation.pct}
                      </span>
                    ))}
                </div>

                <p
                  className="small fw-semibold mb-0"
                  style={{ color: plan.color }}
                >
                  Learn More →
                </p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="container">
        <p
          className="text-uppercase mb-2"
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "var(--accent)",
          }}
        >
          Benefits
        </p>

        <h2
          className="fs-2 fw-bold mb-4"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
          }}
        >
          Why choose Auto Investing?
        </h2>

        <div className="row g-4">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title} className="col-12 col-sm-4">
              <Card className="h-100">
                <div
                  className="rounded mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "var(--accent)",
                    backgroundColor: "rgba(0,201,167,0.1)",
                  }}
                >
                  {benefit.icon}
                </div>

                <h3 className="fs-6 fw-semibold mb-2">{benefit.title}</h3>

                <p
                  className="small lh-lg mb-0"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {benefit.desc}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container">
        <h2
          className="fs-2 fw-bold text-center mb-4"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
          }}
        >
          Everything Included
        </h2>

        <div className="row g-4">
          {[
            {
              icon: <IconRefresh />,
              title: "Automatic Deposits",
              desc: "Set up weekly, biweekly, or monthly deposits from your linked bank account. Equivest invests the funds the same business day they arrive — no cash drag, no manual steps.",
            },
            {
              icon: <IconScale />,
              title: "Smart Rebalancing",
              desc: "Automatically rebalanced quarterly. Equivest monitors your allocation daily and executes the minimum trades needed to restore your target weights.",
            },
            {
              icon: <IconTarget />,
              title: "Goal Tracking",
              desc: "Track multiple goals simultaneously — retirement, home purchase, education, or custom goals. Visual progress bars and projected completion dates keep you on course.",
            },
            {
              icon: <IconPieChart />,
              title: "Diversified Portfolios",
              desc: "Four pre-built portfolios built from institutional-quality, low-cost ETFs averaging ~0.06% expense ratio. Each covers domestic equities, international equities, and fixed income.",
            },
            {
              icon: <IconShieldCheck />,
              title: "Risk Management",
              desc: "Equivest uses Monte Carlo simulations and historical stress tests to score portfolio risk daily. You'll receive an alert if market volatility shifts your risk score materially.",
            },
            {
              icon: <IconSmartphone />,
              title: "Real-Time Monitoring",
              desc: "Track your portfolio value, contribution history, projected outcomes, and goal progress on web, iOS, and Android. Detailed monthly performance reports are emailed automatically.",
            },
          ].map((feature) => (
            <div key={feature.title} className="col-12 col-sm-6 col-lg-4">
              <Card hover className="h-100">
                <div
                  className="rounded mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "36px",
                    height: "36px",
                    color: "var(--accent)",
                    backgroundColor: "rgba(0,201,167,0.1)",
                  }}
                >
                  {feature.icon}
                </div>

                <h3 className="fs-6 fw-semibold mb-2">{feature.title}</h3>

                <p
                  className="small lh-lg mb-0"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {feature.desc}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Key considerations */}
      <section className="container">
        <div
          className="rounded border p-4"
          style={{
            maxWidth: "672px",
            borderColor: "var(--border)",
            backgroundColor: "var(--muted)",
          }}
        >
          <h3 className="fs-6 fw-semibold mb-3">Things to know</h3>

          <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
            {[
              "Auto Investing portfolios are subject to market risk. The value of your investment can fall as well as rise.",
              "Past performance of any investment plan does not guarantee future results.",
              "You can withdraw or pause your plan at any time, subject to standard settlement periods.",
              "Management fees (0.20% annually on assets under management) apply. All other trading within Auto Investing is commission-free.",
            ].map((item) => (
              <li
                key={item}
                className="d-flex align-items-start gap-3 small"
                style={{ color: "var(--muted-foreground)" }}
              >
                <svg
                  width="16"
                  height="16"
                  className="flex-shrink-0 mt-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Context Showcase */}
      <ContextShowcase
        eyebrow="Automation with context"
        title="A plan that keeps working between check-ins"
        description="Automated investing turns a goal, time horizon, and risk preference into a repeatable routine while keeping the reasoning visible."
        variant="automation"
        points={[
          {
            title: "Set direction",
            description: "Choose a goal and realistic time horizon.",
          },
          {
            title: "Build a mix",
            description: "Match allocation to your comfort with risk.",
          },
          {
            title: "Stay aligned",
            description: "Use recurring contributions and rebalancing.",
          },
        ]}
        contained
      />

      {/* CTA */}
      <section className="container pb-5">
        <div
          className="rounded p-4 p-md-5 text-center"
          style={{
            background: "linear-gradient(135deg, #0B1426, #1A3A6B)",
          }}
        >
          <h2
            className="fs-2 fw-bold text-white mb-3"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
            }}
          >
            Let your investments run on autopilot
          </h2>

          <p
            className="small mx-auto mb-4"
            style={{
              maxWidth: "448px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Open an account, choose your plan, and start contributing. Equivest
            handles the rest.
          </p>

          <Button href="/signup" size="lg">
            Start Auto Investing
          </Button>
        </div>
      </section>
    </div>
  );
}
