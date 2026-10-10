import React from "react";

const SECTIONS = [
  {
    title: "Firm Overview",
    content: `Equivest Securities LLC ("Equivest") is a registered broker-dealer with the U.S. Securities and Exchange Commission (SEC) and a member of the Financial Industry Regulatory Authority (FINRA) and the Securities Investor Protection Corporation (SIPC). Equivest's CRD number is available on FINRA BrokerCheck at brokercheck.finra.org. Equivest is also registered as an investment adviser with the SEC with respect to its Automated Investing service.

Principal Office: 350 Fifth Avenue, Suite 4200, New York, NY 10118
Customer Service: 1-855-EQUIVEST (1-855-378-4837)
Email: support@equivestmarket.com
Website: https://www.equivestmarket.com`,
  },
  {
    title: "Form CRS — Customer Relationship Summary",
    content: `In accordance with SEC Regulation Best Interest, Equivest provides a Customer Relationship Summary (Form CRS) that describes our services, fees, conflicts of interest, and how we make money. Our Form CRS is available at equivestmarket.com/legal/form-crs.

Key relationships to understand:
- For self-directed brokerage accounts, Equivest acts as a broker-dealer, not an investment adviser. We execute trades at your direction.
- For Automated Investing accounts, Equivest acts as an investment adviser subject to a fiduciary standard.
- Our registered representatives are not "financial advisors" providing ongoing personalized investment advice unless you are enrolled in an advisory program.`,
  },
  {
    title: "Revenue Sources and Conflicts of Interest",
    content: `Equivest earns revenue through the following sources, some of which create conflicts of interest:

1. Payment for Order Flow (PFOF): Equivest receives compensation from market makers for routing your equity and options orders to them. This creates a potential conflict of interest because Equivest has a financial incentive to route orders to venues that pay the most PFOF rather than those that offer the best execution. Equivest mitigates this conflict by maintaining a Best Execution policy that prioritizes execution quality. Detailed order routing statistics are published quarterly per SEC Rule 606.

2. Interest on Cash Balances: Equivest earns the difference between the rate received from program banks on swept cash balances and the rate paid to customers. Currently, Equivest retains approximately 50 basis points on swept cash.

3. Premium Subscriptions: Monthly fees from Professional ($19/month) and Wealth ($49/month) plan subscribers.

4. Securities Lending: Equivest may lend fully paid securities held in your account to third parties (short sellers) and share a portion of the lending income with you. You may opt out of the Fully Paid Securities Lending program at any time in account settings.

5. Margin Interest: Equivest charges interest on margin loans at 7.25% APR (subject to change). The current margin rate schedule is available at equivestmarket.com/pricing.`,
  },
  {
    title: "Best Execution Policy",
    content: `Equivest is required under SEC regulations and FINRA Rule 5310 to use reasonable diligence to ascertain the best market for a security and buy or sell in such market so that the resulting price to the customer is as favorable as possible under prevailing market conditions.

Equivest routes orders through multiple venues and regularly evaluates execution quality using price improvement, fill rate, and speed metrics. Our quarterly SEC Rule 606 reports are available at equivestmarket.com/legal. You may request your personalized order routing statistics under SEC Rule 606(b)(3) by contacting support@equivestmarket.com.`,
  },
  {
    title: "Investment Risks",
    content: `All investing involves risk. The following risks apply to various products available on Equivest:

Equities (Stocks): The value of stocks can decline to zero. Past performance of a company or its stock price is not indicative of future performance. Equivest does not guarantee the performance of any stock.

ETFs: Exchange-traded funds are subject to market risk, tracking error, and liquidity risk. The market price of an ETF may differ from its net asset value. ETF expense ratios reduce long-term returns.

Options: Options are complex instruments that involve significant risk and are not appropriate for all investors. Options may expire worthless, resulting in the loss of the entire premium paid. Writing uncovered options involves theoretically unlimited risk. Read the Options Disclosure Document (ODD) at equivestmarket.com/legal before trading options.

Cryptocurrency: Cryptocurrency assets are highly speculative and volatile. They are not securities and are not insured by the FDIC or SIPC. The value of cryptocurrencies may decline rapidly and without warning. Regulatory treatment of digital assets is uncertain.

Bonds: Bond prices move inversely to interest rates. Holding bonds to maturity provides return of principal; selling before maturity may result in a gain or loss. High-yield (junk) bonds carry significant credit risk.

Margin: Using margin to purchase securities amplifies both gains and losses. You may lose more money than you originally deposited. Equivest may liquidate your positions without prior notice to meet margin requirements.`,
  },
  {
    title: "SIPC Protection",
    content: `Equivest Securities LLC is a member of the Securities Investor Protection Corporation (SIPC). SIPC protection applies if a brokerage firm fails — it does not protect against losses from market fluctuations or bad investment decisions.

SIPC Coverage Limits:
- Up to $500,000 total per customer (including up to $250,000 for cash claims)
- Covers securities (stocks, bonds, ETFs, options) held in your brokerage account
- Does NOT cover: cryptocurrency assets, commodities or futures contracts, investment contracts not registered with the SEC, or declines in the value of your securities

Equivest also maintains excess SIPC coverage through a Lloyd's of London syndicate, providing additional protection of up to $150 million per customer (including up to $900,000 for cash). Full details are available at equivestmarket.com/legal/sipc.`,
  },
  {
    title: "FINRA BrokerCheck",
    content: `You can obtain background information about Equivest Securities LLC and its registered representatives, including registration status, employment history, and disciplinary history, through FINRA BrokerCheck at brokercheck.finra.org or by calling FINRA at 1-800-289-9999.`,
  },
  {
    title: "Regulatory Information",
    content: `SEC: Equivest Securities LLC is registered with the U.S. Securities and Exchange Commission as a broker-dealer (File No. 8-XXXXX) and investment adviser (File No. 801-XXXXX).

FINRA: Equivest is a member firm of the Financial Industry Regulatory Authority. FINRA's investor education resources are available at investor.finra.org.

SIPC: Equivest is a member of SIPC. Information about SIPC protection is available at sipc.org or by calling SIPC at (202) 371-8300.

State Registrations: Equivest is registered as a broker-dealer in all 50 U.S. states and the District of Columbia. State registration information is available through each state's securities regulator.`,
  },
];

export default function Disclosures() {
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
        className="border-bottom pb-4 mb-4"
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
          Regulatory Disclosures
        </h1>

        <p
          className="mb-0"
          style={{
            color: "var(--muted-foreground)",
            lineHeight: 1.75,
          }}
        >
          Equivest Securities LLC is required to provide the following
          disclosures to clients and prospective clients. These disclosures
          contain important information about our firm, our services, fees,
          conflicts of interest, and the risks associated with investing.
        </p>

        <p
          className="small mt-3 mb-0"
          style={{ color: "var(--muted-foreground)" }}
        >
          Last updated: September 1, 2026
        </p>
      </header>

      {/* Important notice */}
      <div
        className="rounded border p-4 mb-5"
        style={{
          backgroundColor: "rgba(251, 191, 36, 0.05)",
          borderColor: "rgba(251, 191, 36, 0.3)",
        }}
      >
        <p
          className="small mb-0"
          style={{
            color: "var(--foreground)",
            lineHeight: 1.75,
          }}
        >
          <span aria-hidden="true">⚠️ </span>
          <strong>Important:</strong> Investing involves risk including the
          possible loss of principal. Past performance does not guarantee future
          results. The information on this page is required disclosure under
          applicable SEC and FINRA regulations and should be read carefully.
        </p>
      </div>

      {/* Disclosure sections */}
      <div className="d-flex flex-column gap-4">
        {SECTIONS.map((section) => (
          <section key={section.title}>
            <h2
              className="h5 fw-bold mb-3"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              {section.title}
            </h2>

            <p
              className="small mb-0"
              style={{
                color: "var(--muted-foreground)",
                lineHeight: 1.85,
                whiteSpace: "pre-line",
                overflowWrap: "anywhere",
              }}
            >
              {section.content}
            </p>
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer
        className="border-top pt-4 mt-5"
        style={{ borderColor: "var(--border)" }}
      >
        <p
          className="small mb-0"
          style={{
            color: "var(--muted-foreground)",
            lineHeight: 1.75,
            overflowWrap: "anywhere",
          }}
        >
          Equivest Securities LLC · SEC Registered Broker-Dealer &amp;
          Investment Adviser · Member FINRA · Member SIPC · 350 Fifth Avenue,
          Suite 4200, New York, NY 10118 ·{" "}
          <a
            href="mailto:support@equivestmarket.com"
            className="text-decoration-none"
            style={{ color: "var(--accent)" }}
          >
            support@equivestmarket.com
          </a>{" "}
          · 1-855-EQUIVEST
        </p>
      </footer>
    </div>
  );
}
