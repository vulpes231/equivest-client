import ContextShowcase from "../marketing/ContextShowcase";
import Button from "../ui/Button";
import Card from "../ui/Card";
import {
  IconGem,
  IconFlame,
  IconSprout,
  IconWrench,
  IconTrendingUp,
  IconGlobe,
  IconUmbrella,
  IconBell,
  IconBookOpen,
  IconAlertTriangle,
  IconScatterChart,
} from "../ui/Icons";

const FEATURES = [
  {
    icon: <IconTrendingUp />,
    title: "Futures-Based Price Exposure",
    desc: "Access commodities price exposure through exchange-traded ETFs and ETNs that track front-month or rolling futures contracts — gold, silver, oil, natural gas, agricultural baskets, and more. No futures account required.",
  },
  {
    icon: <IconScatterChart />,
    title: "Correlation Analytics",
    desc: "Commodities historically exhibit low or negative correlation to equities during risk-off environments. Equivest's Portfolio Analyzer shows how adding commodity exposure affects your portfolio's overall volatility and Sharpe ratio.",
  },
  {
    icon: <IconGlobe />,
    title: "Global Supply & Demand Data",
    desc: "Each commodity detail page includes USDA, EIA, and IEA supply/demand reports, seasonal price patterns, inventory levels, and production data — the same fundamental data used by commodity traders worldwide.",
  },
  {
    icon: <IconUmbrella />,
    title: "Inflation Hedge Allocation",
    desc: "Build a systematic inflation hedge by allocating a fixed percentage of your portfolio to commodity ETFs. Equivest rebalances automatically to maintain your target allocation regardless of price movements.",
  },
  {
    icon: <IconBell />,
    title: "Commodity Price Alerts",
    desc: "Set price alerts for gold, WTI crude, natural gas, copper, corn, and any other tracked commodity. Receive push notifications the moment prices cross your specified level — useful for timing entry points.",
  },
  {
    icon: <IconBookOpen />,
    title: "Educational Research Center",
    desc: "Equivest's commodity learning center covers futures roll yield, contango vs. backwardation, commodity super-cycles, seasonal patterns, and macro factors that drive each major market — with plain-English explanations.",
  },
];

const CATEGORIES = [
  {
    icon: <IconGem />,
    name: "Precious Metals",
    instruments: "GLD, IAU, SLV, PPLT, PALL",
    desc: "Gold, silver, platinum, and palladium. Gold is the primary inflation hedge and safe-haven asset. Silver has significant industrial demand alongside monetary demand. Platinum and palladium are critical for automotive catalytic converters.",
    drivers: "Fed policy, real yields, USD strength, geopolitical risk",
  },
  {
    icon: <IconFlame />,
    name: "Energy",
    instruments: "USO, XLE, UNG, BOIL, DRIP",
    desc: "Crude oil (WTI and Brent), natural gas, and energy sector equities. Energy prices are driven by OPEC+ production decisions, U.S. shale output, global demand cycles, and seasonal heating/cooling demand patterns.",
    drivers: "OPEC+ supply, U.S. inventory data, global GDP growth",
  },
  {
    icon: <IconSprout />,
    name: "Agriculture",
    instruments: "CORN, WEAT, SOYB, DBA, JJG",
    desc: "Corn, wheat, soybeans, coffee, cotton, and agricultural baskets. Prices are influenced by weather events (La Niña, drought), USDA crop reports, global food demand, and biofuel policy in the U.S. and EU.",
    drivers: "USDA reports, weather patterns, USD, biofuel demand",
  },
  {
    icon: <IconWrench />,
    name: "Industrial Metals",
    instruments: "COPX, JJC, DBB, PLTM",
    desc: "Copper, aluminum, zinc, nickel, and other base metals critical to manufacturing, construction, and the global energy transition. Copper demand is considered a leading economic indicator given its use in electrical infrastructure.",
    drivers: "Chinese manufacturing PMI, EV adoption, construction activity",
  },
];

const COMMODITY_ETFS = [
  {
    ticker: "GLD",
    name: "SPDR Gold Shares",
    category: "Precious Metals",
    expense: "0.40%",
    desc: "Physical gold — the most liquid gold ETF globally",
  },
  {
    ticker: "IAU",
    name: "iShares Gold Trust",
    category: "Precious Metals",
    expense: "0.25%",
    desc: "Lower-cost alternative to GLD, same physical gold backing",
  },
  {
    ticker: "SLV",
    name: "iShares Silver Trust",
    category: "Precious Metals",
    expense: "0.50%",
    desc: "Physical silver with daily NAV backed by allocated bars",
  },
  {
    ticker: "USO",
    name: "United States Oil Fund",
    category: "Energy",
    expense: "0.83%",
    desc: "Front-month WTI crude oil futures exposure",
  },
  {
    ticker: "XLE",
    name: "Energy Select Sector SPDR",
    category: "Energy",
    expense: "0.09%",
    desc: "U.S. energy company equities (ExxonMobil, Chevron, EOG)",
  },
  {
    ticker: "UNG",
    name: "United States Natural Gas Fund",
    category: "Energy",
    expense: "1.06%",
    desc: "Henry Hub natural gas front-month futures",
  },
  {
    ticker: "DBA",
    name: "Invesco DB Agriculture Fund",
    category: "Agriculture",
    expense: "0.93%",
    desc: "Diversified agriculture futures basket (corn, wheat, soy, sugar)",
  },
  {
    ticker: "COPX",
    name: "Global X Copper Miners ETF",
    category: "Industrial",
    expense: "0.65%",
    desc: "Global copper mining company equities",
  },
];

const FAQ = [
  {
    q: "Can I buy physical gold or oil through Equivest?",
    a: "Equivest provides commodity exposure through exchange-traded products (ETFs and ETNs) — not physical delivery of the underlying commodity. ETFs like GLD and IAU are backed by physical gold held in vaults, but you own shares of the trust, not bars of metal. This is the most practical way for individual investors to access commodity price movements.",
  },
  {
    q: "What is contango and why does it matter for commodity ETFs?",
    a: "Contango occurs when futures prices are higher than the current spot price. Commodity ETFs that roll futures contracts (like USO for oil) must buy the next month's higher-priced contract when the front month expires. This roll cost creates a return drag known as negative roll yield. Physical-backed ETFs (like GLD) don't experience this because they hold the actual commodity.",
  },
  {
    q: "How do commodities help my portfolio?",
    a: "Commodities historically have low correlation to stocks and bonds, providing diversification benefits especially during inflationary periods. When equity markets decline due to rising inflation, commodity prices often appreciate, partially offsetting portfolio losses. Most financial advisors suggest a 5–15% commodity allocation for investors seeking inflation protection.",
  },
  {
    q: "Are commodity ETFs taxed differently?",
    a: "Yes. Most commodity ETFs structured as partnerships (like USO) generate K-1 tax forms instead of 1099s, which can complicate your tax filing. Physical precious metal ETFs are taxed as collectibles (28% maximum long-term rate) rather than standard capital assets (20% maximum). ETFs structured as equities holding mining companies receive standard equity tax treatment. Equivest generates all required tax documents automatically.",
  },
  {
    q: "What is the minimum investment in commodity ETFs?",
    a: "Commission-free trading with $1 fractional shares — the same as stocks and equity ETFs. There is no minimum investment, no special approval required, and no additional fees beyond the ETF's own expense ratio, which is already reflected in the fund's performance.",
  },
];

export default function Commodities() {
  const overviewRows = [
    {
      label: "Commission on commodity ETFs",
      value: "$0.00",
      highlight: true,
    },
    {
      label: "Minimum investment",
      value: "$1.00 (fractional)",
    },
    {
      label: "Futures account required",
      value: "No — ETF access only",
    },
    {
      label: "Categories covered",
      value: "Metals, Energy, Agri, Industrial",
    },
    {
      label: "Commodity ETFs available",
      value: "80+ products",
    },
    {
      label: "Physical-backed ETFs",
      value: "Gold, Silver, Platinum",
    },
    {
      label: "Rebalancing",
      value: "Automated (Wealth plan)",
    },
  ];

  const tableHeaders = [
    "Ticker",
    "Fund Name",
    "Category",
    "Expense Ratio",
    "Strategy",
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
              Commodities
            </p>

            <h1
              className="display-5 fw-bold mb-4"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Real Assets in
              <br />a Digital Account
            </h1>

            <p
              className="fs-5 mb-3"
              style={{
                color: "var(--muted-foreground)",
                lineHeight: 1.8,
              }}
            >
              Gain exposure to gold, silver, oil, natural gas, agriculture, and
              industrial metals through carefully selected commodity ETFs —{" "}
              <strong style={{ color: "var(--foreground)" }}>
                commission-free
              </strong>
              , with fractional shares from $1, inside your existing Equivest
              account.
            </p>

            <p
              className="mb-4"
              style={{
                color: "var(--muted-foreground)",
                lineHeight: 1.8,
              }}
            >
              Commodities have historically provided inflation protection,
              portfolio diversification, and exposure to global macro themes —
              from energy transitions to food security. Equivest makes it
              straightforward to add a commodity allocation alongside your
              stocks, ETFs, and bonds without opening a separate futures
              account.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <Button href="/register" size="lg">
                Add Commodities to Portfolio
              </Button>

              <Button
                href="/learn"
                className="text-body border"
                variant="outline"
                size="lg"
              >
                Commodity Education
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
                      : "var(--body)",
                  }}
                >
                  <span
                    className="small"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {row.label}
                  </span>

                  <span
                    className="small fw-semibold text-end flex-shrink-0"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: row.highlight ? "var(--accent)" : "var(--body)",
                    }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2
            className="h2 fw-bold text-center mb-3"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Commodity Categories
          </h2>

          <p
            className="text-center mb-4 mx-auto"
            style={{
              color: "var(--muted-foreground)",
              maxWidth: "48rem",
            }}
          >
            Each category has distinct price drivers — understanding what moves
            each market makes you a more informed investor.
          </p>

          <div className="row g-4">
            {CATEGORIES.map((category) => (
              <div className="col-12 col-md-6" key={category.name}>
                <div
                  className="h-100 rounded border p-4 card"
                  // style={{
                  //   background: "var(--card)",
                  //   borderColor: "var(--border)",
                  // }}
                >
                  <div className="d-flex align-items-start gap-3 mb-3">
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0 rounded"
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        background: "rgba(0,201,167,0.1)",
                        color: "var(--accent)",
                      }}
                    >
                      {category.icon}
                    </div>

                    <div className="min-w-0">
                      <h3 className="h5 fw-semibold mb-1">{category.name}</h3>

                      <p
                        className="small mb-0"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          color: "var(--accent)",
                          overflowWrap: "anywhere",
                        }}
                      >
                        {category.instruments}
                      </p>
                    </div>
                  </div>

                  <p
                    className="small mb-3"
                    style={{
                      color: "var(--muted-foreground)",
                      lineHeight: 1.75,
                    }}
                  >
                    {category.desc}
                  </p>

                  <div
                    className="rounded px-3 py-2 border"
                    style={{ background: "var(--body)" }}
                  >
                    <p
                      className="small mb-0"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      <span
                        className="fw-semibold"
                        style={{ color: "var(--body)" }}
                      >
                        Key drivers:
                      </span>{" "}
                      {category.drivers}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section>
          <h2
            className="h2 fw-bold text-center mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Commodity Investing Tools
          </h2>

          <div className="row g-4">
            {FEATURES.map((feature) => (
              <div className="col-12 col-md-6 col-lg-4" key={feature.title}>
                <div className="h-100 border card p-4">
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
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ETF Table */}
        <section className="mx-auto w-100" style={{ maxWidth: "64rem" }}>
          <h2
            className="h2 fw-bold text-center mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Popular Commodity ETFs on Equivest
          </h2>

          <div
            className="rounded border card overflow-hidden"
            // style={{
            //   background: "var(--card)",
            //   borderColor: "var(--border)",
            // }}
          >
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead>
                  <tr className="border">
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
                  {COMMODITY_ETFS.map((etf) => (
                    <tr
                      key={etf.ticker}
                      // style={{ borderColor: "var(--border)" }}
                      className="border"
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
                        className="px-3 py-3 small"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {etf.category}
                      </td>

                      <td
                        className="px-3 py-3 small text-nowrap"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {etf.expense}
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
          </div>

          <p
            className="small mt-3 mb-0"
            style={{ color: "var(--muted-foreground)" }}
          >
            Equivest does not endorse specific ETFs. Expense ratios from fund
            providers; subject to change.
          </p>
        </section>

        {/* Risk callout */}
        <section
          className="mx-auto w-100 rounded border p-4"
          style={{
            maxWidth: "48rem",
            borderColor: "rgba(239,68,68,0.3)",
            background: "rgba(239,68,68,0.04)",
          }}
        >
          <div className="d-flex align-items-start gap-3">
            <div className="flex-shrink-0 mt-1" style={{ color: "#EF4444" }}>
              <IconAlertTriangle />
            </div>

            <div>
              <h3
                className="small fw-semibold mb-2"
                style={{ color: "#EF4444" }}
              >
                Commodity Risk Disclosure
              </h3>

              <p
                className="small mb-0"
                style={{
                  color: "var(--muted-foreground)",
                  lineHeight: 1.75,
                }}
              >
                Commodity investments are subject to high volatility driven by
                weather events, geopolitical disruptions, currency fluctuations,
                and changes in supply/demand. Futures-based ETFs may experience
                negative roll yield in contango markets. Commodity investments
                may not be suitable for all investors. Past performance does not
                guarantee future results.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto w-100" style={{ maxWidth: "48rem" }}>
          <h2
            className="h2 fw-bold text-center mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Commodities FAQ
          </h2>

          <div className="d-flex flex-column gap-3">
            {FAQ.map((item) => (
              <div
                key={item.q}
                className="rounded border card p-4"
                // style={{
                //   background: "var(--card)",
                //   borderColor: "var(--border)",
                // }}
              >
                <h3 className="h6 fw-semibold mb-2">{item.q}</h3>

                <p
                  className="small mb-0"
                  style={{
                    color: "var(--muted-foreground)",
                    lineHeight: 1.75,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Context showcase */}
        <ContextShowcase
          eyebrow="Real asset context"
          title="See the forces behind commodity markets"
          description="Supply chains, weather, currencies, geopolitics, and global demand all shape commodity exposure in different ways."
          variant="commodities"
          points={[
            {
              title: "Drivers",
              description: "Learn which forces influence each market.",
            },
            {
              title: "Access",
              description: "Compare common ways to gain exposure.",
            },
            {
              title: "Role",
              description: "Consider diversification and volatility together.",
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
            Diversify Beyond Stocks and Bonds
          </h2>

          <p
            className="mx-auto mb-4"
            style={{
              maxWidth: "36rem",
              color: "var(--muted-foreground)",
              lineHeight: 1.75,
            }}
          >
            Add commodity exposure to your Equivest portfolio today —
            commission-free, no futures account needed, with as little as $1.
          </p>

          <Button href="/register" size="lg">
            Open Free Account
          </Button>

          <p
            className="small mt-3 mb-0"
            style={{ color: "var(--muted-foreground)" }}
          >
            Commodities involve significant risk. Equivest Securities LLC,
            member FINRA/SIPC.
          </p>
        </section>
      </div>
    </div>
  );
}
