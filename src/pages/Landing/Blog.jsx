import { useState } from "react";
import { Link } from "react-router-dom";

const POSTS = [
  {
    id: 1,
    category: "Investing",
    title: "The Case for Dollar-Cost Averaging in a Volatile Market",
    excerpt:
      "When markets swing wildly, the instinct is to wait for clarity before investing. But decades of data suggest the opposite strategy — consistent, regular investing — produces better outcomes for most long-term investors.",
    author: "Alexandra Chen",
    role: "CEO, Equivest",
    date: "Sep 15, 2026",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: 2,
    category: "Options",
    title:
      "Covered Calls Explained: Generate Income from Stocks You Already Own",
    excerpt:
      "If you hold 100 shares of a company and have no plans to sell them anytime soon, writing covered calls is one of the most accessible strategies to generate additional income from your existing portfolio.",
    author: "James Park",
    role: "Chief Product Officer",
    date: "Sep 10, 2026",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 3,
    category: "Retirement",
    title: "Roth IRA vs. Traditional IRA: Which Is Right for You in 2026?",
    excerpt:
      "The choice between a Roth and Traditional IRA boils down to one fundamental question: do you expect your tax rate to be higher now or in retirement? Here's how to think through it.",
    author: "Sarah Whitmore",
    role: "CFO, Equivest",
    date: "Sep 5, 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 4,
    category: "Markets",
    title: "How to Read an Earnings Report: What the Numbers Actually Mean",
    excerpt:
      "EPS beats, revenue misses, guidance raises — earnings season generates enormous amounts of data. Here's a practical framework for filtering signal from noise when a company reports results.",
    author: "Equivest Research Team",
    role: "Equivest",
    date: "Aug 28, 2026",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    category: "Fixed Income",
    title: "Why Bonds Deserve a Place in Your Portfolio Right Now",
    excerpt:
      "With Treasury yields at multi-decade highs, the case for fixed income has never been stronger. We break down how to think about duration, credit risk, and how much of your portfolio bonds should represent.",
    author: "Sarah Whitmore",
    role: "CFO, Equivest",
    date: "Aug 22, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 6,
    category: "Automated Investing",
    title: "The Math Behind Equivest's Rebalancing Engine",
    excerpt:
      "Quarterly rebalancing sounds simple. In practice, it involves trade-off calculations between tax efficiency, transaction costs, and drift tolerance. Here's exactly how our algorithm makes those decisions.",
    author: "David Okonkwo",
    role: "CTO, Equivest",
    date: "Aug 18, 2026",
    readTime: "9 min read",
    featured: false,
  },
  {
    id: 7,
    category: "Security",
    title:
      "How Equivest Protects Your Account: A Deep Dive into Our Security Architecture",
    excerpt:
      "From AES-256 encryption to behavioral biometrics, this post pulls back the curtain on the security systems that protect over $8.4 billion in customer assets on the Equivest platform.",
    author: "Omar Hassan",
    role: "Head of Security",
    date: "Aug 12, 2026",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 8,
    category: "Crypto",
    title:
      "Bitcoin vs. Bitcoin ETFs: What's the Difference and Which Should You Buy?",
    excerpt:
      "The launch of spot Bitcoin ETFs changed the investing landscape. We compare holding Bitcoin directly on Equivest versus buying IBIT, FBTC, or GBTC — and help you decide which structure suits your goals.",
    author: "Equivest Research Team",
    role: "Equivest",
    date: "Aug 6, 2026",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 9,
    category: "Tax",
    title: "Tax-Loss Harvesting: Turn Paper Losses into Real Savings",
    excerpt:
      "Tax-loss harvesting is one of the few legal ways to reduce your tax bill without changing your investment strategy. Here's how it works, the wash-sale rule you need to avoid, and when it makes the most sense.",
    author: "Sarah Whitmore",
    role: "CFO, Equivest",
    date: "Jul 30, 2026",
    readTime: "6 min read",
    featured: false,
  },
];

const CATEGORIES = [
  "All",
  "Investing",
  "Options",
  "Retirement",
  "Markets",
  "Fixed Income",
  "Automated Investing",
  "Security",
  "Crypto",
  "Tax",
];

const CATEGORY_COLORS = {
  Investing: "#1A3A6B",
  Options: "#8B5CF6",
  Retirement: "#00C9A7",
  Markets: "#2D6EFF",
  "Fixed Income": "#10B981",
  "Automated Investing": "#F59E0B",
  Security: "#EF4444",
  Crypto: "#F97316",
  Tax: "#6366F1",
};

const CATEGORY_ICONS = {
  Investing: "📈",
  Options: "⚙️",
  Retirement: "🏦",
  Markets: "📊",
  "Fixed Income": "📄",
  "Automated Investing": "🤖",
  Security: "🔒",
  Crypto: "₿",
  Tax: "🧾",
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? POSTS
      : POSTS.filter((post) => post.category === activeCategory);

  const featured = POSTS.find((post) => post.featured);
  const rest = filtered.filter((post) => !post.featured);

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mx-auto mb-5" style={{ maxWidth: "672px" }}>
        <p
          className="text-uppercase mb-3"
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "var(--accent)",
          }}
        >
          Equivest Blog
        </p>

        <h1
          className="mb-4"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(2.25rem, 5vw, 2.5rem)",
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          Smarter Investing Starts with Better Information
        </h1>

        <p className="lh-lg mb-0" style={{ color: "var(--muted-foreground)" }}>
          Insights, guides, and analysis from the Equivest team — covering
          everything from beginner investing fundamentals to advanced options
          strategies.
        </p>
      </div>

      {/* Featured Post */}
      {featured && activeCategory === "All" && (
        <div
          className="row g-0 rounded overflow-hidden border mb-5"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--card)",
          }}
        >
          <div
            className="col-lg-6 d-flex align-items-center justify-content-center"
            style={{
              minHeight: "320px",
              background: "linear-gradient(135deg, #0B1426, #1A3A6B)",
            }}
          >
            <div className="text-center px-4">
              <div
                className="rounded d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{
                  width: "56px",
                  height: "56px",
                  backgroundColor: "rgba(0,201,167,0.15)",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00C9A7"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>

              <p
                className="mb-0"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.875rem",
                }}
              >
                Featured Article
              </p>
            </div>
          </div>

          <div className="col-lg-6 p-4 p-md-5 d-flex flex-column justify-content-center">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span
                className="rounded-pill"
                style={{
                  padding: "4px 10px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  backgroundColor: `${CATEGORY_COLORS[featured.category]}15`,
                  color: CATEGORY_COLORS[featured.category],
                }}
              >
                {featured.category}
              </span>

              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--muted-foreground)",
                }}
              >
                Featured
              </span>
            </div>

            <h2
              className="mb-3"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                lineHeight: 1.25,
              }}
            >
              {featured.title}
            </h2>

            <p
              className="mb-4 lh-lg"
              style={{
                fontSize: "0.875rem",
                color: "var(--muted-foreground)",
              }}
            >
              {featured.excerpt}
            </p>

            <div className="d-flex align-items-center justify-content-between gap-3">
              <div>
                <p
                  className="mb-1"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                  }}
                >
                  {featured.author}
                </p>

                <p
                  className="mb-0"
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {featured.date} · {featured.readTime}
                </p>
              </div>

              <Link
                to={`/blog/${featured.id}`}
                className="text-decoration-none flex-shrink-0"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--accent)",
                }}
              >
                Read Article →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Category Filter */}
      <div className="d-flex flex-wrap gap-2 mb-5">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className="border rounded-pill"
              style={{
                padding: "6px 14px",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: isActive ? "#fff" : "var(--muted-foreground)",
                background: isActive
                  ? "linear-gradient(135deg, #1A3A6B, #00C9A7)"
                  : "var(--card)",
                borderColor: isActive ? "transparent" : "var(--border)",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = "var(--foreground)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = "var(--muted-foreground)";
                }
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Post Grid */}
      <div className="row g-4">
        {rest.map((post) => {
          const categoryColor = CATEGORY_COLORS[post.category] || "#1A3A6B";

          return (
            <div className="col-sm-6 col-lg-4" key={post.id}>
              <article
                className="h-100 border rounded overflow-hidden"
                style={{
                  backgroundColor: "var(--card)",
                  borderColor: "var(--border)",
                  transition: "box-shadow 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 1rem 2rem rgba(0,0,0,0.05)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    height: "144px",
                    background: `linear-gradient(135deg, ${categoryColor}15, ${categoryColor}05)`,
                  }}
                >
                  <span style={{ fontSize: "2.5rem" }}>
                    {CATEGORY_ICONS[post.category] || "🧾"}
                  </span>
                </div>

                <div className="p-4">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span
                      className="rounded-pill"
                      style={{
                        padding: "2px 8px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        backgroundColor: `${categoryColor}15`,
                        color: categoryColor,
                      }}
                    >
                      {post.category}
                    </span>

                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {post.readTime}
                    </span>
                  </div>

                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                      lineHeight: 1.4,
                    }}
                  >
                    {post.title}
                  </h3>

                  <p
                    className="mb-4"
                    style={{
                      fontSize: "0.75rem",
                      lineHeight: 1.625,
                      color: "var(--muted-foreground)",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {post.excerpt}
                  </p>

                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <div>
                      <p
                        className="mb-1"
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                        }}
                      >
                        {post.author}
                      </p>

                      <p
                        className="mb-0"
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--muted-foreground)",
                        }}
                      >
                        {post.date}
                      </p>
                    </div>

                    <Link
                      to={`/blog/${post.id}`}
                      className="text-decoration-none flex-shrink-0"
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--accent)",
                      }}
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>

      {/* Subscribe CTA */}
      <div
        className="text-center rounded border p-4 p-md-5 mt-5"
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
          Stay Informed
        </h2>

        <p
          className="mx-auto mb-4 small"
          style={{
            maxWidth: "448px",
            color: "var(--muted-foreground)",
          }}
        >
          Get new articles from the Equivest team delivered to your inbox every
          week — no spam, unsubscribe anytime.
        </p>

        <div
          className="d-flex flex-column flex-sm-row gap-3 mx-auto"
          style={{ maxWidth: "384px" }}
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="form-control"
            style={{
              minWidth: 0,
              backgroundColor: "var(--card)",
              borderColor: "var(--border)",
              color: "var(--foreground)",
              fontSize: "0.875rem",
              padding: "10px 16px",
              borderRadius: "4px",
            }}
          />

          <button
            type="button"
            className="btn text-white fw-semibold text-nowrap border-0"
            style={{
              background: "linear-gradient(135deg, #1A3A6B, #00C9A7)",
              fontSize: "0.875rem",
              padding: "10px 20px",
              borderRadius: "4px",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
