import { Link } from "react-router-dom";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import Button from "./ui/Button";

import Card from "./ui/Card";

import {
  BRAND,
  TICKER_ITEMS,
  STOCKS,
  generatePortfolioData,
  generatePriceHistory,
} from "./data/config";

import {
  IconTrendingUp,
  IconZap,
  IconPieChart,
  IconFlask,
  IconShieldCheck,
  IconCpu,
  IconLandmark,
  IconSmartphone,
  IconUsers,
  IconDollarSign,
  IconBan,
  IconLock,
  IconBookOpen,
  IconPhone,
  IconLayout,
} from "./ui/Icons";

const FEATURE_CARDS = [
  {
    icon: <IconTrendingUp />,
    title: "Advanced Trading",
    desc: "Professional-grade tools with real-time data, advanced order types, technical indicators, and instant execution across all major asset classes.",
    href: "/trading",
  },

  {
    icon: <IconZap />,
    title: "Real-Time Market Data",
    desc: "Live quotes, Level 2 depth, options chains, and institutional-grade market intelligence delivered with sub-second latency.",
    href: "/markets",
  },

  {
    icon: <IconPieChart />,
    title: "Portfolio Analytics",
    desc: "Deep performance insights, attribution analysis, risk-adjusted return metrics, and drawdown reporting for your entire portfolio.",
    href: "/investing",
  },

  {
    icon: <IconFlask />,
    title: "Market Research",
    desc: "Analyst ratings, earnings reports, SEC filings, and comprehensive fundamental data to inform every investment decision.",
    href: "/markets",
  },

  {
    icon: <IconShieldCheck />,
    title: "Risk Management",
    desc: "Portfolio stress testing, position sizing tools, stop-loss automation, and real-time risk exposure monitoring.",
    href: "/features",
  },

  {
    icon: <IconCpu />,
    title: "Automated Investing",
    desc: "Set it and forget it — automatic deposits, smart rebalancing, and goal-based portfolios built around your timeline.",
    href: "/automated-investing",
  },

  {
    icon: <IconLandmark />,
    title: "Retirement Accounts",
    desc: "Tax-advantaged retirement accounts and rollover options with goal-based investing strategies for long-term wealth building.",
    href: "/retirement",
  },

  {
    icon: <IconSmartphone />,
    title: "Mobile Trading",
    desc: "Full-featured iOS and Android apps. Trade, monitor your portfolio, set alerts, and manage your account from anywhere.",
    href: "/features",
  },
];

const ALLOCATION_DATA = [
  { name: "Technology", value: 42, color: "#00C9A7" },

  { name: "Healthcare", value: 18, color: "#1A3A6B" },

  { name: "Financials", value: 14, color: "#2D6EFF" },

  { name: "Consumer", value: 12, color: "#8B5CF6" },

  { name: "Other", value: 14, color: "#E2E8F0" },
];

const STATS = [
  { value: "340K+", label: "Active Investors", icon: <IconUsers /> },

  { value: "$3.4B+", label: "Assets on Platform", icon: <IconDollarSign /> },

  { value: "120M+", label: "Trades Executed", icon: <IconZap /> },

  { value: "99.97%", label: "Platform Uptime", icon: <IconShieldCheck /> },
];

const WHY_US = [
  {
    icon: <IconBan />,
    title: "$0 Stock Trades",
    desc: "Commission-free trading on stocks and ETFs across global exchanges. No account minimums, no hidden fees — just clean, straightforward investing.",
  },

  {
    icon: <IconZap />,
    title: "Instant Account Opening",
    desc: "Open and fund your Equivest account in under five minutes. Most accounts are approved instantly, with funds available to trade the same business day.",
  },

  {
    icon: <IconLock />,
    title: "Bank-Level Security",
    desc: "256-bit SSL encryption, two-factor authentication, biometric login, and SIPC coverage up to $500,000 protect your account and assets at all times.",
  },

  {
    icon: <IconBookOpen />,
    title: "Free Education Center",
    desc: "Access a full library of articles, courses, and market guides designed for investors at every level — from first-time buyers to seasoned traders.",
  },

  {
    icon: <IconPhone />,
    title: "7-Day Customer Support",
    desc: "Real Equivest team members available Monday–Sunday via live chat, email, and phone. No bots, no runaround — wherever you are in the world.",
  },

  {
    icon: <IconLayout />,
    title: "All Your Accounts in One Place",
    desc: "Brokerage, tax-advantaged, and Automated Investing portfolios — all managed from a single, unified Equivest dashboard.",
  },
];

const TESTIMONIALS = [
  {
    name: "Marcus T.",
    role: "Software Engineer, Toronto",
    quote:
      "I switched to Equivest after years on other platforms and the difference in the charting tools and portfolio analytics is night and day. The UI is incredibly clean.",
    rating: 5,
  },

  {
    name: "Priya L.",
    role: "Financial Analyst, London",
    quote:
      "The automated investing feature is exactly what I needed. Set up my risk profile once and it just runs. Rebalancing is seamless.",
    rating: 5,
  },

  {
    name: "Jordan R.",
    role: "Freelancer & First-Time Investor, Singapore",
    quote:
      "I was intimidated by investing until I found Equivest. The education center helped me understand everything, and I made my first trade within a week of signing up.",
    rating: 5,
  },
];

const portfolioData = generatePortfolioData(12);

function HeroDashboardMockup() {
  return (
    <div className="position-relative">
      <div className="d-none d-lg-d-block">
        <div className="theme-card rounded border theme-border shadow-lg shadow-soft overflow-hidden">
          <div className="d-flex align-items-center gap-2 px-3 py-3 border-bottom theme-border theme-muted-bg">
            <div className="w-2.5 home-h-2.5 rounded-pill bg-danger" />

            <div className="w-2.5 home-h-2.5 rounded-pill bg-warning" />

            <div className="w-2.5 home-h-2.5 rounded-pill bg-success" />

            <div className="ml-4 d-flex-fill theme-border-bg rounded h-4 max-w-xs" />
          </div>

          <div className="p-3 row home-grid home-grid-3 gap-3">
            <div className="col-lg-8 d-flex flex-column gap-3">
              <div className="d-flex align-items-start justify-content-between">
                <div>
                  <p className="home-text-10 theme-muted text-uppercase text-uppercase fw-medium">
                    Total Portfolio Value
                  </p>

                  <p
                    className="fs-3 fw-bold mt-1"
                    style={{
                      fontFamily: "'Nunito',sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    $284,731.56
                  </p>

                  <p className="small theme-gain fw-medium mt-1">
                    ▲ +$1,842.30 today
                  </p>
                </div>

                <div className="d-flex gap-1">
                  {["1D", "1W", "1M", "1Y"].map((p) => (
                    <span
                      key={p}
                      className="home-text-9 px-1.5 py-0.5 rounded theme-muted-bg theme-muted"
                    >
                      {p}
                    </span>
                  ))}

                  <span
                    className="home-text-9 px-1.5 py-0.5 rounded text-white"
                    style={{
                      background: "linear-gradient(135deg,#1A3A6B,#00C9A7)",
                    }}
                  >
                    ALL
                  </span>
                </div>
              </div>

              <div className="home-home-h-24" style={{ minHeight: 96 }}>
                <ResponsiveContainer width="100%" height={96}>
                  <AreaChart data={portfolioData}>
                    <defs>
                      <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#10B981"
                          stopOpacity={0.2}
                        />

                        <stop
                          offset="95%"
                          stopColor="#10B981"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>

                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#10B981"
                      strokeWidth={2}
                      fill="url(#heroGrad)"
                      dot={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="d-flex flex-column gap-1.5">
                {STOCKS.slice(0, 4).map((s) => (
                  <div
                    key={s.symbol}
                    className="d-flex align-items-center justify-content-between small"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <div className="home-icon-6 rounded theme-muted-bg d-flex align-items-center justify-content-center home-text-8 fw-bold theme-muted">
                        {s.symbol[0]}
                      </div>

                      <span className="fw-medium theme-foreground">
                        {s.symbol}
                      </span>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                      <span className="font-mono theme-foreground">
                        ${s.price.toFixed(2)}
                      </span>

                      <span
                        className={`home-text-9 px-1.5 py-0.5 rounded font-medium ${s.up ? "gain-bg gain-text" : "loss-bg loss-text"}`}
                      >
                        {s.up ? "+" : ""}
                        {s.change}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="d-flex flex-column gap-3">
              <div className="text-center">
                <p className="home-text-9 theme-muted text-uppercase text-uppercase mb-2 fw-medium">
                  Allocation
                </p>

                <div
                  className="home-home-h-28 d-flex align-items-center justify-content-center"
                  style={{ minHeight: 112 }}
                >
                  <ResponsiveContainer width="100%" height={112}>
                    <PieChart>
                      <Pie
                        data={ALLOCATION_DATA}
                        innerRadius={30}
                        outerRadius={44}
                        paddingAngle={2}
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                      >
                        {ALLOCATION_DATA.map((entry, i) => (
                          <Cell key={i} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="d-flex flex-column gap-1">
                  {ALLOCATION_DATA.slice(0, 3).map((d) => (
                    <div
                      key={d.name}
                      className="d-flex align-items-center justify-content-between home-text-9"
                    >
                      <div className="d-flex align-items-center gap-1">
                        <div
                          className="w-1.5 h-1.5 rounded-pill"
                          style={{ background: d.color }}
                        />

                        <span className="theme-muted">{d.name}</span>
                      </div>

                      <span className="font-mono fw-medium">{d.value}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border theme-border rounded p-2 d-flex flex-column gap-2">
                <div className="d-flex gap-1">
                  <button
                    className="d-flex-fill py-1 home-text-9 fw-semibold rounded text-white"
                    style={{ background: "#10B981" }}
                  >
                    Buy
                  </button>

                  <button className="d-flex-fill py-1 home-text-9 fw-semibold rounded theme-muted-bg theme-muted">
                    Sell
                  </button>
                </div>

                <div className="d-flex flex-column gap-1.5">
                  {[
                    ["Symbol", "AAPL"],
                    ["Quantity", "10 shares"],
                    ["Est. Total", "$2,124.50"],
                  ].map(([lbl, val]) => (
                    <div key={lbl} className="theme-muted-bg rounded px-2 py-2">
                      <p className="home-text-8 theme-muted">{lbl}</p>

                      <p className="home-text-10 fw-semibold">{val}</p>
                    </div>
                  ))}
                </div>

                <button
                  className="w-100 py-2 home-text-9 fw-bold rounded text-white"
                  style={{
                    background: "linear-gradient(135deg,#10B981,#059669)",
                  }}
                >
                  Place Buy Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile phone overlay */}

      <div className="position-absolute -bottom-8 -right-8 home-w-36 d-none d-lg-d-block">
        <div className="theme-foreground-bg rounded p-2 shadow-lg">
          <div className="theme-card rounded overflow-hidden home-h-56 p-2 d-flex flex-column gap-2">
            <div className="d-flex align-items-center justify-content-between">
              <div className="home-text-8 fw-bold">{BRAND.name}</div>

              <div className="home-text-8 theme-accent">Portfolio</div>
            </div>

            <div>
              <p className="home-text-7 theme-muted">Total Value</p>

              <p
                className="small fw-bold"
                style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700 }}
              >
                $284,731
              </p>

              <p className="home-text-8 theme-gain">▲ +$1,842</p>
            </div>

            <div className="home-h-16" style={{ minHeight: 64 }}>
              <ResponsiveContainer width="100%" height={64}>
                <AreaChart data={portfolioData.slice(6)}>
                  <defs>
                    <linearGradient id="mobileGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00C9A7" stopOpacity={0.2} />

                      <stop offset="95%" stopColor="#00C9A7" stopOpacity={0} />
                    </linearGradient>
                  </defs>

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#00C9A7"
                    strokeWidth={1.5}
                    fill="url(#mobileGrad)"
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="d-flex flex-column gap-1">
              {STOCKS.slice(0, 3).map((s) => (
                <div
                  key={s.symbol}
                  className="d-flex align-items-center justify-content-between"
                >
                  <span className="home-text-8 fw-medium">{s.symbol}</span>

                  <span
                    className={`home-text-8 font-mono ${s.up ? "text-[var(--gain)]" : "text-[var(--loss)]"}`}
                  >
                    {s.up ? "+" : ""}
                    {s.change}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TradingMockup() {
  const sparkData = generatePriceHistory(40, 212);

  return (
    <div className="theme-card rounded border theme-border shadow-lg overflow-hidden">
      <div className="border-bottom theme-border px-4 py-3 d-flex align-items-center justify-content-between theme-muted-bg">
        <div className="d-flex align-items-center gap-3">
          <div className="w-7 h-7 rounded theme-secondary d-flex align-items-center justify-content-center small fw-bold theme-primary">
            A
          </div>

          <div>
            <p className="small fw-semibold">AAPL — Apple Inc.</p>

            <p className="small theme-muted">
              Global Exchange · Real-time data
            </p>
          </div>
        </div>

        <div className="text-end">
          <p
            className="fs-5 fw-bold font-mono"
            style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700 }}
          >
            $212.45
          </p>

          <p className="small theme-gain">▲ +$1.14 (+0.54%)</p>
        </div>
      </div>

      <div className="row home-grid home-grid-3 gap-0 border-start theme-divide">
        <div className="col-lg-8 p-3">
          <div className="home-h-48" style={{ minHeight: 192 }}>
            <ResponsiveContainer width="100%" height={192}>
              <AreaChart data={sparkData}>
                <defs>
                  <linearGradient id="tradingGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.15} />

                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <Area
                  type="monotone"
                  dataKey="price"
                  stroke="#10B981"
                  strokeWidth={2}
                  fill="url(#tradingGrad)"
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="d-flex gap-3 mt-2">
            {["MA(20)", "RSI", "MACD", "BB"].map((ind) => (
              <span
                key={ind}
                className="home-text-10 px-2 py-0.5 rounded theme-secondary theme-primary fw-medium"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>

        <div className="p-3 d-flex flex-column gap-3">
          <div className="d-flex gap-1">
            <button className="d-flex-fill py-2 small fw-semibold rounded text-white theme-gain-bg">
              Buy
            </button>

            <button className="d-flex-fill py-2 small fw-semibold rounded theme-muted-bg theme-muted">
              Sell
            </button>
          </div>

          <div className="d-flex flex-column gap-2">
            {[
              ["Order Type", "Market"],
              ["Quantity", "25 shares"],
              ["Price", "$212.45"],
              ["Est. Value", "$5,311.25"],
            ].map(([label, value]) => (
              <div key={label} className="theme-muted-bg rounded px-3 py-2">
                <p className="home-text-10 theme-muted">{label}</p>

                <p className="small fw-semibold font-mono mt-1">{value}</p>
              </div>
            ))}
          </div>

          <button
            className="w-100 py-2 small fw-bold rounded text-white"
            style={{ background: "linear-gradient(135deg,#10B981,#059669)" }}
          >
            Place Buy Order
          </button>
        </div>
      </div>
    </div>
  );
}

const HOME_STYLES = `
.home-page .theme-card { background-color: var(--card); }
.home-page .theme-secondary { background-color: var(--secondary); }
.home-page .theme-muted-bg { background-color: var(--muted); }
.home-page .theme-border { border-color: var(--border) !important; }
.home-page .theme-foreground { color: var(--foreground); }
.home-page .theme-muted { color: var(--muted-foreground); }
.home-page .theme-accent { color: var(--accent); }
.home-page .theme-gain { color: var(--gain); }
.home-page .theme-loss { color: var(--loss); }
.home-page .theme-gain-bg { background-color: var(--gain); }
.home-page .theme-loss-bg { background-color: var(--loss); }
.home-page .theme-accent-bg { background-color: var(--accent); }
.home-page .theme-border-bg { background-color: var(--border); }
.home-page .theme-foreground-bg { background-color: var(--foreground); }
.home-page .theme-border-text { color: var(--border); }
.home-page .theme-primary { color: var(--primary); }
.home-page .theme-divide > * + * { border-color: var(--border) !important; }
.home-page .home-accent-soft { background-color: rgba(0,201,167,.1); }
.home-page .shadow-soft { box-shadow: 0 1rem 3rem rgba(26,58,107,.15); }
.home-page .shadow-accent { box-shadow: 0 1rem 3rem rgba(0,201,167,.1); }
.home-page .border-accent { border-color: var(--accent) !important; }
.home-page .border-start-accent { border-left-color: var(--accent) !important; }
.home-page .home-hover-muted:hover { background-color: var(--muted); }
.home-page .home-text-10 { font-size: 10px; }
.home-page .home-text-9 { font-size: 9px; }
.home-page .home-text-8 { font-size: 8px; }
.home-page .home-text-7 { font-size: 7px; }
.home-page .home-hover { transition: all .2s ease; }
.home-page .home-hover:hover { box-shadow: 0 .125rem .25rem rgba(0,0,0,.075); }
.home-page .home-card-hover { transition: all .2s ease; }
.home-page .home-card-hover:hover { transform: translateY(-2px); box-shadow: 0 .5rem 1rem rgba(0,0,0,.08); }
.home-page .home-grid > * { padding: .75rem; }
@media (min-width:576px) { .home-page .home-grid-2 > * { width:50%; } .home-page .home-grid-3 > * { width:33.333333%; } }
@media (min-width:992px) { .home-page .home-grid-2-lg > * { width:50%; } .home-page .home-grid-4-lg > * { width:25%; } }

.home-page .home-icon-5 { width:20px; height:20px; }
.home-page .home-icon-4 { width:16px; height:16px; }
.home-page .home-icon-35 { width:14px; height:14px; }
.home-page .home-icon-6 { width:24px; height:24px; }
.home-page .home-icon-9 { width:36px; height:36px; }
.home-page .home-h-28 { height:112px; }
.home-page .home-h-56 { height:224px; }
.home-page .home-h-48 { height:192px; }
.home-page .home-h-24 { height:96px; }
.home-page .home-h-16 { height:64px; }
.home-page .home-w-36 { width:144px; }
.home-page .home-h-2 { height:8px; }
`;

export default function Home() {
  return (
    <div className="home-page">
      <style>{HOME_STYLES}</style>

      <section className="position-relative min-vh-100 d-flex align-items-center overflow-hidden pt-5">
        <div className="position-absolute top-0 bottom-0 start-0 end-0 pe-none">
          <div
            className="position-absolute top-0 bottom-0 start-0 end-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,201,167,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(26,58,107,0.1) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="container mx-auto px-3 px-4 px-4 py-5 w-100">
          <div className="row home-grid home-grid-2 gap-4 gap-4 align-items-center">
            <div className="animate-fade-up">
              <div className="d-inline-d-flex align-items-center gap-2 px-3 py-2 rounded-pill theme-secondary border theme-border small fw-medium theme-accent mb-4">
                <span className="w-1.5 h-1.5 rounded-pill theme-accent-bg animate-pulse" />
                Live Markets · Real-Time Data · 2026
              </div>

              <h1
                className="display-4 display-3 display-2 fw-bolder lh-1 tracking-tight mb-4"
                style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800 }}
              >
                Trade Smarter.
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg,#1A3A6B,#00C9A7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Invest With
                  <br />
                  Confidence.
                </span>
              </h1>

              <p className="fs-5 theme-muted lh-lg mb-4 container">
                Equivest is the modern investment platform built for every stage
                of your financial journey — from your first stock purchase to a
                fully automated retirement strategy.
              </p>

              <p className="small theme-muted lh-lg mb-5 container">
                Zero-commission stock trading, professional charting tools,
                automated portfolios, and tax-advantaged retirement accounts —
                all in one clean, intuitive platform at equivestmarket.com.
              </p>

              <div className="d-flex flex-wrap align-items-center gap-3 mb-5">
                <Button href="/signup" size="lg">
                  Create Free Account
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Button>

                <Button href="/features" variant="outline" size="lg">
                  Explore Features
                </Button>
              </div>

              <div className="d-flex flex-wrap align-items-center gap-3">
                {[
                  { label: "Investor Protected" },

                  { label: "Globally Regulated" },

                  { label: "Instant Execution" },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="d-flex align-items-center gap-2 small theme-muted"
                  >
                    <svg
                      className="home-icon-35 theme-gain"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>

                    <span className="fw-medium">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="position-relative animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <HeroDashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── Market ticker ─────────────────────────────────────────────────── */}

      <div className="theme-card border-top border-bottom theme-border overflow-hidden py-3">
        <div className="d-flex ticker-scroll text-nowrap">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => {
            return (
              <div
                key={i}
                className="d-inline-d-flex align-items-center gap-2 px-4 flex-shrink-0 border-r theme-border"
              >
                <span className="small fw-semibold theme-foreground">
                  {item.symbol}
                </span>

                <span className="small font-mono theme-foreground">
                  {item.price}
                </span>

                <span
                  className={`text-xs font-mono font-medium ${item.up ? "text-[var(--gain)]" : "text-[var(--loss)]"}`}
                >
                  {item.up ? "▲" : "▼"} {item.change}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Stats bar ─────────────────────────────────────────────────────── */}

      <section className="theme-secondary border-bottom theme-border">
        <div className="container mx-auto px-3 px-4 px-4">
          <div className="row home-grid home-grid-2 home-grid-4-lg border-start theme-divide">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="px-4 py-4 text-center d-flex d-flex-column align-items-center gap-2"
              >
                <div
                  className="home-icon-9 rounded d-flex align-items-center justify-content-center theme-accent"
                  style={{ background: "rgba(0,201,167,0.12)" }}
                >
                  {stat.icon}
                </div>

                <p
                  className="fs-3 fw-bold lh-1"
                  style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700 }}
                >
                  {stat.value}
                </p>

                <p className="small theme-muted fw-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features grid ─────────────────────────────────────────────────── */}

      <section className="py-5 container mx-auto px-3 px-4 px-4">
        <div className="text-center mb-5">
          <p className="small fw-semibold theme-accent text-uppercase text-uppercase mb-3">
            Everything You Need
          </p>

          <h2
            className="display-5 fw-bold mb-4"
            style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700 }}
          >
            A Complete Investment Platform
          </h2>

          <p className="theme-muted container mx-auto lh-lg">
            Equivest brings together everything a modern investor needs —
            real-time trading, automated portfolios, retirement accounts, and
            market research — in a single platform built for both beginners and
            professionals. Over 340,000 investors trust Equivest to grow their
            wealth.
          </p>
        </div>

        <div className="row home-grid home-grid-2 home-grid-4-lg gap-3">
          {FEATURE_CARDS.map((f) => (
            <Link key={f.title} to={f.href}>
              <div className="theme-card border theme-border rounded p-4 home-hover home-card-hover transition  h-100">
                <div
                  className="home-icon-9 rounded mb-3 d-flex align-items-center justify-content-center theme-accent"
                  style={{ background: "rgba(0,201,167,0.1)" }}
                >
                  {f.icon}
                </div>

                <h3 className="fw-semibold theme-foreground mb-2">{f.title}</h3>

                <p className="small theme-muted lh-lg">{f.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Why choose us ─────────────────────────────────────────────────── */}

      <section className="py-5 theme-card border-top border-bottom theme-border">
        <div className="container mx-auto px-3 px-4 px-4">
          <div className="row home-grid home-grid-2 gap-4 align-items-center">
            <div>
              <p className="small fw-semibold theme-accent text-uppercase text-uppercase mb-3">
                Why {BRAND.name}
              </p>

              <h2
                className="display-5 fw-bold mb-4"
                style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700 }}
              >
                Investing Should Work for You, Not Against You
              </h2>

              <p className="theme-muted lh-lg mb-4">
                Most investors face the same frustrating obstacles: high fees
                that erode returns, complicated tools designed for
                professionals, accounts scattered across different brokers, and
                no clear path forward. Equivest was built to eliminate all of
                that.
              </p>

              <p className="theme-muted lh-lg mb-5">
                From your first $10 investment to a $1M+ portfolio, Equivest
                scales with you. We combine the power of a professional trading
                terminal with the simplicity of an automated portfolio — all in
                one account, at one of the lowest cost structures in the
                industry.
              </p>

              <Button href="/about" variant="secondary">
                Our Story &amp; Mission
              </Button>
            </div>

            <div className="row home-grid home-grid-2 gap-3">
              {WHY_US.map((item) => (
                <div
                  key={item.title}
                  className="p-3 rounded border theme-border home-hover-accent home-hover transition"
                >
                  <span
                    className="w-8 h-8 rounded mb-2 d-flex align-items-center justify-content-center theme-accent"
                    style={{ background: "rgba(0,201,167,0.1)" }}
                  >
                    {item.icon}
                  </span>

                  <h3 className="fw-semibold small mb-2">{item.title}</h3>

                  <p className="small theme-muted lh-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trading terminal section ──────────────────────────────────────── */}

      <section className="py-5 container mx-auto px-3 px-4 px-4">
        <div className="row home-grid home-grid-2 gap-4 align-items-center">
          <div>
            <p className="small fw-semibold theme-accent text-uppercase text-uppercase mb-3">
              Advanced Trading
            </p>

            <h2
              className="display-5 fw-bold mb-4"
              style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700 }}
            >
              Professional Tools for Every Trader
            </h2>

            <p className="theme-muted lh-lg mb-4">
              Whether you're a day trader who needs sub-millisecond execution or
              a long-term investor who wants clean, readable charts — the
              Equivest terminal has tools designed for both. Real-time data,
              professional charting, and a streamlined order ticket in one
              workspace.
            </p>

            <p className="theme-muted lh-lg mb-4">
              Our charting engine supports 60+ technical indicators, multiple
              chart types, and drawing tools. Combined with Level 2 order book
              data and smart order routing, Equivest gives you
              institutional-grade execution at zero commission.
            </p>

            <ul className="d-flex flex-column gap-3 mb-5">
              {[
                "Candlestick charts with 50+ technical indicators",

                "Market, limit, stop-loss, and advanced order types",

                "Real-time Level 2 quotes and order book depth",

                "Options chains with Greeks and strategy payoff visualizer",
              ].map((item) => (
                <li key={item} className="d-flex align-items-start gap-3 small">
                  <svg
                    className="home-icon-5 theme-accent flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>

                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button href="/trading">Open Trading Terminal</Button>
          </div>

          <div>
            <TradingMockup />
          </div>
        </div>
      </section>

      {/* ── Automated Investing ───────────────────────────────────────────── */}

      <section className="py-5 theme-card border-top border-bottom theme-border">
        <div className="container mx-auto px-3 px-4 px-4">
          <div className="row home-grid home-grid-2 gap-4 align-items-center">
            <div className="d-flex flex-column gap-3">
              <Card className="border-start border-4 border-start-accent">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div>
                    <p className="small theme-muted text-uppercase text-uppercase fw-medium">
                      Goal Progress
                    </p>

                    <p
                      className="fs-4 fw-bold mt-1"
                      style={{
                        fontFamily: "'Nunito',sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      Retirement 2050
                    </p>
                  </div>

                  <span className="small px-2 py-1 rounded home-accent-soft theme-accent fw-medium">
                    On Track
                  </span>
                </div>

                <div className="d-flex align-items-center justify-content-between small mb-2">
                  <span className="theme-muted">$124,800 saved</span>

                  <span className="fw-medium">$1,500,000 goal</span>
                </div>

                <div className="w-100 home-h-2 theme-muted-bg rounded-pill">
                  <div
                    className="home-h-2 rounded-pill"
                    style={{
                      width: "42%",
                      background: "linear-gradient(90deg,#1A3A6B,#00C9A7)",
                    }}
                  />
                </div>

                <p className="small theme-muted mt-2">
                  42% of goal · 24 years to target · 0.20% annual management fee
                </p>
              </Card>

              <div className="row home-grid home-grid-2 gap-3">
                {[
                  { label: "Monthly Deposit", value: "$500 / mo" },

                  { label: "Historical Return\*", value: "8.4% avg" },

                  { label: "Risk Profile", value: "Moderate Growth" },

                  { label: "Next Rebalance", value: "Oct 1, 2026" },
                ].map((item) => (
                  <Card key={item.label} className="text-center">
                    <p className="small theme-muted mb-1">{item.label}</p>

                    <p className="fw-semibold small">{item.value}</p>
                  </Card>
                ))}
              </div>

              <p className="small theme-muted">
                \* Past performance does not guarantee future results. Equivest
                portfolios are not FDIC insured.
              </p>
            </div>

            <div>
              <p className="small fw-semibold theme-accent text-uppercase text-uppercase mb-3">
                Automated Investing
              </p>

              <h2
                className="display-5 fw-bold mb-4"
                style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700 }}
              >
                Invest on Autopilot
              </h2>

              <p className="theme-muted lh-lg mb-4">
                Equivest Automated Investing removes every barrier between you
                and long-term wealth. Tell us your goal, your timeline, and how
                much risk you're comfortable with — we build and manage a
                diversified ETF portfolio that stays on track, automatically.
              </p>

              <p className="theme-muted lh-lg mb-4">
                Recurring contributions, quarterly rebalancing, and dividend
                reinvestment all happen in the background at just 0.20% annually
                — a fraction of what traditional advisors charge for the same
                service.
              </p>

              <ul className="d-flex flex-column gap-3 mb-5">
                {[
                  "Automatic contributions from $10 per month",

                  "Goal-based portfolios aligned to your timeline and risk tolerance",

                  "Automatic quarterly rebalancing to maintain target allocation",

                  "Diversified portfolios spanning global stocks, bonds, and ETFs",
                ].map((item) => (
                  <li
                    key={item}
                    className="d-flex align-items-start gap-3 small"
                  >
                    <svg
                      className="home-icon-5 theme-accent flex-shrink-0 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button href="/automated-investing">
                Explore Automated Investing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Retirement ────────────────────────────────────────────────────── */}

      <section className="py-5 container mx-auto px-3 px-4 px-4">
        <div className="text-center container mx-auto mb-5">
          <p className="small fw-semibold theme-accent text-uppercase text-uppercase mb-3">
            Retirement Accounts
          </p>

          <h2
            className="display-5 fw-bold mb-4"
            style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700 }}
          >
            Build Your Retirement Wealth
          </h2>

          <p className="theme-muted lh-lg mb-3">
            The earlier you start saving for retirement, the more compounding
            works in your favor. Opening a tax-advantaged retirement account
            with Equivest takes minutes — and even small monthly contributions
            can grow significantly over decades.
          </p>

          <p className="small theme-muted lh-lg">
            Equivest supports a range of tax-advantaged retirement account
            structures depending on your country of residence. All retirement
            accounts include free access to Equivest Automated Investing and
            goal-based portfolio management.
          </p>
        </div>

        <div className="row home-grid home-grid-3 gap-3 container mx-auto mb-5">
          {[
            {
              type: "Tax-Deferred Account",
              limit: "Varies by country",
              benefit: "Tax-deferred growth",
              desc: "Contributions may reduce your taxable income today. Investments grow tax-deferred and are taxed only upon withdrawal in retirement — ideal for investors expecting lower income later in life.",
            },

            {
              type: "Tax-Free Account",
              limit: "Varies by country",
              benefit: "Tax-free growth",
              desc: "Contribute post-tax income and enjoy completely tax-free growth and withdrawals in retirement. Best suited for investors who expect to be in a higher tax bracket later in life.",
              featured: true,
            },

            {
              type: "Rollover & Transfer",
              limit: "No limit",
              benefit: "Consolidate existing accounts",
              desc: "Transfer balances from existing pension schemes, workplace plans, or retirement accounts into Equivest. We coordinate with your existing provider and handle the paperwork at no charge.",
            },
          ].map((acct) => (
            <div
              key={acct.type}
              className={`rounded p-6 border text-left ${acct.featured ? "border-accent shadow-lg shadow-accent" : "theme-border bg-[var(--card)]"}`}
            >
              {acct.featured && (
                <span className="small fw-semibold theme-accent text-uppercase text-uppercase d-block mb-3">
                  Most Popular
                </span>
              )}

              <h3
                className="fs-5 fw-bold mb-1"
                style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700 }}
              >
                {acct.type}
              </h3>

              <p className="small theme-accent fw-medium mb-2">
                {acct.benefit}
              </p>

              <p className="small theme-muted lh-lg">{acct.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/retirement">Explore Retirement Accounts</Button>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}

      <section className="py-5 theme-card border-top border-bottom theme-border">
        <div className="container mx-auto px-3 px-4 px-4">
          <div className="text-center mb-5">
            <p className="small fw-semibold theme-accent text-uppercase text-uppercase mb-3">
              Customer Stories
            </p>

            <h2
              className="display-5 fw-bold mb-4"
              style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700 }}
            >
              Trusted by 340,000+ Investors
            </h2>

            <p className="theme-muted container mx-auto">
              From first-time investors to seasoned traders, Equivest users
              share one thing in common: they take their financial future
              seriously. Here's what a few of them have to say.
            </p>
          </div>

          <div className="row home-grid home-grid-3 gap-3">
            {TESTIMONIALS.map((t, i) => (
              <Card key={i}>
                <div className="d-flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <svg
                      key={s}
                      className="home-icon-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="small theme-muted lh-lg mb-4 fst-italic">
                  "{t.quote}"
                </p>

                <div>
                  <p className="small fw-semibold">{t.name}</p>

                  <p className="small theme-muted">{t.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────────── */}

      <section className="py-5 container mx-auto px-3 px-4 px-4">
        <div className="text-center mb-5">
          <p className="small fw-semibold theme-accent text-uppercase text-uppercase mb-3">
            Get Started
          </p>

          <h2
            className="display-5 fw-bold mb-4"
            style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700 }}
          >
            Open an Account in Minutes
          </h2>

          <p className="theme-muted container mx-auto lh-lg">
            No paperwork. No branch visits. No minimum deposit required. Most
            accounts are approved instantly and ready to trade the same business
            day.
          </p>
        </div>

        <div className="row home-grid home-grid-2 home-grid-4-lg gap-3 mb-5">
          {[
            {
              step: "01",
              title: "Create Your Account",
              desc: "Sign up with your email, verify your identity with a government-issued ID, and link a bank account — the whole process takes about four minutes.",
            },

            {
              step: "02",
              title: "Choose Your Account Type",
              desc: "Open a standard brokerage account, a tax-advantaged retirement account, or an automated portfolio — all accessible from your single Equivest dashboard.",
            },

            {
              step: "03",
              title: "Fund Your Account",
              desc: "Transfer funds via bank transfer or international wire. Funds are typically available to trade within one business day of cleared deposit.",
            },

            {
              step: "04",
              title: "Start Investing",
              desc: "Buy your first stock or ETF commission-free, set up automated recurring investments, or let our robo-advisor build and manage a diversified portfolio for you.",
            },
          ].map((s) => (
            <div
              key={s.step}
              className="position-relative ps-4 border-start border-2 theme-border"
            >
              <span
                className="display-5 fw-bolder theme-border-text lh-1 d-block mb-3"
                style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 900 }}
              >
                {s.step}
              </span>

              <h3
                className="fw-bold mb-2"
                style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700 }}
              >
                {s.title}
              </h3>

              <p className="small theme-muted lh-lg">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="theme-card border theme-border rounded p-4 container mx-auto">
          <p className="small fw-semibold mb-3">
            What you'll need to open an account:
          </p>

          <div className="row home-grid home-grid-3 gap-3 small theme-muted">
            {[
              [
                "Tax Identification Number",
                "Your national tax ID (TIN, VAT number, or country equivalent) — required for tax reporting and regulatory identity verification.",
              ],

              [
                "Government-Issued ID",
                "Driver's license or passport. Photo verification takes under 60 seconds.",
              ],
            ].map(([label, detail]) => (
              <div key={label} className="d-flex align-items-start gap-2">
                <svg
                  className="home-icon-4 theme-gain flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>

                <div>
                  <p className="fw-medium theme-foreground">{label}</p>

                  <p className="small mt-1">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Access ─────────────────────────────────────────────────── */}

      <section className="py-5 theme-card border-top border-bottom theme-border">
        <div className="container mx-auto px-3 px-4 px-4">
          <div className="row home-grid home-grid-2 gap-4 align-items-center">
            <div>
              <p className="small fw-semibold theme-accent text-uppercase text-uppercase mb-3">
                Built for the World
              </p>

              <h2
                className="display-5 fw-bold mb-4"
                style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700 }}
              >
                Invest in Global Markets from Anywhere
              </h2>

              <p className="theme-muted lh-lg mb-4">
                Equivest is accessible to investors worldwide. Whether you're
                based in North America, Europe, Asia, or beyond, you can open an
                account, fund it in your local currency, and begin trading
                stocks, ETFs, crypto, bonds, and commodities — all from a single
                platform.
              </p>

              <p className="theme-muted lh-lg mb-4">
                International users gain the same access to globally-listed
                equities and ETFs as domestic investors, with no additional
                barriers. Our platform supports wire transfers and international
                bank deposits, making it straightforward to move funds across
                borders.
              </p>

              <p className="theme-muted lh-lg mb-5">
                For investors everywhere, Equivest provides a regulated, secure
                gateway to the world's deepest capital markets — including major
                global exchanges, options markets, and cryptocurrency exchanges
                — with full transparency and competitive pricing.
              </p>

              <Button href="/signup">Open a Global Account</Button>
            </div>

            <div className="row home-grid home-grid-2 gap-3">
              {[
                {
                  region: "North America",
                  flag: "🇺🇸🇨🇦",
                  desc: "Full platform access including IRA accounts, automated investing, and all asset classes with bank transfer funding.",
                },

                {
                  region: "Europe",
                  flag: "🇬🇧🇩🇪🇫🇷",
                  desc: "Access global equities, ETFs, and crypto markets. International bank transfer funding supported.",
                },

                {
                  region: "Asia Pacific",
                  flag: "🇯🇵🇦🇺🇸🇬",
                  desc: "Trade global markets during your daytime hours. Pre-market and after-hours sessions extend your trading window.",
                },

                {
                  region: "Latin America & Others",
                  flag: "🇧🇷🇲🇽🌍",
                  desc: "Open an account from most countries. Wire transfer funding available globally. Multi-currency support.",
                },
              ].map((r) => (
                <div
                  key={r.region}
                  className="border theme-border rounded p-3 d-flex flex-column gap-2 home-hover-accent transition"
                >
                  <p className="fs-5">{r.flag}</p>

                  <p className="fw-semibold small">{r.region}</p>

                  <p className="small theme-muted lh-lg">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 row home-grid home-grid-3 gap-3">
            {[
              {
                label: "190+ Countries Supported",
                desc: "Equivest accounts are available to eligible investors in over 190 countries. Identity verification and regulatory requirements vary by jurisdiction.",
              },

              {
                label: "Multi-Currency Deposits",
                desc: "Fund your account in USD, EUR, GBP, JPY, AUD, and 15+ additional currencies via international wire transfer. Exchange rates shown at time of deposit.",
              },

              {
                label: "Regulated & Transparent",
                desc: "Equivest Securities is a registered, licensed broker-dealer. All client accounts benefit from regulatory oversight and investor protections.",
              },
            ].map((item) => (
              <div key={item.label} className="theme-muted-bg rounded p-3">
                <p className="fw-semibold small mb-2">{item.label}</p>

                <p className="small theme-muted lh-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform comparison ───────────────────────────────────────────── */}

      <section className="py-5 container mx-auto px-3 px-4 px-4">
        <div className="text-center mb-5">
          <p className="small fw-semibold theme-accent text-uppercase text-uppercase mb-3">
            How We Compare
          </p>

          <h2
            className="display-5 fw-bold mb-4"
            style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700 }}
          >
            More Features. Lower Fees. One Platform.
          </h2>

          <p className="theme-muted container mx-auto">
            Equivest combines the tools of a professional trading platform with
            the simplicity of a consumer app — at a price point that beats
            nearly every competitor in the market.
          </p>
        </div>

        <div className="table-responsive">
          <table className="w-100 small border theme-border rounded overflow-hidden">
            <thead>
              <tr className="theme-secondary border-bottom theme-border">
                <th className="text-start px-4 py-4 fw-semibold theme-foreground">
                  Feature
                </th>

                <th className="px-4 py-4 fw-semibold theme-accent text-center">
                  Equivest
                </th>

                <th className="px-4 py-4 fw-medium theme-muted text-center">
                  Typical Robo-Advisor
                </th>

                <th className="px-4 py-4 fw-medium theme-muted text-center">
                  Traditional Broker
                </th>
              </tr>
            </thead>

            <tbody className="border-top theme-divide theme-card">
              {[
                [
                  "Stock & ETF Trading",
                  "✓ $0 commission",
                  "Limited / none",
                  "$0–$6.95 / trade",
                ],

                [
                  "Automated Investing",
                  "✓ 0.20% / yr",
                  "✓ 0.25%–0.89% / yr",
                  "Not available",
                ],

                [
                  "Retirement Accounts (IRA)",
                  "✓ No annual fee",
                  "✓ No annual fee",
                  "✓ Often has fees",
                ],

                [
                  "Professional Charting",
                  "✓ 60+ indicators",
                  "Not available",
                  "✓ Basic charts",
                ],

                [
                  "Options Trading",
                  "✓ $0.45 / contract",
                  "Not available",
                  "$0.50–$0.65 / contract",
                ],

                [
                  "Fractional Shares",
                  "✓ From $1",
                  "Partial support",
                  "Limited support",
                ],

                [
                  "Level 2 Market Data",
                  "✓ Included (Pro+)",
                  "Not available",
                  "$15–$25 / mo extra",
                ],
              ].map(([feature, equivest, robo, trad]) => (
                <tr key={feature} className="home-hover-muted transition">
                  <td className="px-4 py-3 fw-medium theme-foreground">
                    {feature}
                  </td>

                  <td className="px-4 py-3 text-center theme-gain fw-semibold">
                    {equivest}
                  </td>

                  <td className="px-4 py-3 text-center theme-muted">{robo}</td>

                  <td className="px-4 py-3 text-center theme-muted">{trad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="small theme-muted mt-4 text-center">
          Competitor figures are estimates based on publicly available pricing
          as of 2026. Features and fees may vary. Not financial advice.
        </p>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}

      <section className="py-5 container mx-auto px-3 px-4 px-4 text-center">
        <div
          className="rounded p-5 p-md-5 position-relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg,#0B1426 0%,#1A3A6B 50%,#0D2E4E 100%)",
          }}
        >
          <div
            className="position-absolute top-0 bottom-0 start-0 end-0 pe-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(0,201,167,0.15) 0%, transparent 60%)",
            }}
          />

          <div className="position-relative z-1 container mx-auto">
            <h2
              className="display-5 display-4 fw-bolder text-white mb-4 lh-1"
              style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800 }}
            >
              Your Financial Future Starts Today
            </h2>

            <p className="fs-5 text-white mb-4 lh-lg">
              Join over 340,000 investors who have chosen Equivest to grow their
              wealth — from first stock purchase to fully automated retirement
              portfolio. Open your free account in under five minutes at
              equivestmarket.com.
            </p>

            <p className="small text-white mb-5">
              No account minimums. No commission on stocks and ETFs. Cancel any
              time.
            </p>

            <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
              <Link
                to="/signup"
                className="px-4 py-3 rounded fw-semibold text-dark  transition "
                style={{ background: "#00C9A7" }}
              >
                Create Free Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
