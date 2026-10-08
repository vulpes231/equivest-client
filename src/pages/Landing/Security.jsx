import ContextShowcase from "./marketing/ContextShowcase";
import Card from "./ui/Card";
import Button from "./ui/Button";
import {
  IconKey,
  IconLock,
  IconShieldCheck,
  IconSearch,
  IconLandmark,
  IconGlobe,
} from "./ui/Icons";

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const SECURITY_FEATURES = [
  {
    icon: <IconKey />,
    title: "Two-Factor Authentication",
    desc: "Equivest supports app-based 2FA (Google Authenticator, Authy), SMS codes, and hardware security keys. We strongly recommend enabling 2FA on all accounts — it's the single most effective way to prevent unauthorized access.",
    detail: "App, SMS, or hardware key",
  },
  {
    icon: <IconLock />,
    title: "End-to-End Encryption",
    desc: "All data transmitted between your device and Equivest is encrypted using TLS 1.3. Your stored account data, documents, and personal information are encrypted at rest using AES-256. We use zero-knowledge architecture for sensitive fields.",
    detail: "AES-256 + TLS 1.3",
  },
  {
    icon: <IconShieldCheck />,
    title: "SIPC Protection",
    desc: "Equivest Securities LLC is a member of SIPC. Securities in your account are protected up to $500,000 (including $250,000 in cash) in the event of broker-dealer insolvency. SIPC protection does not cover investment losses. Learn more at sipc.org.",
    detail: "Up to $500,000",
  },
  {
    icon: <IconSearch />,
    title: "Fraud Monitoring",
    desc: "Our security platform monitors all account activity 24/7 using machine learning-based anomaly detection. Unusual login attempts, large withdrawals, or atypical trading patterns trigger automatic alerts and may require additional verification.",
    detail: "24/7 automated monitoring",
  },
  {
    icon: <IconLandmark />,
    title: "Regulated & Licensed",
    desc: "Equivest Securities LLC is registered with the Securities and Exchange Commission (SEC) and is a member of FINRA and SIPC. We maintain all required state broker-dealer licenses and submit to regular regulatory examinations.",
    detail: "SEC · FINRA · SIPC",
  },
  {
    icon: <IconGlobe />,
    title: "Data Privacy",
    desc: "Equivest does not sell your personal information to third parties. We collect only the data necessary to operate your account and comply with regulatory requirements. Our practices comply with CCPA and applicable U.S. privacy laws. See our Privacy Policy for details.",
    detail: "CCPA compliant · No data selling",
  },
];

const ACCOUNT_TIPS = [
  "Enable two-factor authentication — Go to Settings → Security to enable 2FA. This single step blocks the vast majority of account takeover attempts.",
  "Use a strong, unique password — At least 12 characters, unique to Equivest. Use a password manager to generate and store it.",
  "Keep your contact info updated — Ensure your email and phone are current so we can reach you if unusual activity is detected.",
  "Review account activity regularly — Check transaction history and login activity monthly. Report unexpected activity to security@equivestmarket.com.",
  "Never share login credentials — Equivest will never ask for your password, PIN, or one-time code via email, phone, or chat.",
];

const COMMITMENTS = [
  {
    title: "We will never sell your data",
    desc: "Personal information, trading history, and account data are never sold to third parties. We share data only where legally required or to operate your account.",
  },
  {
    title: "Transparent security disclosures",
    desc: "In the event of a security incident affecting your account or data, we notify you promptly with clear information about what happened.",
  },
  {
    title: "Annual third-party security audits",
    desc: "Equivest undergoes independent penetration testing and security audits twice per year. Findings are remediated on a risk-prioritized schedule.",
  },
  {
    title: "Rapid incident response",
    desc: "Our security team operates 24/7. Critical account-level incidents are escalated immediately with a target response time of under 15 minutes.",
  },
  {
    title: "Responsible disclosure program",
    desc: "Security researchers can report vulnerabilities at security@equivestmarket.com. Valid findings are acknowledged and rewarded.",
  },
];

const REGULATORY_BADGES = [
  "SEC Registered BD",
  "FINRA Member",
  "SIPC Member",
  "State Licensed",
  "CCPA Compliant",
];

export default function Security() {
  return (
    <div
      className="container py-5"
      style={{
        maxWidth: "1280px",
      }}
    >
      {/* Header */}
      <div className="text-center mx-auto mb-5" style={{ maxWidth: "768px" }}>
        <p
          className="small fw-semibold text-uppercase mb-3"
          style={{
            color: "var(--accent)",
            letterSpacing: "0.08em",
          }}
        >
          Security &amp; Trust
        </p>

        <h1
          className="display-5 fw-bold mb-4"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
          }}
        >
          Your Security is Our Priority
        </h1>

        <p
          className="fs-5 lh-base mb-3"
          style={{ color: "var(--muted-foreground)" }}
        >
          At Equivest, protecting your money, your data, and your account is not
          a feature — it's the foundation everything else is built on. We employ
          a defense-in-depth approach: multiple independent layers of security
          so that no single failure can compromise your account.
        </p>

        <p
          className="lh-base mb-0"
          style={{ color: "var(--muted-foreground)" }}
        >
          Your securities are protected by SIPC insurance up to $500,000. Your
          data is encrypted with AES-256 at rest and TLS 1.3 in transit. Your
          login is protected by two-factor authentication and real-time fraud
          monitoring. Equivest Securities LLC is registered with the SEC and is
          a member of FINRA and SIPC.
        </p>
      </div>

      {/* Security features */}
      <div className="row g-4 mb-5">
        {SECURITY_FEATURES.map((f) => (
          <div className="col-12 col-sm-6 col-lg-4" key={f.title}>
            <Card className="h-100">
              <div className="d-flex align-items-start gap-3">
                <div
                  className="d-flex align-items-center justify-content-center rounded flex-shrink-0"
                  style={{
                    width: "48px",
                    height: "48px",
                    color: "var(--accent)",
                    backgroundColor: "rgba(0,201,167,0.1)",
                  }}
                >
                  {f.icon}
                </div>

                <div>
                  <h3 className="h6 fw-semibold mb-1">{f.title}</h3>

                  <p
                    className="small fw-semibold mb-2"
                    style={{ color: "var(--accent)" }}
                  >
                    {f.detail}
                  </p>

                  <p
                    className="small lh-base mb-0"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Account security tips */}
      <div className="row g-4 mb-5">
        <div className="col-12 col-lg-6">
          <Card className="h-100">
            <h3 className="h6 fw-semibold mb-4">Protect Your Account</h3>

            <div className="d-flex flex-column gap-3">
              {ACCOUNT_TIPS.map((tip) => (
                <div key={tip} className="d-flex align-items-start gap-3">
                  <span
                    className="flex-shrink-0 mt-1"
                    style={{ color: "var(--gain)" }}
                  >
                    <CheckIcon />
                  </span>

                  <p
                    className="small lh-base mb-0"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="col-12 col-lg-6">
          <Card className="h-100">
            <h3 className="h6 fw-semibold mb-4">Our Commitments</h3>

            <div className="d-flex flex-column gap-3">
              {COMMITMENTS.map((comm) => (
                <div
                  key={comm.title}
                  className="d-flex align-items-start gap-3"
                >
                  <span
                    className="flex-shrink-0 mt-1"
                    style={{ color: "var(--accent)" }}
                  >
                    <CheckIcon />
                  </span>

                  <div>
                    <p className="small fw-semibold mb-1">{comm.title}</p>

                    <p
                      className="small mb-0"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {comm.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Context showcase */}
      <ContextShowcase
        eyebrow="Protection by design"
        title="Security is a layered product experience"
        description="Strong protection combines technology, clear account controls, operational safeguards, and informed customer habits rather than relying on one feature."
        variant="security"
        points={[
          {
            title: "Prevent",
            description: "Use secure access and verification controls.",
          },
          {
            title: "Monitor",
            description: "Surface meaningful account activity.",
          },
          {
            title: "Respond",
            description: "Make support and recovery steps clear.",
          },
        ]}
      />

      {/* Regulatory */}
      <div
        className="rounded p-4 p-md-5 text-center mb-5"
        style={{
          background:
            "linear-gradient(135deg, rgba(26,58,107,0.05), rgba(0,201,167,0.05))",
        }}
      >
        <h2
          className="h2 fw-bold mb-3"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
          }}
        >
          Regulated &amp; Compliant
        </h2>

        <p
          className="mx-auto mb-4"
          style={{
            color: "var(--muted-foreground)",
            maxWidth: "576px",
          }}
        >
          Equivest Securities LLC is a registered broker-dealer with the U.S.
          Securities and Exchange Commission (SEC), a member of the Financial
          Industry Regulatory Authority (FINRA), and a member of the Securities
          Investor Protection Corporation (SIPC).
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          {REGULATORY_BADGES.map((badge) => (
            <div
              key={badge}
              className="px-3 py-2 border rounded small fw-medium"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              {badge}
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="text-center">
        <p className="mb-3" style={{ color: "var(--muted-foreground)" }}>
          Have security concerns or questions?
        </p>

        <Button href="/contact">Contact Security Team</Button>
      </div>
    </div>
  );
}
