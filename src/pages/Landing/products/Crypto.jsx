import ContextShowcase from "../marketing/ContextShowcase";
import Button from "../ui/Button";
import Card from "../ui/Card";

const CRYPTO_ASSETS = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    color: "#F7931A",
    desc: "The original cryptocurrency. Bitcoin is a decentralised digital currency with a fixed supply cap of 21 million coins, widely held as a store of value.",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    color: "#627EEA",
    desc: "The world's leading programmable blockchain platform. ETH powers smart contracts, decentralised apps, and the broader DeFi ecosystem.",
  },
  {
    symbol: "SOL",
    name: "Solana",
    color: "#9945FF",
    desc: "A high-performance blockchain known for fast transaction speeds and low fees. Solana supports a growing ecosystem of applications and digital assets.",
  },
  {
    symbol: "XRP",
    name: "Ripple",
    color: "#346AA9",
    desc: "A digital asset designed for fast, cross-border payments. XRP is used by financial institutions for international money transfers.",
  },
  {
    symbol: "LTC",
    name: "Litecoin",
    color: "#8C8C8C",
    desc: "One of the earliest Bitcoin alternatives, Litecoin offers faster transaction confirmation times and a different hashing algorithm.",
  },
  {
    symbol: "LINK",
    name: "Chainlink",
    color: "#2A5ADA",
    desc: "A decentralised oracle network that connects smart contracts with real-world data, enabling more complex blockchain applications.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Fund Your Account",
    desc: "Deposit funds via bank transfer or wire. Once settled, your cash balance is available as purchasing power for any asset on the platform, including crypto.",
  },
  {
    num: "02",
    title: "Choose a Crypto Asset",
    desc: "Browse the Crypto section to view supported assets and descriptions. Select the asset you want to invest in and review its details before proceeding.",
  },
  {
    num: "03",
    title: "Place Your Order",
    desc: "Enter the amount you wish to invest. A spread applies to each crypto transaction. Review the order details and confirm to execute your purchase.",
  },
  {
    num: "04",
    title: "Monitor Your Portfolio",
    desc: "Your crypto holdings appear alongside all other investments in your portfolio dashboard. Track performance and manage positions across all asset classes in one view.",
  },
];

const COMPARISON_ROWS = [
  {
    attribute: "Trading Hours",
    crypto: "24/7/365",
    traditional: "Market hours only (stocks/ETFs)",
  },
  {
    attribute: "Volatility",
    crypto: "High",
    traditional: "Generally lower for diversified portfolios",
  },
  {
    attribute: "Regulation",
    crypto: "Evolving globally",
    traditional: "Established frameworks",
  },
  {
    attribute: "Investor Protection",
    crypto: "Not covered by standard schemes",
    traditional: "SIPC/equivalent coverage for securities",
  },
  {
    attribute: "Settlement",
    crypto: "Near-instant",
    traditional: "T+1 or T+2 for equities",
  },
];

const WALLET_HOLDINGS = [
  { symbol: "BTC", name: "Bitcoin", color: "#F7931A" },
  { symbol: "ETH", name: "Ethereum", color: "#627EEA" },
  { symbol: "SOL", name: "Solana", color: "#9945FF" },
];

const RISK_POINTS = [
  "Cryptocurrency values are highly volatile and can lose significant value in short periods.",
  "Crypto assets are not covered by investor protection schemes (e.g. SIPC, FSCS) that apply to securities.",
  "The regulatory environment for cryptocurrencies is evolving. Regulatory changes may affect the availability, liquidity, or tax treatment of crypto assets.",
  "Only invest in cryptocurrencies an amount you are prepared to lose entirely. Crypto should represent a small portion of a diversified portfolio.",
];

export default function Crypto() {
  return (
    <div className="container py-5" style={{ marginTop: "70px" }}>
      <div className="d-flex flex-column gap-5">
        {/* Hero */}
        <section>
          <div className="w-100" style={{ maxWidth: "48rem" }}>
            <p
              className="small fw-semibold text-uppercase mb-3"
              style={{
                color: "var(--accent)",
                letterSpacing: "0.08em",
              }}
            >
              Cryptocurrency
            </p>

            <h1
              className="display-5 fw-bold mb-4"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Invest in Digital Assets with Confidence
            </h1>

            <p
              className="fs-5 mb-3"
              style={{
                color: "var(--muted-foreground)",
                lineHeight: 1.8,
              }}
            >
              Equivest gives you access to leading cryptocurrencies directly
              within your investment account. No separate wallets, no unfamiliar
              exchanges — just a familiar interface for buying, holding, and
              tracking digital assets alongside your other investments.
            </p>

            <p
              className="mb-0"
              style={{
                color: "var(--muted-foreground)",
                lineHeight: 1.8,
              }}
            >
              Crypto works differently from stocks — it trades 24/7, is more
              volatile, and is not covered by standard investor protection
              schemes. Understanding these differences is important before
              investing in digital assets.
            </p>
          </div>
        </section>

        {/* Supported assets */}
        <section>
          <h2
            className="h2 fw-bold mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Cryptocurrencies available on Equivest
          </h2>

          <div className="row g-4">
            {CRYPTO_ASSETS.map((asset) => (
              <div className="col-12 col-md-6 col-lg-4" key={asset.symbol}>
                <Card hover>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 text-white fw-bold small"
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        background: asset.color,
                      }}
                    >
                      {asset.symbol[0]}
                    </div>

                    <div>
                      <p className="fw-semibold mb-1 lh-sm">{asset.name}</p>

                      <span
                        className="badge rounded fw-semibold"
                        style={{
                          background: "rgba(0,201,167,0.1)",
                          color: "var(--accent)",
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {asset.symbol}
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
                    {asset.desc}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Process steps */}
        <section>
          <h2
            className="h2 fw-bold mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            How crypto investing works on Equivest
          </h2>

          <div className="row g-4">
            {PROCESS_STEPS.map((step) => (
              <div className="col-12 col-sm-6 col-lg-3" key={step.num}>
                <div className="h-100">
                  <div
                    className="d-flex align-items-center justify-content-center rounded mb-3 text-white fw-bold"
                    style={{
                      width: "3rem",
                      height: "3rem",
                      background: "linear-gradient(135deg, #1A3A6B, #00C9A7)",
                    }}
                  >
                    {step.num}
                  </div>

                  <h3 className="h5 fw-semibold mb-2">{step.title}</h3>

                  <p
                    className="small mb-0"
                    style={{
                      color: "var(--muted-foreground)",
                      lineHeight: 1.75,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison table */}
        <section>
          <div className="w-100" style={{ maxWidth: "64rem" }}>
            <h2
              className="h2 fw-bold mb-4"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              How crypto differs from traditional investments
            </h2>

            <Card padding="none">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--border)" }}>
                      <th
                        scope="col"
                        className="px-3 px-md-4 py-3 text-uppercase small fw-semibold"
                        style={{
                          width: "33.333%",
                          color: "var(--muted-foreground)",
                        }}
                      >
                        <span className="visually-hidden">Attribute</span>
                      </th>

                      <th
                        scope="col"
                        className="px-3 px-md-4 py-3 text-uppercase small fw-semibold"
                        style={{ color: "var(--accent)" }}
                      >
                        Crypto
                      </th>

                      <th
                        scope="col"
                        className="px-3 px-md-4 py-3 text-uppercase small fw-semibold"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Traditional Investments
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {COMPARISON_ROWS.map((row) => (
                      <tr
                        key={row.attribute}
                        style={{ borderColor: "var(--border)" }}
                      >
                        <th
                          scope="row"
                          className="px-3 px-md-4 py-3 fw-semibold small"
                        >
                          {row.attribute}
                        </th>

                        <td
                          className="px-3 px-md-4 py-3"
                          style={{ color: "var(--foreground)" }}
                        >
                          {row.crypto}
                        </td>

                        <td
                          className="px-3 px-md-4 py-3"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          {row.traditional}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>

        {/* Wallet mockup */}
        <section>
          <div className="w-100" style={{ maxWidth: "28rem" }}>
            <h2
              className="h2 fw-bold mb-4"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Your crypto holdings at a glance
            </h2>

            <div
              className="rounded border overflow-hidden shadow-sm"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <div
                className="px-4 py-3"
                style={{
                  background: "var(--muted)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <p
                  className="small fw-semibold text-uppercase mb-0"
                  style={{
                    color: "var(--muted-foreground)",
                    letterSpacing: "0.06em",
                  }}
                >
                  Crypto Holdings
                </p>
              </div>

              <div>
                {WALLET_HOLDINGS.map((holding) => (
                  <div
                    key={holding.symbol}
                    className="d-flex align-items-center justify-content-between gap-3 px-4 py-3"
                    style={{ borderBottom: "1px solid var(--border)" }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 text-white fw-bold small"
                        style={{
                          width: "2.25rem",
                          height: "2.25rem",
                          background: holding.color,
                        }}
                      >
                        {holding.symbol[0]}
                      </div>

                      <div>
                        <p className="fw-semibold small mb-1 lh-sm">
                          {holding.name}
                        </p>

                        <p
                          className="small mb-0"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          {holding.symbol}
                        </p>
                      </div>
                    </div>

                    <span
                      className="small"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      —
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="d-flex align-items-center justify-content-between gap-3 px-4 py-3"
                style={{
                  background: "var(--muted)",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <p className="small fw-semibold mb-0">Total Crypto Value</p>

                <span
                  className="small"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--muted-foreground)",
                  }}
                >
                  —
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Risk disclosure */}
        <section>
          <div className="w-100" style={{ maxWidth: "48rem" }}>
            <div
              className="rounded border p-4"
              style={{
                borderColor: "rgba(239,68,68,0.35)",
                background: "rgba(239,68,68,0.04)",
              }}
            >
              <h3 className="h5 fw-semibold mb-3" style={{ color: "#EF4444" }}>
                Important: Crypto Risk Disclosure
              </h3>

              <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                {RISK_POINTS.map((point, index) => (
                  <li
                    key={index}
                    className="d-flex align-items-start gap-3 small"
                    style={{
                      color: "var(--muted-foreground)",
                      lineHeight: 1.75,
                    }}
                  >
                    <span
                      className="rounded-circle flex-shrink-0 mt-2"
                      style={{
                        width: "0.375rem",
                        height: "0.375rem",
                        background: "#EF4444",
                      }}
                    />

                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Context showcase */}
        <ContextShowcase
          eyebrow="Digital asset context"
          title="Understand the network before the asset"
          description="Crypto education connects the technology, market structure, custody model, volatility, and portfolio role without presenting live prices."
          variant="crypto"
          points={[
            {
              title: "Learn",
              description: "Understand the purpose of each network.",
            },
            {
              title: "Compare",
              description: "Separate utility, structure, and market risk.",
            },
            {
              title: "Size",
              description: "View exposure within a diversified plan.",
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
            Start Investing in Crypto
          </h2>

          <p
            className="mx-auto mb-4"
            style={{
              maxWidth: "36rem",
              color: "var(--muted-foreground)",
              lineHeight: 1.75,
            }}
          >
            Open your Equivest account and access cryptocurrency markets
            alongside all your other investments in one unified platform.
          </p>

          <Button href="/signup" size="lg">
            Start Investing in Crypto
          </Button>

          <p
            className="small mt-3 mb-0"
            style={{ color: "var(--muted-foreground)" }}
          >
            Cryptocurrency is speculative and highly volatile. Not insured by
            FDIC or SIPC.
          </p>
        </section>
      </div>
    </div>
  );
}
