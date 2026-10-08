import { useState } from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";

const CATEGORIES = [
  "All",
  "Investing Basics",
  "Trading",
  "Automated Investing",
  "Retirement",
  "Risk Management",
  "Market Education",
];

const ARTICLES = [
  {
    cat: "Investing Basics",
    title: "Getting Started: Your First Investment",
    level: "Beginner",
    readTime: "5 min",
    desc: "A step-by-step guide for first-time investors — what investing is, why starting early matters, the key asset classes, and how to open and fund your first Equivest account.",
  },
  {
    cat: "Investing Basics",
    title: "Understanding Stocks and ETFs",
    level: "Beginner",
    readTime: "7 min",
    desc: "Learn the difference between individual stocks and exchange-traded funds, when each makes sense, how to evaluate them, and why diversification is central to long-term success.",
  },
  {
    cat: "Trading",
    title: "Introduction to Technical Analysis",
    level: "Intermediate",
    readTime: "10 min",
    desc: "A practical guide to reading price charts, identifying trend lines, support and resistance levels, and interpreting key indicators like RSI, MACD, and moving averages.",
  },
  {
    cat: "Trading",
    title: "Understanding Order Types",
    level: "Beginner",
    readTime: "6 min",
    desc: "Market orders, limit orders, stop-loss, stop-limit, and trailing stops — what each one does, when to use it, and how to protect yourself from unexpected execution prices.",
  },
  {
    cat: "Automated Investing",
    title: "How Equivest Automated Investing Works",
    level: "Beginner",
    readTime: "5 min",
    desc: "An inside look at how Equivest constructs automated portfolios, selects ETFs, executes quarterly rebalancing, and tracks your progress toward specific financial goals.",
  },
  {
    cat: "Retirement",
    title: "Traditional IRA vs Roth IRA: Which Is Right for You?",
    level: "Intermediate",
    readTime: "8 min",
    desc: "A side-by-side comparison of tax treatment, contribution limits, income thresholds, required minimum distributions, and when each account type creates the most value. Not tax advice.",
  },
  {
    cat: "Retirement",
    title: "Retirement Planning at Every Age",
    level: "Beginner",
    readTime: "9 min",
    desc: "Whether you're 25 or 55, this guide walks through retirement savings benchmarks, contribution strategies, and how to use Equivest accounts to stay on track. Educational only.",
  },
  {
    cat: "Risk Management",
    title: "Understanding Portfolio Risk",
    level: "Intermediate",
    readTime: "8 min",
    desc: "Learn how volatility, beta, standard deviation, and correlation affect your portfolio — and how to use diversification and asset allocation to manage risk without sacrificing returns.",
  },
  {
    cat: "Market Education",
    title: "How the Stock Market Works",
    level: "Beginner",
    readTime: "6 min",
    desc: "A clear explanation of stock exchanges, market hours, how share prices are determined, the role of market makers, and what settlement means for your trades.",
  },
];

const LEVEL_COLORS = {
  Beginner: {
    backgroundColor: "rgba(16,185,129,0.1)",
    color: "var(--gain)",
  },
  Intermediate: {
    backgroundColor: "var(--secondary)",
    color: "var(--primary)",
  },
  Advanced: {
    backgroundColor: "rgba(239,68,68,0.1)",
    color: "var(--loss)",
  },
};

export default function Learn() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = ARTICLES.filter((article) => {
    const matchesCategory =
      activeCategory === "All" || article.cat === activeCategory;

    const searchValue = search.toLowerCase();

    const matchesSearch =
      article.title.toLowerCase().includes(searchValue) ||
      article.desc.toLowerCase().includes(searchValue);

    return matchesCategory && matchesSearch;
  });

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
          Education Center
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
          Learn to Invest with Confidence
        </h1>

        <p
          className="mb-3"
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.7,
            color: "var(--muted-foreground)",
          }}
        >
          Free educational resources written by the Equivest team — from
          absolute beginner guides to advanced trading strategies. Whether
          you're opening your first brokerage account or analyzing options
          Greeks, the Equivest Education Center has you covered.
        </p>

        <p
          className="mb-0"
          style={{
            fontSize: "0.875rem",
            lineHeight: 1.7,
            color: "var(--muted-foreground)",
          }}
        >
          All content is for educational purposes only and does not constitute
          financial, investment, legal, or tax advice. Always consult a
          qualified professional before making investment decisions.
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
          {[
            {
              svg: (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              ),
              label: "120+ Articles",
            },
            {
              svg: (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              ),
              label: "40+ Videos",
            },
            {
              svg: (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              ),
              label: "12 Courses",
            },
            {
              svg: (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              ),
              label: "Always Free",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="d-flex align-items-center gap-2"
              style={{
                fontSize: "0.875rem",
                color: "var(--muted-foreground)",
              }}
            >
              <span style={{ color: "var(--accent)" }}>{item.svg}</span>

              <span className="fw-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="mt-5">
        <div className="position-relative">
          <svg
            className="position-absolute"
            style={{
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--muted-foreground)",
            }}
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>

          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="form-control"
            style={{
              paddingLeft: "38px",
              paddingRight: "16px",
              paddingTop: "10px",
              paddingBottom: "10px",
              fontSize: "0.875rem",
              backgroundColor: "var(--card)",
              borderColor: "var(--border)",
              color: "var(--foreground)",
              borderRadius: "4px",
            }}
          />
        </div>
      </div>

      {/* Category filters */}
      <div className="d-flex flex-wrap gap-2 mt-3">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className="btn border-0 px-3 py-2"
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                borderRadius: "4px",
                color: isActive ? "#fff" : "var(--muted-foreground)",
                background: isActive
                  ? "linear-gradient(135deg, #1A3A6B, #00C9A7)"
                  : "var(--card)",
                border: isActive ? "none" : "1px solid var(--border)",
                transition: "all 0.15s ease",
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Articles grid */}
      <div className="row g-4 mt-2">
        {filtered.map((article) => (
          <div key={article.title} className="col-12 col-sm-6 col-lg-4">
            <Card hover className="h-100 d-flex flex-column">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span
                  className="px-2 py-1 rounded fw-medium"
                  style={{
                    ...(LEVEL_COLORS[article.level] || LEVEL_COLORS.Beginner),
                    fontSize: "0.75rem",
                  }}
                >
                  {article.level}
                </span>

                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {article.readTime} read
                </span>
              </div>

              <h3
                className="mb-2 flex-grow-1"
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--foreground)",
                }}
              >
                {article.title}
              </h3>

              <p
                className="mb-4"
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  color: "var(--muted-foreground)",
                }}
              >
                {article.desc}
              </p>

              <div className="d-flex align-items-center justify-content-between">
                <span
                  className="fw-medium"
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--accent)",
                  }}
                >
                  {article.cat}
                </span>

                <button
                  type="button"
                  className="btn p-0 border-0"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "var(--primary)",
                  }}
                >
                  Read article →
                </button>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Featured course */}
      <section
        className="rounded p-4 p-md-5 mt-5"
        style={{
          background: "linear-gradient(135deg, #0B1426, #1A3A6B)",
        }}
      >
        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-6">
            <p
              className="text-uppercase fw-semibold mb-3"
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                color: "var(--accent)",
              }}
            >
              Featured Course
            </p>

            <h2
              className="h2 text-white mb-4"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
              }}
            >
              [Course Name — e.g. "Investing 101: From Zero to Confident
              Investor"]
            </h2>

            <p
              className="mb-4"
              style={{
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
              }}
            >
              [Course description — describe your flagship educational course or
              series. Include what students will learn and any certification
              offered. Edit to match your educational content.]
            </p>

            <ul className="list-unstyled mb-4">
              {[
                "[Lesson count] lessons · [Duration]",
                "[Topics covered]",
                "[Certificate / completion reward]",
              ].map((item) => (
                <li
                  key={item}
                  className="d-flex align-items-center gap-2 mb-2"
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    className="flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    style={{ color: "var(--accent)" }}
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>

                  {item}
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="btn border-0 px-4 py-2"
              style={{
                backgroundColor: "#00C9A7",
                color: "#0B1426",
                fontWeight: 600,
                borderRadius: "4px",
              }}
            >
              Start Learning Free
            </button>
          </div>

          <div className="col-12 col-lg-6">
            <div className="row g-3">
              {[
                "📈 Trading",
                "💼 Investing",
                "🤖 Automation",
                "🏦 Retirement",
                "⚖️ Risk",
                "📊 Markets",
              ].map((topic) => (
                <div key={topic} className="col-6">
                  <div
                    className="rounded p-3 text-center"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "0.875rem",
                    }}
                  >
                    {topic}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <p
        className="text-center mt-4 mb-0"
        style={{
          fontSize: "0.75rem",
          color: "var(--muted-foreground)",
        }}
      >
        [EDUCATIONAL DISCLAIMER] — This content is for educational purposes only
        and does not constitute financial, investment, legal, or tax advice.
        Consult a qualified professional before making investment decisions.
      </p>
    </div>
  );
}
