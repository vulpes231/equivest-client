import React from "react";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: `By opening an account with Equivest Securities LLC ("Equivest," "we," "us," or "our"), accessing the Equivest platform at equivestmarket.com, or using any Equivest mobile application, you agree to be bound by these Terms of Service ("Terms"), our Privacy Policy, and all applicable laws and regulations. If you do not agree to these Terms, do not use the Equivest platform.

These Terms constitute a binding legal agreement between you and Equivest Securities LLC, a Delaware corporation registered as a broker-dealer with the U.S. Securities and Exchange Commission (SEC) and a member of FINRA and SIPC. Our CRD number is available on FINRA BrokerCheck at brokercheck.finra.org.`,
  },
  {
    title: "2. Eligibility",
    body: `To open and maintain an Equivest brokerage account, you must: (1) be at least 18 years of age; (2) be a U.S. citizen, permanent resident, or resident alien with a valid U.S. address; (3) have a valid Social Security Number or Individual Taxpayer Identification Number; (4) not be subject to backup withholding; and (5) not be prohibited from opening a securities account under applicable U.S. law or regulation.

Equivest is not currently available to residents of certain U.S. territories or to non-U.S. persons. Offering a false representation to open an account is a federal crime.`,
  },
  {
    title: "3. Account Opening and Maintenance",
    body: `When you open an Equivest account, you authorize us to verify your identity, conduct credit checks, and screen against government watchlists as required by the USA PATRIOT Act. You agree to provide accurate and complete information and to promptly update your information if it changes.

Equivest reserves the right to decline any account application in its sole discretion and to close accounts that violate these Terms, applicable law, or our internal policies. In the event of account closure, we will transfer your assets or issue a check for the net liquidation value of your account within the timeframes required by FINRA rules.`,
  },
  {
    title: "4. Brokerage Services",
    body: `Equivest provides self-directed brokerage services. We execute orders at your direction and do not provide personalized investment advice unless you are enrolled in a separately disclosed advisory service. All investment decisions are made by you. You acknowledge that: (1) securities markets involve risk including the possible loss of principal; (2) past performance does not guarantee future results; (3) Equivest does not guarantee the profitability of any trade; and (4) information provided on the platform (including analyst ratings, news, and screening tools) is for informational purposes only and is not a recommendation to buy or sell any security.

Equivest's Automated Investing service is offered through a separate program with additional terms. Enrollment in Automated Investing constitutes investment advisory services subject to the Investment Advisers Act of 1940.`,
  },
  {
    title: "5. Commissions, Fees, and Payments",
    body: `Equivest charges zero commissions on U.S.-listed stock and ETF trades. Options trades are charged $0.55 per contract. Cryptocurrency transactions are subject to a 1.25% spread. Wire transfers are $25.00 per outgoing transfer. A complete and current fee schedule is available at equivestmarket.com/pricing.

Equivest receives payment for order flow (PFOF) on equity and options orders. Equivest earns interest on uninvested cash balances in your account. All sources of revenue are disclosed in our Form CRS, available at equivestmarket.com/legal. You acknowledge that PFOF may create a conflict of interest in order routing, and that we are required to seek best execution for your orders regardless of PFOF arrangements.`,
  },
  {
    title: "6. Order Execution",
    body: `Equivest is required by SEC Rule 606 to route orders to venues that provide best execution for our customers. Market orders are executed at the prevailing market price at the time of execution. Limit orders are executed only at the specified price or better. Equivest does not guarantee that any order will be filled or filled at a particular price, particularly during periods of unusual market volatility, trading halts, or technical issues.

Your order execution statistics, including speed and price improvement data, are published quarterly on our website in accordance with SEC Rule 606. You may request your personalized order routing report under SEC Rule 606(b) by contacting support@equivestmarket.com.`,
  },
  {
    title: "7. Margin Accounts",
    body: `Margin trading involves borrowing funds from Equivest to purchase securities. Margin accounts are subject to additional terms, a separate Margin Agreement, and a minimum equity requirement of $2,000 as required by FINRA Rule 4210. Equivest may issue margin calls requiring you to deposit additional funds or securities, and may liquidate positions in your account without prior notice if margin requirements are not met. Margin trading magnifies both potential gains and potential losses and is not appropriate for all investors.`,
  },
  {
    title: "8. Prohibited Activities",
    body: `You agree not to: (1) engage in wash trading, layering, spoofing, front-running, or other manipulative trading practices prohibited by the Securities Exchange Act of 1934; (2) use the platform for money laundering or financing terrorism; (3) attempt to access other users' accounts; (4) use automated bots or scrapers on the platform without written authorization; (5) engage in insider trading or trading on material non-public information; (6) create multiple accounts to evade restrictions; or (7) violate any applicable law or regulation.

Violation of these prohibitions may result in immediate account termination, reporting to regulatory authorities, and civil or criminal liability.`,
  },
  {
    title: "9. Intellectual Property",
    body: `The Equivest platform, including its software, design, trademarks, logos, and content, is owned by or licensed to Equivest Securities LLC and is protected by U.S. and international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any Equivest content without prior written consent. The Equivest name and logo are registered trademarks of Equivest Securities LLC.`,
  },
  {
    title: "10. Limitation of Liability",
    body: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, EQUIVEST AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE EQUIVEST PLATFORM OR SERVICES, EVEN IF EQUIVEST HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

EQUIVEST'S TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM YOUR USE OF THE PLATFORM SHALL NOT EXCEED THE TOTAL COMMISSIONS AND FEES PAID BY YOU TO EQUIVEST IN THE TWELVE MONTHS PRECEDING THE CLAIM. SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR EXCLUSION OF LIABILITY FOR CERTAIN TYPES OF DAMAGES; THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.`,
  },
  {
    title: "11. Dispute Resolution and Arbitration",
    body: `Any dispute, claim, or controversy arising out of or relating to these Terms or your use of Equivest services shall be resolved by binding arbitration before FINRA Dispute Resolution Services, except where prohibited by applicable law. You waive the right to a jury trial and to participate in a class action or class-wide arbitration. You may opt out of arbitration within 30 days of first accepting these Terms by emailing legal@equivestmarket.com with the subject line "Arbitration Opt-Out."

Nothing in this arbitration clause prevents you from filing a complaint with FINRA, the SEC, or any applicable state securities regulator.`,
  },
  {
    title: "12. Governing Law",
    body: `These Terms are governed by the laws of the State of New York, without regard to its conflict of law provisions, and applicable federal securities laws. You consent to the exclusive jurisdiction of the courts located in New York County, New York for any disputes not subject to arbitration.`,
  },
  {
    title: "13. Amendments",
    body: `Equivest may update these Terms from time to time. We will notify you of material changes via email or a prominent notice on the platform at least 30 days before the changes take effect, except where a shorter notice period is required by law. Continued use of the platform after the effective date constitutes acceptance of the revised Terms.`,
  },
];

export default function Terms() {
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
          Terms of Service
        </h1>

        <p
          className="mb-0"
          style={{
            color: "var(--muted-foreground)",
            lineHeight: 1.75,
          }}
        >
          These Terms of Service govern your use of the Equivest platform and
          your brokerage account with{" "}
          <strong style={{ color: "var(--foreground)" }}>
            Equivest Securities LLC
          </strong>
          , a registered broker-dealer (SEC) and member of FINRA and SIPC.
          Please read these Terms carefully before opening an account.
        </p>

        <p
          className="small mt-3 mb-0"
          style={{ color: "var(--muted-foreground)" }}
        >
          Last updated: September 1, 2026 · Effective: September 1, 2026
        </p>
      </header>

      {/* Terms sections */}
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
              {section.body}
            </p>
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer
        className="border-top pt-4 mt-5"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="d-flex flex-column gap-2">
          <p
            className="small mb-0"
            style={{
              color: "var(--muted-foreground)",
              lineHeight: 1.75,
            }}
          >
            Equivest Securities LLC · Registered Broker-Dealer (SEC) · Member
            FINRA · Member SIPC · 350 Fifth Avenue, Suite 4200, New York, NY
            10118
          </p>

          <p
            className="small mb-0"
            style={{ color: "var(--muted-foreground)" }}
          >
            For questions about these Terms, contact us at{" "}
            <a
              href="mailto:legal@equivestmarket.com"
              className="text-decoration-none"
              style={{ color: "var(--accent)" }}
            >
              legal@equivestmarket.com
            </a>{" "}
            or 1-855-EQUIVEST.
          </p>
        </div>
      </footer>
    </div>
  );
}
