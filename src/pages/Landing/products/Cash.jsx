import ContextShowcase from "../marketing/ContextShowcase";
import Button from "../ui/Button";
import Card from "../ui/Card";

const FEATURES = [
  {
    title: "Available Cash Balance",
    desc: "Your available cash is always displayed at the top of your account dashboard. This is the total amount you have ready to invest, withdraw, or allocate to any account at any time.",
  },
  {
    title: "Deposits & Withdrawals",
    desc: "Add funds to your account via bank transfer, wire transfer, or other supported payment methods. Withdraw to your linked bank account at any time — standard processing typically takes 1–3 business days.",
  },
  {
    title: "Cash Yield on Uninvested Funds",
    desc: "Uninvested cash in your Equivest account earns a competitive yield automatically. No action required — your idle cash is allocated to a sweep account where it begins earning from the day it settles.",
  },
  {
    title: "Cash vs. Invested Assets",
    desc: "Cash and investments are tracked separately in your dashboard. Your cash balance is liquid and immediately available; your invested assets are subject to market fluctuation and settlement times when sold.",
  },
  {
    title: "Allocating Cash to Investments",
    desc: "When you find an investment you want to make, your available cash is the purchasing power behind it. The platform shows your cash balance alongside your order ticket so you always know what you can afford before you place a trade.",
  },
  {
    title: "Transaction History",
    desc: "Every deposit, withdrawal, dividend receipt, interest credit, and fee debit is recorded in your cash activity log. Export statements for your personal records or tax preparation at any time.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Initiate a Transfer",
    desc: "Connect your bank account via bank transfer or wire. Enter the amount and confirm — the platform validates your details and queues the transfer immediately.",
  },
  {
    num: "02",
    title: "Funds Settle",
    desc: "Bank transfers typically settle within 1–3 business days. Once settled, funds appear as available cash in your account and are ready to invest.",
  },
  {
    num: "03",
    title: "Withdraw Anytime",
    desc: "To withdraw, select the amount and destination account. Funds are returned to your linked bank account within standard processing times. There are no withdrawal fees for bank transfers.",
  },
];

const COMPARISON_ROWS = [
  {
    attribute: "Liquidity",
    cash: "Immediately available",
    investments: "Subject to market hours and settlement",
  },
  {
    attribute: "Risk",
    cash: "No market risk",
    investments: "Subject to market fluctuation",
  },
  {
    attribute: "Potential Return",
    cash: "Earns cash yield",
    investments: "Potential for growth (and loss)",
  },
  {
    attribute: "Use",
    cash: "Purchasing power for trades",
    investments: "Long-term wealth building",
  },
  {
    attribute: "Access",
    cash: "Withdraw anytime",
    investments: "Sell to access; T+1 or T+2 settlement",
  },
];

export default function Cash() {
  return (
    <div className="container py-5" style={{ marginTop: "70px" }}>
      <div className="d-flex flex-column gap-5">
        {/* Hero */}
        <section className="mb-2">
          <div className="w-100" style={{ maxWidth: "48rem" }}>
            <p
              className="small fw-semibold text-uppercase mb-3"
              style={{
                color: "var(--accent)",
                letterSpacing: "0.08em",
              }}
            >
              Cash Management
            </p>

            <h1
              className="display-5 fw-bold mb-4"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Manage Your Cash, Ready to Invest
            </h1>

            <p
              className="fs-5 mb-3"
              style={{
                color: "var(--muted-foreground)",
                lineHeight: 1.8,
              }}
            >
              Your Equivest account includes a Cash section where uninvested
              funds are held, managed, and put to work. Whether you've just
              deposited funds, received dividend payments, or sold a position,
              your cash is always visible, accessible, and earning while it
              waits.
            </p>

            <p
              className="mb-0"
              style={{
                color: "var(--muted-foreground)",
                lineHeight: 1.8,
              }}
            >
              The Cash section bridges the gap between money sitting idle and
              money actively invested. It gives you complete visibility into
              what you have available, where it came from, and where it's going
              next.
            </p>
          </div>
        </section>

        {/* Feature cards */}
        <section>
          <h2
            className="h2 fw-bold mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            What the Cash section covers
          </h2>

          <div className="row g-4">
            {FEATURES.map((feature) => (
              <div className="col-12 col-md-6" key={feature.title}>
                <Card hover>
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

        {/* Process steps */}
        <section>
          <h2
            className="h2 fw-bold mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            How deposits and withdrawals work
          </h2>

          <div className="row g-4">
            {STEPS.map((step) => (
              <div className="col-12 col-md-4" key={step.num}>
                <div className="h-100 text-center px-2">
                  <div
                    className="d-flex align-items-center justify-content-center mx-auto mb-4 text-white fw-bold fs-5 rounded"
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
          <div className="w-100" style={{ maxWidth: "56rem" }}>
            <h2
              className="h2 fw-bold mb-4"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Cash vs. investments — what's the difference?
            </h2>

            <Card padding="none">
              <div className="table-responsive">
                <table className="table align-middle mb-0">
                  <thead>
                    <tr
                      style={{
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
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
                        Cash
                      </th>

                      <th
                        scope="col"
                        className="px-3 px-md-4 py-3 text-uppercase small fw-semibold"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Investments
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {COMPARISON_ROWS.map((row) => (
                      <tr
                        key={row.attribute}
                        style={{
                          borderBottom: "1px solid var(--border)",
                          transition: "background-color 0.2s ease",
                        }}
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
                          {row.cash}
                        </td>

                        <td
                          className="px-3 px-md-4 py-3"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          {row.investments}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>

        {/* Cash context */}
        <ContextShowcase
          eyebrow="Cash in context"
          title="Know what is available and what happens next"
          description="Cash management connects transfers, settled balances, investing capacity, and withdrawals in a single understandable flow."
          variant="cash"
          points={[
            {
              title: "Fund",
              description: "See how money enters your account.",
            },
            {
              title: "Allocate",
              description: "Understand what is ready to invest.",
            },
            {
              title: "Access",
              description: "Review withdrawal and settlement steps.",
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
            Ready to Get Started?
          </h2>

          <p
            className="mx-auto mb-4"
            style={{
              maxWidth: "36rem",
              color: "var(--muted-foreground)",
              lineHeight: 1.75,
            }}
          >
            Open your Equivest account and start managing your cash alongside
            all your investments in one place.
          </p>

          <Button href="/signup" size="lg">
            Open Your Account
          </Button>
        </section>
      </div>
    </div>
  );
}
