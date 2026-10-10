import React from "react";

const COVERAGE_ITEMS = [
  {
    covered: true,
    item: "Stocks (U.S. and foreign listed)",
    note: "Held in your brokerage account",
  },
  {
    covered: true,
    item: "Bonds and fixed income securities",
    note: "Including U.S. Treasuries and corporate bonds",
  },
  {
    covered: true,
    item: "Exchange-traded funds (ETFs)",
    note: "Registered securities held in custody",
  },
  {
    covered: true,
    item: "Options contracts",
    note: "Registered exchange-traded options",
  },
  {
    covered: true,
    item: "Cash (uninvested)",
    note: "Up to $250,000 cash sub-limit",
  },
  {
    covered: true,
    item: "Mutual funds registered with the SEC",
    note: "",
  },
  {
    covered: false,
    item: "Cryptocurrency assets",
    note: "Not registered securities under current law",
  },
  {
    covered: false,
    item: "Commodity futures contracts",
    note: "Covered by CFTC/NFA, not SIPC",
  },
  {
    covered: false,
    item: "Market losses from price declines",
    note: "SIPC covers custody failure, not investment risk",
  },
  {
    covered: false,
    item: "Forex (foreign exchange)",
    note: "",
  },
  {
    covered: false,
    item: "Fixed annuities",
    note: "Insurance products, not securities",
  },
];

const COVERAGE_LIMITS = [
  {
    label: "SIPC Coverage",
    value: "$500,000",
    sub: "per customer (total)",
    color: "#1A3A6B",
  },
  {
    label: "Cash Sub-Limit",
    value: "$250,000",
    sub: "cash portion of SIPC",
    color: "#00C9A7",
  },
  {
    label: "Excess SIPC",
    value: "$150,000,000",
    sub: "per customer (Equivest)",
    color: "#2D6EFF",
  },
];

const EXCESS_COVERAGE = [
  {
    label: "Total excess coverage per customer",
    value: "Up to $150,000,000",
  },
  {
    label: "Cash sub-limit (excess)",
    value: "Up to $900,000",
  },
  {
    label: "Underwriter",
    value: "Lloyd's of London Syndicate",
  },
  {
    label: "Policy type",
    value: "Broker-dealer excess SIPC",
  },
];

const IMPORTANT_NOTES = [
  "SIPC and excess SIPC do not protect against losses from market fluctuations, declining security prices, or bad investment decisions.",
  "SIPC protection applies per 'customer' (legal entity), not per account. If you hold multiple account types (individual, joint, IRA) they may be combined for SIPC coverage purposes. Consult the SIPC brochure at sipc.org for details.",
  "Cryptocurrency assets held on Equivest are NOT covered by SIPC as they are not registered securities under current federal law.",
  "In a SIPC liquidation, the process of recovering assets may take months or years. Equivest maintains robust controls to minimize this risk.",
];

function CoverageIcon({ covered }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={covered ? "var(--gain)" : "var(--loss)"}
      strokeWidth={covered ? 2.5 : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label={covered ? "Covered" : "Not covered"}
      role="img"
    >
      {covered ? (
        <path d="M20 6L9 17l-5-5" />
      ) : (
        <path d="M6 18L18 6M6 6l12 12" />
      )}
    </svg>
  );
}

export default function SIPCProtection() {
  return (
    <div
      className="container py-5"
      style={{
        maxWidth: "896px",
        color: "var(--foreground)",
        marginTop: "70px",
      }}
    >
      {/* Header */}
      <header
        className="border-bottom pb-4 mb-5"
        style={{ borderColor: "var(--border)" }}
      >
        <p
          className="small fw-semibold text-uppercase mb-3"
          style={{
            color: "var(--accent)",
            letterSpacing: "0.08em",
          }}
        >
          Legal
        </p>

        <h1
          className="mb-4"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
            fontSize: "2.5rem",
          }}
        >
          SIPC Protection
        </h1>

        <p
          className="mb-0"
          style={{
            color: "var(--muted-foreground)",
            lineHeight: 1.75,
          }}
        >
          Equivest Securities LLC is a member of the Securities Investor
          Protection Corporation (SIPC). SIPC protects customers of member
          broker-dealers if the firm fails. This page explains what SIPC covers,
          its limits, and the additional protection Equivest provides.
        </p>

        <p
          className="small mt-3 mb-0"
          style={{ color: "var(--muted-foreground)" }}
        >
          Last updated: September 1, 2026
        </p>
      </header>

      {/* SIPC membership card */}
      <section
        className="rounded border p-4 p-md-5 mb-5"
        style={{
          borderColor: "var(--border)",
          background:
            "linear-gradient(135deg, rgba(26,58,107,0.06), rgba(0,201,167,0.06))",
        }}
      >
        <div className="d-flex align-items-start gap-3 gap-md-4">
          <div
            className="rounded d-flex align-items-center justify-content-center flex-shrink-0"
            style={{
              width: "64px",
              height: "64px",
              background: "linear-gradient(135deg, #1A3A6B, #00C9A7)",
            }}
          >
            <span
              className="text-white fs-5"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 900,
              }}
            >
              SIPC
            </span>
          </div>

          <div className="flex-grow-1">
            <h2
              className="h4 fw-bold mb-2"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Equivest is a SIPC Member
            </h2>

            <p
              className="small mb-0"
              style={{
                color: "var(--muted-foreground)",
                lineHeight: 1.75,
              }}
            >
              Equivest Securities LLC is a member of SIPC, which protects
              securities customers of its members up to{" "}
              <strong style={{ color: "var(--foreground)" }}>$500,000</strong>{" "}
              (including up to{" "}
              <strong style={{ color: "var(--foreground)" }}>$250,000</strong>{" "}
              for cash claims). Explanatory brochure available upon request or
              at{" "}
              <a
                href="https://sipc.org"
                className="text-decoration-underline"
                style={{ color: "var(--accent)" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                sipc.org
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* What SIPC covers */}
      <section className="mb-5">
        <h2
          className="h4 fw-bold mb-3"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          What Does SIPC Cover?
        </h2>

        <p
          className="small mb-4"
          style={{
            color: "var(--muted-foreground)",
            lineHeight: 1.75,
          }}
        >
          SIPC was created by Congress in 1970 under the Securities Investor
          Protection Act. It protects customers if their broker-dealer fails
          financially —{" "}
          <strong style={{ color: "var(--foreground)" }}>not</strong> against
          losses from market movements or poor investment decisions. SIPC
          coverage is designed to restore securities and cash that are missing
          from customer accounts when a SIPC-member broker-dealer goes out of
          business.
        </p>

        <div
          className="table-responsive rounded border"
          style={{ borderColor: "var(--border)" }}
        >
          <table
            className="table table-sm align-middle mb-0"
            style={{
              minWidth: "600px",
              color: "var(--foreground)",
              borderColor: "var(--border)",
            }}
          >
            <thead>
              <tr style={{ borderBottomColor: "var(--border)" }}>
                <th
                  scope="col"
                  className="px-3 px-md-4 py-3 text-uppercase text-center"
                  style={{
                    width: "90px",
                    fontSize: "0.7rem",
                    color: "var(--muted-foreground)",
                    backgroundColor: "var(--card)",
                  }}
                >
                  Covered
                </th>

                <th
                  scope="col"
                  className="px-3 px-md-4 py-3 text-uppercase"
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--muted-foreground)",
                    backgroundColor: "var(--card)",
                  }}
                >
                  Asset Type
                </th>

                <th
                  scope="col"
                  className="px-3 px-md-4 py-3 text-uppercase"
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--muted-foreground)",
                    backgroundColor: "var(--card)",
                  }}
                >
                  Notes
                </th>
              </tr>
            </thead>

            <tbody>
              {COVERAGE_ITEMS.map((item) => (
                <tr
                  key={item.item}
                  style={{ borderBottomColor: "var(--border)" }}
                >
                  <td
                    className="px-3 px-md-4 py-3 text-center"
                    style={{ backgroundColor: "var(--card)" }}
                  >
                    <CoverageIcon covered={item.covered} />
                  </td>

                  <td
                    className="px-3 px-md-4 py-3 small fw-medium"
                    style={{ backgroundColor: "var(--card)" }}
                  >
                    {item.item}
                  </td>

                  <td
                    className="px-3 px-md-4 py-3"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--muted-foreground)",
                      backgroundColor: "var(--card)",
                    }}
                  >
                    {item.note || "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Coverage limits */}
      <section className="mb-5">
        <h2
          className="h4 fw-bold mb-4"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Coverage Limits
        </h2>

        <div className="row g-3">
          {COVERAGE_LIMITS.map((item) => (
            <div className="col-12 col-sm-6 col-lg-4" key={item.label}>
              <div
                className="h-100 rounded border p-4 text-center"
                style={{
                  borderColor: `${item.color}40`,
                  backgroundColor: "var(--card)",
                }}
              >
                <p
                  className="mb-2"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "clamp(1.5rem, 4vw, 2rem)",
                    fontWeight: 800,
                    color: item.color,
                    overflowWrap: "anywhere",
                  }}
                >
                  {item.value}
                </p>

                <p className="fw-semibold small mb-1">{item.label}</p>

                <p
                  className="small mb-0"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Excess coverage */}
      <section className="mb-5">
        <h2
          className="h4 fw-bold mb-3"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Equivest Excess SIPC Coverage
        </h2>

        <p
          className="small mb-4"
          style={{
            color: "var(--muted-foreground)",
            lineHeight: 1.75,
          }}
        >
          In addition to SIPC protection, Equivest has obtained excess SIPC
          coverage through a syndicate of Lloyd's of London underwriters. This
          additional coverage protects customers in the event that SIPC limits
          are exhausted.
        </p>

        <div className="d-flex flex-column gap-2">
          {EXCESS_COVERAGE.map((row) => (
            <div
              key={row.label}
              className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-1 gap-sm-3 rounded border px-3 px-md-4 py-3"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--card)",
              }}
            >
              <span
                className="small"
                style={{ color: "var(--muted-foreground)" }}
              >
                {row.label}
              </span>

              <span className="small fw-semibold text-sm-end">{row.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Important limitations */}
      <section className="mb-5">
        <h2
          className="h4 fw-bold mb-4"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Important Limitations
        </h2>

        <div className="d-flex flex-column gap-3">
          {IMPORTANT_NOTES.map((note, index) => (
            <div
              key={note}
              className="d-flex align-items-start gap-3 rounded p-3 p-md-4"
              style={{ backgroundColor: "var(--muted)" }}
            >
              <span
                className="small fw-semibold flex-shrink-0"
                style={{ color: "var(--muted-foreground)" }}
              >
                {index + 1}.
              </span>

              <p
                className="small mb-0"
                style={{
                  color: "var(--muted-foreground)",
                  lineHeight: 1.75,
                }}
              >
                {note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-top pt-4"
        style={{ borderColor: "var(--border)" }}
      >
        <p
          className="small mb-0"
          style={{
            color: "var(--muted-foreground)",
            lineHeight: 1.75,
          }}
        >
          Equivest Securities LLC is a registered broker-dealer (SEC) and member
          of FINRA and SIPC. For more information about SIPC protection, visit{" "}
          <a
            href="https://sipc.org"
            className="text-decoration-underline"
            style={{ color: "var(--accent)" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            sipc.org
          </a>{" "}
          or call SIPC at (202) 371-8300. For questions about your Equivest
          account protection, contact us at{" "}
          <a
            href="mailto:support@equivestmarket.com"
            className="text-decoration-none"
            style={{ color: "var(--accent)" }}
          >
            support@equivestmarket.com
          </a>{" "}
          or 1-855-EQUIVEST.
        </p>
      </footer>
    </div>
  );
}
