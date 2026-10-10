import ContextShowcase from "../marketing/ContextShowcase";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { IconTrendingUp } from "../ui/Icons";

const BENEFITS = [
  {
    icon: <IconTrendingUp />,
    title: "Instant Diversification",
    desc: "A single ETF can hold hundreds or thousands of securities. One trade in a broad-market ETF gives you exposure to thousands of stocks, eliminating the concentration risk of individual stock picking in an instant.",
  },
  {
    icon: <IconTrendingUp />,
    title: "Ultra-Low Costs",
    desc: "Many index ETFs charge as little as 0.03% annually — that's $3 per year on a $10,000 investment. Compared to actively managed funds (typically 0.5–1.5%), the savings compound dramatically over a 30-year horizon.",
  },
  {
    icon: <IconTrendingUp />,
    title: "Exceptional Tax Efficiency",
    desc: "ETFs rarely distribute capital gains due to their unique in-kind creation/redemption mechanism. Unlike mutual funds, you typically only owe capital gains taxes when you personally choose to sell — keeping your tax bill lower year over year.",
  },
  {
    icon: <IconTrendingUp />,
    title: "Trade Like a Stock, Any Time",
    desc: "Buy and sell ETFs at real-time prices throughout the trading day — unlike mutual funds, which price only once per day at NAV. Use limit orders, stop-losses, and all professional order types just like individual stocks.",
  },
  {
    icon: <IconTrendingUp />,
    title: "Precision Exposure",
    desc: "Target exactly the market exposure you want — a specific sector, a country, a factor like value or momentum, or an ESG screen — without the noise of individual company risk affecting your returns.",
  },
  {
    icon: <IconTrendingUp />,
    title: "Powering Automated Investing",
    desc: "Equivest's Automated Investing portfolios are built entirely from carefully selected low-cost ETFs, achieving institutional-quality diversification for a flat 0.20% annual management fee.",
  },
];

const CATEGORIES = [
  {
    name: "Broad Market Index",
    examples: "VTI, SPY, IVV, SCHB",
    desc: "Total market or index exposure across hundreds to thousands of stocks. The foundation of most long-term portfolios. Near-zero tracking error, minimal expense ratios.",
  },
  {
    name: "Nasdaq & Growth",
    examples: "QQQ, QQQM, VUG, IWF",
    desc: "Target the Nasdaq-100 or broad growth factor — typically technology-heavy, higher-growth companies. Greater volatility than broad market funds in exchange for stronger bull-market performance.",
  },
  {
    name: "Sector ETFs",
    examples: "XLK, XLF, XLE, XLV, XLY",
    desc: "Invest in a single sector: Technology, Financials, Energy, Health Care, Consumer Discretionary, and more. Useful for tilting your portfolio toward industries you believe will outperform.",
  },
  {
    name: "International Equities",
    examples: "VEA, EEM, IEMG, VEU",
    desc: "Developed market (Europe, Japan, Australia) and emerging market (China, India, Brazil) exposure. Adds geographic diversification and reduces home-country bias.",
  },
  {
    name: "Fixed Income & Bonds",
    examples: "BND, AGG, TLT, VCSH, HYG",
    desc: "Bond ETFs for income and stability. Choose by duration (short, intermediate, long), issuer type (government, corporate, municipal), and credit quality (investment grade, high yield).",
  },
  {
    name: "Dividend & Income",
    examples: "VYM, SCHD, DVY, HDV, JEPI",
    desc: "High-dividend yield or dividend-growth strategies targeting companies with strong, consistent cash distributions. Ideal for income-focused investors and retirees seeking regular cash flow.",
  },
  {
    name: "Factor & Smart Beta",
    examples: "MTUM, VLUE, QUAL, SIZE",
    desc: "Systematic exposure to academically documented return factors: momentum, value, quality, and size. Often sits between passive index funds and active management in cost and expected alpha.",
  },
  {
    name: "Thematic & ESG",
    examples: "ARKK, ICLN, ESGU, ESGV",
    desc: "Invest in specific secular themes — clean energy, artificial intelligence, genomics, cybersecurity — or apply ESG screens to exclude industries misaligned with your values.",
  },
];

const TOP_ETFS = [
  {
    ticker: "VTI",
    name: "Vanguard Total Stock Market ETF",
    expense: "0.03%",
    aum: "$371B",
    holdings: "4,000+",
    desc: "Full U.S. equity market coverage",
  },
  {
    ticker: "SPY",
    name: "SPDR S&P 500 ETF Trust",
    expense: "0.09%",
    aum: "$527B",
    holdings: "500",
    desc: "The original and most liquid ETF",
  },
  {
    ticker: "QQQ",
    name: "Invesco Nasdaq-100 ETF",
    expense: "0.20%",
    aum: "$244B",
    holdings: "100",
    desc: "Large-cap technology and growth",
  },
  {
    ticker: "BND",
    name: "Vanguard Total Bond Market ETF",
    expense: "0.03%",
    aum: "$113B",
    holdings: "10,000+",
    desc: "Broad U.S. investment-grade bonds",
  },
  {
    ticker: "VEA",
    name: "Vanguard Developed Markets ETF",
    expense: "0.05%",
    aum: "$128B",
    holdings: "4,000+",
    desc: "International developed markets",
  },
  {
    ticker: "SCHD",
    name: "Schwab U.S. Dividend Equity ETF",
    expense: "0.06%",
    aum: "$58B",
    holdings: "100",
    desc: "High-quality dividend payers",
  },
  {
    ticker: "VNQ",
    name: "Vanguard Real Estate ETF",
    expense: "0.12%",
    aum: "$32B",
    holdings: "166",
    desc: "U.S. REITs and real estate",
  },
  {
    ticker: "GLD",
    name: "SPDR Gold Shares",
    expense: "0.40%",
    aum: "$68B",
    holdings: "Physical",
    desc: "Direct gold price exposure",
  },
];

export default function ETFs() {
  const tableHeaders = [
    "Ticker",
    "Fund Name",
    "Expense Ratio",
    "AUM",
    "Holdings",
    "Strategy",
  ];

  return (
    <div className="container py-5 " style={{ marginTop: "70px" }}>
      <div className="d-flex flex-column gap-5">
        {/* Hero */}
        <section
          className="text-center mx-auto w-100"
          style={{ maxWidth: "56rem" }}
        >
          <p
            className="small fw-semibold text-uppercase mb-3"
            style={{
              color: "var(--accent)",
              letterSpacing: "0.08em",
            }}
          >
            Exchange-Traded Funds
          </p>

          <h1
            className="display-5 fw-bold mb-4"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Diversify Your Entire Portfolio
            <br />
            in a Single Trade
          </h1>

          <p
            className="fs-5 mb-3"
            style={{
              color: "var(--muted-foreground)",
              lineHeight: 1.8,
            }}
          >
            ETFs are the most efficient building blocks for a modern portfolio.
            Trade 2,000+ ETFs on Equivest with{" "}
            <strong style={{ color: "var(--foreground)" }}>
              zero commissions
            </strong>
            , fractional investing from $1, and the same professional charting
            and order tools available for individual stocks.
          </p>

          <p
            className="mb-4"
            style={{
              color: "var(--muted-foreground)",
              lineHeight: 1.8,
            }}
          >
            From broad-market index funds to sector tilts and thematic
            strategies, Equivest covers every major ETF category — and
            automatically builds and rebalances ETF portfolios for you through
            Automated Investing.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Button href="/signup" size="lg">
              Start Investing in ETFs
            </Button>

            <Button href="/automated-investing" variant="outline" size="lg">
              Automated ETF Portfolios
            </Button>
          </div>
        </section>

        {/* Benefits */}
        <section>
          <h2
            className="h2 fw-bold text-center mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Why ETFs?
          </h2>

          <div className="row g-4">
            {BENEFITS.map((benefit) => (
              <div className="col-12 col-md-6 col-lg-4" key={benefit.title}>
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
                    {benefit.icon}
                  </div>

                  <h3 className="h5 fw-semibold mb-2">{benefit.title}</h3>

                  <p
                    className="small mb-0"
                    style={{
                      color: "var(--muted-foreground)",
                      lineHeight: 1.75,
                    }}
                  >
                    {benefit.desc}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2
            className="h2 fw-bold text-center mb-3"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Browse by Category
          </h2>

          <p
            className="text-center mb-4 mx-auto"
            style={{
              color: "var(--muted-foreground)",
              maxWidth: "48rem",
            }}
          >
            Equivest covers every major ETF category with real-time data,
            screener tools, and full charting capabilities.
          </p>

          <div className="row g-3">
            {CATEGORIES.map((category) => (
              <div className="col-12 col-sm-6 col-lg-3" key={category.name}>
                <div
                  className="h-100 rounded border p-4"
                  style={{
                    background: "var(--card)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center rounded mb-3"
                    style={{
                      width: "2rem",
                      height: "2rem",
                      background: "rgba(0,201,167,0.1)",
                      color: "var(--accent)",
                    }}
                  >
                    <IconTrendingUp />
                  </div>

                  <h3 className="h6 fw-semibold mb-1">{category.name}</h3>

                  <p
                    className="small mb-2"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "var(--accent)",
                      overflowWrap: "anywhere",
                    }}
                  >
                    {category.examples}
                  </p>

                  <p
                    className="small mb-0"
                    style={{
                      color: "var(--muted-foreground)",
                      lineHeight: 1.75,
                    }}
                  >
                    {category.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top ETFs table */}
        <section className="mx-auto w-100" style={{ maxWidth: "72rem" }}>
          <h2
            className="h2 fw-bold text-center mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Popular ETFs on Equivest
          </h2>

          <Card padding="none">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    {tableHeaders.map((header) => (
                      <th
                        key={header}
                        scope="col"
                        className="px-3 py-3 text-uppercase small fw-semibold text-nowrap"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {TOP_ETFS.map((etf) => (
                    <tr
                      key={etf.ticker}
                      style={{ borderColor: "var(--border)" }}
                    >
                      <th
                        scope="row"
                        className="px-3 py-3 fw-bold"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          color: "var(--accent)",
                        }}
                      >
                        {etf.ticker}
                      </th>

                      <td className="px-3 py-3 small fw-medium">{etf.name}</td>

                      <td
                        className="px-3 py-3 small text-nowrap"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          color: "var(--gain)",
                        }}
                      >
                        {etf.expense}
                      </td>

                      <td
                        className="px-3 py-3 small text-nowrap"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {etf.aum}
                      </td>

                      <td
                        className="px-3 py-3 small text-nowrap"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {etf.holdings}
                      </td>

                      <td
                        className="px-3 py-3 small"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {etf.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <p
            className="small mt-3 mb-0"
            style={{ color: "var(--muted-foreground)" }}
          >
            Data illustrative. Equivest does not endorse any specific ETF.
            Expense ratios sourced from fund providers; AUM approximate as of Q3
            2026.
          </p>
        </section>

        {/* Context showcase */}
        <ContextShowcase
          eyebrow="Diversification made visible"
          title="Understand what sits inside each fund"
          description="A fund becomes easier to evaluate when its holdings, market exposure, approach, and ongoing costs are explained together."
          variant="funds"
          points={[
            {
              title: "Exposure",
              description: "See the markets and themes a fund follows.",
            },
            {
              title: "Holdings",
              description: "Understand what the basket contains.",
            },
            {
              title: "Fit",
              description: "Compare the fund with your broader allocation.",
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
            Build a Diversified Portfolio Today
          </h2>

          <p
            className="mx-auto mb-4"
            style={{
              maxWidth: "40rem",
              color: "var(--muted-foreground)",
              lineHeight: 1.75,
            }}
          >
            Trade 2,000+ ETFs commission-free, or let Equivest Automated
            Investing build and manage an ETF portfolio for just 0.20% annually
            — no minimum balance required.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Button href="/signup" size="lg">
              Get Started Free
            </Button>

            <Button href="/automated-investing" variant="outline" size="lg">
              Explore Automation
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
