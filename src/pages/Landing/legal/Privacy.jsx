import React from "react";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    content: [
      {
        heading: "Account Registration Information",
        body: "When you open an Equivest account, we collect your full legal name, date of birth, Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN), government-issued ID, residential address, email address, phone number, and employment information. This information is required by federal law (the USA PATRIOT Act and FINRA rules) to verify your identity and comply with Know Your Customer (KYC) obligations.",
      },
      {
        heading: "Financial Information",
        body: "We collect information about your financial situation including income, net worth, investment experience, and risk tolerance. This is used to determine suitability for certain investment products and comply with FINRA Rule 2111 (Suitability).",
      },
      {
        heading: "Transaction Data",
        body: "All orders, trades, deposits, withdrawals, and account activity are recorded and retained as required by SEC Rule 17a-4. This includes trade timestamps, execution prices, order types, quantities, and counterparty information.",
      },
      {
        heading: "Device and Usage Data",
        body: "We automatically collect IP addresses, browser type, operating system, device identifiers, pages visited, clickstream data, and session duration. This information is used for security monitoring, fraud prevention, and improving the Equivest platform.",
      },
      {
        heading: "Communications",
        body: "We record and retain all communications you have with Equivest, including emails, chat transcripts, and phone calls, as required by FINRA Rule 4511 and SEC Rule 17a-4.",
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      {
        heading: "Account Services",
        body: "We use your personal information to open and maintain your brokerage account, process transactions, send account statements and confirmations, provide customer support, and communicate about your account.",
      },
      {
        heading: "Legal and Regulatory Compliance",
        body: "As a registered broker-dealer (Equivest Securities LLC), we are required by law to collect, use, and share certain information for regulatory reporting to the SEC, FINRA, IRS, and SIPC; anti-money laundering (AML) monitoring; tax reporting (Forms 1099); and identity verification.",
      },
      {
        heading: "Security and Fraud Prevention",
        body: "We analyze account activity, login patterns, and device information to detect and prevent unauthorized access, identity theft, market manipulation, and other fraudulent or illegal activities.",
      },
      {
        heading: "Platform Improvement",
        body: "We use aggregated, de-identified usage data to improve our platform, develop new features, conduct A/B testing, and perform internal analytics. This data cannot be used to identify individual users.",
      },
    ],
  },
  {
    title: "3. Information Sharing and Disclosure",
    content: [
      {
        heading: "We Do Not Sell Your Personal Information",
        body: "Equivest does not sell, rent, or trade your personal information to third parties for their marketing purposes. This is a firm policy and commitment to our customers.",
      },
      {
        heading: "Service Providers",
        body: "We share information with carefully vetted third-party service providers who help us deliver services, including: Apex Clearing Corporation (our clearing broker), Plaid (bank account verification), identity verification providers, cloud infrastructure providers (AWS), and customer support platforms. All service providers are contractually bound to protect your information and use it only as directed by Equivest.",
      },
      {
        heading: "Legal and Regulatory Requirements",
        body: "We may disclose your information to regulators (SEC, FINRA, CFTC), law enforcement agencies, courts, or other governmental authorities when required by law, subpoena, court order, or regulatory examination.",
      },
      {
        heading: "Business Transfers",
        body: "In the event of a merger, acquisition, or sale of all or substantially all of our assets, your account information may be transferred as part of that transaction. You will be notified of any such change in advance.",
      },
    ],
  },
  {
    title: "4. Data Security",
    content: [
      {
        heading: "Technical Safeguards",
        body: "Equivest uses AES-256 encryption for data at rest and TLS 1.3 for data in transit. Our systems undergo annual third-party penetration testing and security audits. We operate a 24/7 security operations center (SOC) monitoring for threats.",
      },
      {
        heading: "Access Controls",
        body: "Access to customer data is strictly limited to Equivest employees who require it for their job function. All access is logged, audited, and subject to multi-factor authentication. Employees undergo annual security training and background checks.",
      },
      {
        heading: "Incident Response",
        body: "In the event of a data breach that affects your personal information, Equivest will notify you and relevant regulatory authorities within the timeframes required by applicable law, including FINRA Rule 4370 and applicable state breach notification laws.",
      },
    ],
  },
  {
    title: "5. Your Rights and Choices",
    content: [
      {
        heading: "Access and Correction",
        body: "You may access and correct your personal information at any time through your Equivest account settings. For information that cannot be changed online, contact us at privacy@equivestmarket.com or call 1-855-EQUIVEST.",
      },
      {
        heading: "California Residents (CCPA)",
        body: "If you are a California resident, you have the right to: (1) know what personal information we collect and how it is used; (2) delete personal information (subject to legal retention requirements); (3) opt out of sale of personal information (we do not sell personal information); and (4) non-discrimination for exercising your rights. Submit requests to privacy@equivestmarket.com.",
      },
      {
        heading: "Marketing Communications",
        body: "You may opt out of non-essential marketing emails at any time by clicking the unsubscribe link in any email or updating your communication preferences in account settings. Note that we are required by law to send certain account-related communications regardless of your preferences.",
      },
      {
        heading: "Data Retention",
        body: "We retain your personal information for as long as your account is open and for seven years after account closure, as required by SEC Rule 17a-4 and FINRA recordkeeping rules. After the retention period, information is securely deleted or anonymized.",
      },
    ],
  },
  {
    title: "6. Cookies and Tracking Technologies",
    content: [
      {
        heading: "Types of Cookies",
        body: "Equivest uses strictly necessary cookies (required for the platform to function), functional cookies (remembering your preferences), analytics cookies (understanding how users interact with our platform), and security cookies (detecting fraudulent activity). We do not use third-party advertising cookies.",
      },
      {
        heading: "Managing Cookies",
        body: "You can manage cookie preferences through your browser settings or through our Cookie Preference Center accessible from the footer of equivestmarket.com. Disabling strictly necessary cookies will impair your ability to use the platform.",
      },
    ],
  },
  {
    title: "7. Contact Us",
    content: [
      {
        heading: "Privacy Inquiries",
        body: "For questions about this Privacy Policy or your personal information, contact our Privacy Team at privacy@equivestmarket.com or by mail at: Equivest Securities LLC, Privacy Officer, 350 Fifth Avenue, Suite 4200, New York, NY 10118. We will respond to all legitimate requests within 30 days.",
      },
    ],
  },
];

export default function Privacy() {
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
          Privacy Policy
        </h1>

        <p
          className="mb-0"
          style={{
            color: "var(--muted-foreground)",
            lineHeight: 1.75,
          }}
        >
          <strong style={{ color: "var(--foreground)" }}>
            Equivest Securities LLC
          </strong>{" "}
          ("Equivest," "we," "our," or "us") is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, share, and
          protect your personal information when you use the Equivest platform
          at equivestmarket.com and our mobile applications.
        </p>

        <p
          className="small mt-3 mb-0"
          style={{ color: "var(--muted-foreground)" }}
        >
          Last updated: September 1, 2026 · Effective: September 1, 2026
        </p>
      </header>

      {/* Key summary */}
      <div
        className="rounded border p-4 mb-5"
        style={{
          borderColor: "rgba(0, 201, 167, 0.2)",
          backgroundColor: "rgba(0, 201, 167, 0.04)",
        }}
      >
        <p
          className="small mb-0"
          style={{
            color: "var(--foreground)",
            lineHeight: 1.75,
          }}
        >
          <strong>Key Summary:</strong> We collect information required to
          operate a licensed brokerage account and comply with federal and state
          law. <strong>We do not sell your personal information.</strong> We use
          industry-standard encryption to protect your data and give you control
          over your preferences. This full policy provides complete details.
        </p>
      </div>

      {/* Policy sections */}
      <div className="d-flex flex-column gap-5">
        {SECTIONS.map((section) => (
          <section key={section.title}>
            <h2
              className="h5 fw-bold mb-4"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              {section.title}
            </h2>

            <div className="d-flex flex-column gap-4">
              {section.content.map((item) => (
                <div key={item.heading}>
                  <h3 className="small fw-semibold mb-2">{item.heading}</h3>

                  <p
                    className="small mb-0"
                    style={{
                      color: "var(--muted-foreground)",
                      lineHeight: 1.85,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
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
          Equivest Securities LLC is a registered broker-dealer with the U.S.
          Securities and Exchange Commission (SEC) and a member of the Financial
          Industry Regulatory Authority (FINRA) and Securities Investor
          Protection Corporation (SIPC). This Privacy Policy applies to U.S.
          residents only. equivestmarket.com ·{" "}
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
