import ContextShowcase from "./marketing/ContextShowcase";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { IconLandmark, IconAward, IconRefresh } from "./ui/Icons";

const PRINCIPLES = [
  {
    title: "Start Early, Benefit More",
    desc: "Compound growth means that money invested early grows disproportionately more than money invested later. Even small, consistent contributions made over 20–30 years can grow into substantial retirement savings.",
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
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Use Tax-Advantaged Accounts",
    desc: "Most countries offer some form of tax-advantaged retirement savings account. Contributing to these accounts reduces your tax burden today (tax-deferred accounts) or in retirement (tax-free accounts) — a significant long-term advantage.",
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
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Diversify Across Asset Classes",
    desc: "A well-structured retirement portfolio typically holds a mix of equities, bonds, and other assets. As you approach retirement, a gradual shift toward lower-risk assets helps protect accumulated savings.",
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
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
  {
    title: "Review and Adjust Regularly",
    desc: "Life circumstances change. Regularly reviewing your retirement portfolio — at least annually — ensures your contributions, risk profile, and target retirement date remain aligned with your actual situation.",
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
];

const SUPPORT_CARDS = [
  {
    icon: <IconLandmark />,
    title: "Tax-Advantaged Account Support",
    desc: "Open the retirement account type available in your jurisdiction. Equivest supports a range of tax-advantaged account structures depending on your country of residence.",
  },
  {
    icon: <IconRefresh />,
    title: "Automated Retirement Portfolios",
    desc: "Link your retirement account to Equivest Auto Investing for fully managed, goal-based portfolio management. Set your target retirement date and contribution schedule — we handle the rest.",
  },
  {
    icon: <IconAward />,
    title: "Consolidate Existing Accounts",
    desc: "Transfer or roll over balances from existing pension plans, workplace schemes, or retirement accounts into Equivest. We coordinate with your existing provider and handle the paperwork.",
  },
];

const WORLD_ACCOUNTS = [
  {
    country: "United States",
    examples: "401(k), Traditional IRA, Roth IRA",
  },
  {
    country: "United Kingdom",
    examples: "ISA, SIPP (Self-Invested Personal Pension)",
  },
  {
    country: "Canada",
    examples: "RRSP (Registered Retirement Savings Plan), TFSA",
  },
  {
    country: "Australia",
    examples: "Superannuation (Super)",
  },
  {
    country: "European Union",
    examples: "Various national pension pillars and private pension schemes",
  },
  {
    country: "Singapore",
    examples: "CPF (Central Provident Fund)",
  },
  {
    country: "Others",
    examples:
      "Most countries provide some combination of state pension, employer pension, and voluntary private savings options",
  },
];

export default function Retirement() {
  return (
    <div>
      {/* Hero */}
      <section className="container pt-5 pb-4">
        <div
          className="mw-100"
          style={{ maxWidth: "1280px", margin: "0 auto" }}
        >
          <p
            className="small fw-semibold text-uppercase mb-3"
            style={{
              color: "var(--accent)",
              letterSpacing: "0.08em",
            }}
          >
            Retirement Planning
          </p>

          <h1
            className="display-5 fw-bold mb-4"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              maxWidth: "700px",
            }}
          >
            Invest for the Future, Wherever You Are in the World
          </h1>

          <p
            className="lh-base mb-3"
            style={{
              color: "var(--muted-foreground)",
              maxWidth: "700px",
            }}
          >
            Retirement planning is about building a sustainable source of income
            for later in life. The earlier you start investing for retirement,
            the more time your money has to grow through compounding.
          </p>

          <p
            className="lh-base mb-0"
            style={{
              color: "var(--muted-foreground)",
              maxWidth: "700px",
            }}
          >
            Equivest provides tools to help investors plan and invest for
            retirement regardless of which country or retirement account
            structure applies to them. Whether you're contributing to an IRA, a
            SIPP, an RRSP, or a superannuation fund, the principles of
            long-term, disciplined retirement investing remain the same.
          </p>
        </div>
      </section>

      {/* Retirement planning principles */}
      <section className="container py-4">
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p
            className="small fw-semibold text-uppercase mb-2"
            style={{
              color: "var(--accent)",
              letterSpacing: "0.08em",
            }}
          >
            Principles
          </p>

          <h2
            className="h2 fw-bold mb-4"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
            }}
          >
            Retirement planning principles
          </h2>

          <div className="row g-4">
            {PRINCIPLES.map((p) => (
              <div className="col-12 col-sm-6 col-lg-3" key={p.title}>
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
                    {p.icon}
                  </div>

                  <h3 className="h6 fw-semibold mb-2">{p.title}</h3>

                  <p
                    className="small lh-base mb-0"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {p.desc}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retirement accounts around the world */}
      <section className="container py-4">
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p
            className="small fw-semibold text-uppercase mb-2"
            style={{
              color: "var(--accent)",
              letterSpacing: "0.08em",
            }}
          >
            Global
          </p>

          <h2
            className="h2 fw-bold mb-4"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
            }}
          >
            Retirement accounts around the world
          </h2>

          <div className="row g-5 align-items-start">
            {/* Left: text + table */}
            <div className="col-12 col-lg-6">
              <p
                className="small lh-base mb-4"
                style={{ color: "var(--muted-foreground)" }}
              >
                While account types and tax rules vary by country, the
                underlying purpose is the same — tax-advantaged savings for
                retirement. The specific vehicle you use will depend on your
                country of residence, employment situation, and personal tax
                circumstances. Below are examples of common retirement savings
                structures from around the world.
              </p>

              <div
                className="border rounded overflow-hidden"
                style={{ borderColor: "var(--border)" }}
              >
                {WORLD_ACCOUNTS.map((row, index) => (
                  <div
                    key={row.country}
                    className={`d-flex gap-3 px-3 py-3 ${
                      index !== WORLD_ACCOUNTS.length - 1 ? "border-bottom" : ""
                    }`}
                    style={{
                      borderColor: "var(--border)",
                    }}
                  >
                    <div
                      className="flex-shrink-0 fw-semibold small"
                      style={{
                        width: "144px",
                        color: "var(--foreground)",
                      }}
                    >
                      {row.country}
                    </div>

                    <div
                      className="small lh-sm"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {row.examples}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: illustrative retirement account card mockup */}
            <div className="col-12 col-lg-6">
              <Card
                className="border-2"
                padding="none"
                style={{
                  maxWidth: "384px",
                }}
              >
                <div
                  className="px-4 py-3 border-bottom d-flex align-items-center justify-content-between"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div>
                    <p className="fw-semibold small mb-1">Retirement Account</p>

                    <p
                      className="small mb-0"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Tax-advantaged · Long-term
                    </p>
                  </div>

                  <span
                    className="small px-2 py-1 rounded-pill fw-semibold"
                    style={{
                      backgroundColor: "rgba(16,185,129,0.1)",
                      color: "var(--gain)",
                    }}
                  >
                    On Track
                  </span>
                </div>

                <div className="px-4 py-3">
                  <div className="mb-4">
                    <p
                      className="small mb-1"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Account type
                    </p>

                    <p
                      className="small fw-semibold mb-0"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      — —
                    </p>
                  </div>

                  <div className="mb-4">
                    <p
                      className="small mb-1"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Target retirement date
                    </p>

                    <p
                      className="small fw-semibold mb-0"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      — —
                    </p>
                  </div>

                  <div>
                    <p
                      className="small mb-1"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Current balance
                    </p>

                    <p
                      className="h5 fw-bold mb-0"
                      style={{
                        color: "var(--muted-foreground)",
                        fontFamily: "'Nunito', sans-serif",
                      }}
                    >
                      — —
                    </p>

                    <div
                      className="mt-2 w-100 rounded-pill overflow-hidden"
                      style={{
                        height: "8px",
                        backgroundColor: "var(--muted)",
                      }}
                    >
                      <div
                        className="h-100 rounded-pill"
                        style={{
                          width: "62%",
                          backgroundColor: "var(--accent)",
                        }}
                      />
                    </div>

                    <div className="d-flex justify-content-between mt-1">
                      <span
                        className="small"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Progress
                      </span>

                      <span
                        className="small fw-medium"
                        style={{ color: "var(--accent)" }}
                      >
                        62% of goal
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="px-4 py-3 border-top"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p
                    className="small text-center fst-italic mb-0"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Illustrative layout — not real account data
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How Equivest supports retirement investing */}
      <section className="container py-4">
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p
            className="small fw-semibold text-uppercase mb-2"
            style={{
              color: "var(--accent)",
              letterSpacing: "0.08em",
            }}
          >
            Support
          </p>

          <h2
            className="h2 fw-bold mb-4"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
            }}
          >
            How Equivest supports retirement investing
          </h2>

          <div className="row g-4">
            {SUPPORT_CARDS.map((card) => (
              <div className="col-12 col-sm-4" key={card.title}>
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
        </div>
      </section>

      {/* Important notes */}
      <section className="container py-4">
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            className="rounded border p-4"
            style={{
              maxWidth: "672px",
              backgroundColor: "var(--muted)",
              borderColor: "var(--border)",
            }}
          >
            <h3 className="h6 fw-semibold mb-3">Important notes</h3>

            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
              {[
                "Retirement account types and contribution limits vary significantly by country and individual circumstances. Equivest recommends consulting a qualified financial adviser for personalised retirement planning advice.",
                "Tax treatment of retirement accounts depends on your country of residence and personal tax situation.",
                "All investments involve risk. The value of your retirement portfolio can fall as well as rise.",
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
                    stroke="currentColor"
                    strokeWidth={2}
                    style={{ color: "var(--accent)" }}
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
        </div>
      </section>

      <ContextShowcase
        eyebrow="Long-term perspective"
        title="Make future progress easier to picture"
        description="Retirement planning becomes more approachable when contributions, time, diversification, and account rules are explained as one connected journey."
        variant="retirement"
        points={[
          {
            title: "Define",
            description: "Describe the future you are planning for.",
          },
          {
            title: "Contribute",
            description: "Build a repeatable saving rhythm.",
          },
          {
            title: "Review",
            description: "Revisit the plan as life changes.",
          },
        ]}
        contained
      />

      {/* CTA */}
      <section className="container pb-5 pt-4">
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
            Start planning your retirement today
          </h2>

          <p
            className="small mb-4 mx-auto"
            style={{
              maxWidth: "448px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Open a retirement account with Equivest and invest for the long term
            — with the tools, portfolios, and guidance you need.
          </p>

          <Button href="/signup" size="lg">
            Plan Your Retirement with Equivest
          </Button>
        </div>
      </section>
    </div>
  );
}
