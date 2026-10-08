import ContextShowcase from "./marketing/ContextShowcase";
import { BRAND } from "./data/config";
import Card from "./ui/Card";
import Button from "./ui/Button";

import {
  IconSearch,
  IconShieldCheck,
  IconRocket,
  IconUsers,
  IconScale,
  IconGlobe,
} from "./ui/Icons";

const TEAM = [
  {
    name: "Alexandra Chen",
    title: "Chief Executive Officer",
    bio: "Alexandra brings 18 years of fintech and capital markets experience. Previously Head of Consumer Investing at a major brokerage, she co-founded Equivest to democratize access to professional-grade investment tools.",
    initials: "A",
  },
  {
    name: "David Okonkwo",
    title: "Chief Technology Officer",
    bio: "David is a distributed systems architect with deep expertise in real-time financial data infrastructure. He led engineering at two previous fintech unicorns before joining Equivest as a founding team member.",
    initials: "D",
  },
  {
    name: "Sarah Whitmore",
    title: "Chief Financial Officer",
    bio: "Sarah spent 14 years in investment banking and corporate finance before pivoting to fintech. She oversees Equivest's regulatory compliance, treasury operations, and financial reporting.",
    initials: "S",
  },
  {
    name: "James Park",
    title: "Chief Product Officer",
    bio: "James has shipped consumer investment products used by millions of people. His background spans UX research, product strategy, and behavioral finance — all of which inform Equivest's intuitive design.",
    initials: "J",
  },
  {
    name: "Natalie Rivera",
    title: "Head of Customer Experience",
    bio: "Natalie built and scaled support operations from 0 to 50+ people at a leading neobank. At Equivest, she ensures every customer interaction is fast, honest, and genuinely helpful.",
    initials: "N",
  },
  {
    name: "Omar Hassan",
    title: "Head of Security & Compliance",
    bio: "Omar is a certified information security professional with regulatory experience spanning SEC, FINRA, and GDPR frameworks. He leads Equivest's security architecture and compliance program.",
    initials: "O",
  },
];

const VALUES = [
  {
    icon: <IconSearch />,
    title: "Transparency",
    desc: "No hidden fees, no fine print. Our fee schedule is published clearly, our revenue model is documented, and every cost is disclosed before you confirm a transaction.",
  },
  {
    icon: <IconShieldCheck />,
    title: "Security",
    desc: "Customer assets and data are protected by bank-grade encryption, 24/7 fraud monitoring, SIPC insurance up to $500,000, and annual third-party security audits.",
  },
  {
    icon: <IconRocket />,
    title: "Innovation",
    desc: "We invest heavily in product and engineering so our tools stay ahead of the market. From our real-time charting engine to our automated rebalancing algorithms, we build technology that works.",
  },
  {
    icon: <IconUsers />,
    title: "Customer First",
    desc: "Every product decision starts with one question: is this better for the customer? We don't sell your data, we don't recommend products for commissions, and we respond to support requests fast.",
  },
  {
    icon: <IconScale />,
    title: "Integrity",
    desc: "Equivest Securities LLC is registered with the SEC and a member of FINRA and SIPC. We operate with the highest ethical standards and disclose conflicts of interest proactively.",
  },
  {
    icon: <IconGlobe />,
    title: "Accessibility",
    desc: "Great investing tools shouldn't cost $30/month or require a $25,000 minimum. Equivest's Starter plan is free forever, and our Automated Investing starts at just $10.",
  },
];

export default function About() {
  return (
    <div className="container py-4 py-lg-5">
      {/* Mission */}
      <div
        className="text-center mx-auto mb-5 pb-lg-3"
        style={{ maxWidth: "768px" }}
      >
        <p
          className="text-uppercase mb-3"
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "var(--accent)",
          }}
        >
          Our Mission
        </p>

        <h1
          className="mb-4 fw-bold"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(2.25rem, 5vw, 3rem)",
            lineHeight: 1.2,
            fontWeight: 700,
          }}
        >
          Every Investor Deserves Professional-Grade Tools
        </h1>

        <p
          className="fs-5 lh-lg mb-3"
          style={{ color: "var(--muted-foreground)" }}
        >
          Equivest was founded on a simple belief: the tools, data, and
          automation that elite investors use shouldn't be locked behind high
          minimums and expensive advisors. We're here to change that.
        </p>

        <p className="lh-lg mb-0" style={{ color: "var(--muted-foreground)" }}>
          From a single platform at equivestmarket.com, our 340,000+ members
          access real-time trading, automated portfolio management, and
          tax-advantaged retirement accounts — the same capabilities once
          reserved for institutional players, now available to everyone.
        </p>
      </div>

      {/* Stats */}
      <div className="row g-4 mb-5 pb-lg-3">
        {[
          { value: "340K+", label: "Active Investors" },
          { value: "$8.4B+", label: "Assets on Platform" },
          { value: "120M+", label: "Trades Executed" },
          { value: "2019", label: "Year Founded" },
        ].map((stat) => (
          <div key={stat.label} className="col-6 col-lg-3">
            <Card className="text-center h-100">
              <p
                className="fs-4 mb-1"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                }}
              >
                {stat.value}
              </p>
              <p
                className="small mb-0"
                style={{ color: "var(--muted-foreground)" }}
              >
                {stat.label}
              </p>
            </Card>
          </div>
        ))}
      </div>

      {/* Story */}
      <div className="row g-5 align-items-center mb-5 pb-lg-3">
        <div className="col-12 col-lg-6">
          <p
            className="text-uppercase mb-3"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "var(--accent)",
            }}
          >
            Our Story
          </p>

          <h2
            className="fs-2 mb-4"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
            }}
          >
            Built for Investors, by Investors
          </h2>

          <div
            className="d-flex flex-column gap-3 lh-lg"
            style={{ color: "var(--muted-foreground)" }}
          >
            <p className="mb-0">
              Equivest was founded in 2019 by a team of fintech engineers and
              former Wall Street analysts who were frustrated that the most
              powerful investment tools were only available to institutions and
              high-net-worth individuals. They set out to build something
              better.
            </p>

            <p className="mb-0">
              Starting from a two-room office in Manhattan, the founding team
              spent two years building the technology before launching publicly
              in 2021. Within the first year, Equivest had onboarded 50,000
              members and processed over 10 million trades. The growth has
              continued every quarter since.
            </p>

            <p className="mb-0">
              Today, Equivest manages $8.4 billion in client assets across
              taxable brokerage, automated portfolios, and retirement accounts.
              We're building the next generation of wealth infrastructure — and
              we're just getting started.
            </p>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div
            className="rounded overflow-hidden d-flex align-items-center justify-content-center"
            style={{
              minHeight: "320px",
              background: "linear-gradient(135deg, #0B1426, #1A3A6B)",
            }}
          >
            <div className="text-center px-4">
              <div
                className="rounded mx-auto mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "rgba(0,201,167,0.15)",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00C9A7"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>

              <p className="text-white fw-semibold small mb-1">
                Equivest Headquarters
              </p>

              <p
                className="small mb-0"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                350 Fifth Avenue, Suite 4200 · New York, NY 10118
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-5 pb-lg-3">
        <div className="text-center mb-5">
          <p
            className="text-uppercase mb-3"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "var(--accent)",
            }}
          >
            Our Values
          </p>

          <h2
            className="fs-2 mb-0"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
            }}
          >
            What We Stand For
          </h2>
        </div>

        <div className="row g-4">
          {VALUES.map((value) => (
            <div key={value.title} className="col-12 col-sm-6 col-lg-4">
              <Card className="h-100">
                <div
                  className="rounded mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(0,201,167,0.1)",
                    color: "var(--accent)",
                  }}
                >
                  {value.icon}
                </div>

                <h3 className="fs-6 fw-semibold mb-2">{value.title}</h3>

                <p
                  className="small lh-lg mb-0"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {value.desc}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Technology */}
      <div
        className="rounded p-4 p-md-5 mb-5"
        style={{
          background: "linear-gradient(135deg, #0B1426, #1A3A6B)",
        }}
      >
        <div className="row g-5 align-items-center">
          <div className="col-12 col-lg-7">
            <p
              className="text-uppercase mb-3"
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "var(--accent)",
              }}
            >
              Our Technology
            </p>

            <h2
              className="fs-2 text-white mb-3"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
              }}
            >
              Built on World-Class Infrastructure
            </h2>

            <p
              className="lh-lg mb-4"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Equivest is built on a cloud-native microservices architecture
              designed for reliability, speed, and scale. Our platform processes
              millions of market data events per second and executes orders with
              deterministic latency across all market conditions.
            </p>

            <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
              {[
                "99.97% platform uptime over the last 12 months",
                "Sub-50ms average order execution from submission to confirmation",
                "Real-time market data feeds from major global exchanges",
                "256-bit AES encryption at rest, TLS 1.3 in transit",
              ].map((item) => (
                <li
                  key={item}
                  className="d-flex align-items-start gap-3 small"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  <svg
                    width="16"
                    height="16"
                    className="flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="var(--accent)"
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-lg-5">
            <div className="row g-3">
              {[
                { label: "Platform Uptime", value: "99.97%" },
                { label: "Avg Execution", value: "<50ms" },
                { label: "Data Points/Day", value: "4.2B+" },
                { label: "Security Audits/Year", value: "2×/yr" },
              ].map((stat) => (
                <div key={stat.label} className="col-6">
                  <div
                    className="rounded border p-3 h-100"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      borderColor: "rgba(255,255,255,0.1)",
                    }}
                  >
                    <p
                      className="fs-5 text-white mb-1"
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {stat.value}
                    </p>

                    <p
                      className="small mb-0"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="mb-5 pb-lg-3">
        <div className="text-center mb-5">
          <h2
            className="fs-2 mb-0"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
            }}
          >
            Leadership Team
          </h2>
        </div>

        <div className="row g-4">
          {TEAM.map((member) => (
            <div key={member.name} className="col-12 col-sm-6 col-lg-4">
              <Card className="h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    className="rounded d-flex align-items-center justify-content-center text-white flex-shrink-0"
                    style={{
                      width: "48px",
                      height: "48px",
                      fontSize: "1.125rem",
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #1A3A6B, #00C9A7)",
                    }}
                  >
                    {member.initials}
                  </div>

                  <div>
                    <p className="fw-semibold mb-0">{member.name}</p>
                    <p
                      className="small mb-0"
                      style={{ color: "var(--accent)" }}
                    >
                      {member.title}
                    </p>
                  </div>
                </div>

                <p
                  className="small lh-lg mb-0"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {member.bio}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Company milestones */}
      <div className="mb-5 pb-lg-3">
        <div className="text-center mb-5">
          <p
            className="text-uppercase mb-3"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "var(--accent)",
            }}
          >
            Our Journey
          </p>

          <h2
            className="fs-2 mb-0"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
            }}
          >
            Milestones &amp; Growth
          </h2>
        </div>

        <div className="mx-auto" style={{ maxWidth: "672px" }}>
          {[
            {
              year: "2019",
              title: "Equivest Founded",
              desc: "Alexandra Chen and David Okonkwo incorporated Equivest Securities LLC in New York and began building the trading infrastructure from the ground up, funded by $4.2M in pre-seed capital.",
            },
            {
              year: "2021",
              title: "Public Launch & First 50,000 Members",
              desc: "Equivest launched to the public in March 2021 and reached 50,000 registered members within the first 8 months, driven entirely by word-of-mouth and organic growth.",
            },
            {
              year: "2023",
              title: "Automated Investing & IRA Accounts",
              desc: "Launched Automated Investing with 4 portfolio strategies, and introduced Traditional IRA and Roth IRA accounts — making Equivest a full-stack investing destination. Assets crossed $2B.",
            },
            {
              year: "2025",
              title: "340,000 Members · $8.4B in Assets",
              desc: "Equivest surpassed 340,000 active investors and $8.4 billion in platform assets. The Professional plan launched with advanced charting, options trading, and API access for power users.",
            },
          ].map((milestone, index) => (
            <div key={milestone.year} className="d-flex gap-3 gap-md-4">
              <div className="d-flex flex-column align-items-center">
                <div
                  className="rounded d-flex align-items-center justify-content-center text-white flex-shrink-0"
                  style={{
                    width: "40px",
                    height: "40px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    background: "linear-gradient(135deg,#1A3A6B,#00C9A7)",
                  }}
                >
                  {milestone.year.slice(2)}
                </div>

                {index < 3 && (
                  <div
                    className="flex-grow-1 mt-2"
                    style={{
                      width: "2px",
                      backgroundColor: "var(--border)",
                    }}
                  />
                )}
              </div>

              <div className="pb-4">
                <p
                  className="small fw-semibold mb-1"
                  style={{ color: "var(--accent)" }}
                >
                  {milestone.year}
                </p>

                <h3 className="fs-6 fw-semibold mb-2">{milestone.title}</h3>

                <p
                  className="small lh-lg mb-0"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {milestone.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Press */}
      <div className="text-center mb-5 pb-lg-3">
        <p
          className="text-uppercase mb-4"
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "var(--muted-foreground)",
          }}
        >
          As Seen In
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-3 mb-3">
          {[
            "Forbes",
            "TechCrunch",
            "Bloomberg",
            "The Wall Street Journal",
            "Business Insider",
          ].map((pub) => (
            <div
              key={pub}
              className="px-4 py-2 rounded border small fw-semibold"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
                color: "var(--muted-foreground)",
              }}
            >
              {pub}
            </div>
          ))}
        </div>

        <p className="small mb-0" style={{ color: "var(--muted-foreground)" }}>
          Equivest has been featured across leading financial and technology
          publications. Press kit and media contacts available at
          equivestmarket.com/press.
        </p>
      </div>

      {/* Context Showcase */}
      <div className="mb-5">
        <ContextShowcase
          eyebrow="Global by design"
          title="Investing education should travel across borders"
          description="Equivest is shaped around a global audience, with inclusive language, market context, and product education that does not assume one home market."
          variant="global"
          points={[
            {
              title: "Inclusive",
              description: "Use language that welcomes varied experience.",
            },
            {
              title: "Contextual",
              description: "Explain products within a global picture.",
            },
            {
              title: "Responsible",
              description: "Keep education and risk clarity together.",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="text-center pb-4">
        <h2
          className="fs-4 mb-3"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
          }}
        >
          Join {BRAND.name} Today
        </h2>

        <p
          className="mx-auto mb-2"
          style={{
            color: "var(--muted-foreground)",
            maxWidth: "448px",
          }}
        >
          Join 340,000 investors already using Equivest to grow their wealth
          with professional tools, zero commissions, and automated portfolios.
        </p>

        <p
          className="small mx-auto mb-4"
          style={{
            color: "var(--muted-foreground)",
            maxWidth: "448px",
          }}
        >
          No account minimums. No commissions on stocks and ETFs. Open your free
          account at equivestmarket.com in under five minutes.
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          <Button href="/signup" size="lg">
            Create Account
          </Button>

          <Button href="/contact" variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
