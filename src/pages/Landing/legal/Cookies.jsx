import React from "react";

const COOKIE_TYPES = [
  {
    name: "Strictly Necessary Cookies",
    required: true,
    color: "#1A3A6B",
    examples: ["session_id", "auth_token", "csrf_token", "security_flags"],
    desc: "These cookies are essential for the Equivest platform to function. They enable core features such as secure login, account navigation, two-factor authentication, and session management. The platform cannot operate without them. These cookies do not store any personally identifiable information beyond what is necessary for security and authentication.",
    retention: "Session / up to 24 hours",
  },
  {
    name: "Functional Cookies",
    required: false,
    color: "#00C9A7",
    examples: [
      "theme_preference",
      "language",
      "chart_settings",
      "watchlist_layout",
    ],
    desc: "Functional cookies remember your personal preferences and settings so you do not have to re-configure them each time you visit. Examples include your dark/light mode preference, saved chart settings, default order ticket values, and language selection. Disabling these cookies will cause the platform to reset your preferences on each visit.",
    retention: "Up to 12 months",
  },
  {
    name: "Analytics Cookies",
    required: false,
    color: "#2D6EFF",
    examples: ["_ga", "_gid", "amplitude_session", "mixpanel_distinct_id"],
    desc: "Analytics cookies help Equivest understand how the platform is used in aggregate — which features are most popular, where users encounter friction, and how the platform performs across different devices and browsers. All analytics data is de-identified and aggregated before analysis. Equivest does not share analytics data with third-party advertisers.",
    retention: "Up to 13 months",
  },
  {
    name: "Security Cookies",
    required: true,
    color: "#8B5CF6",
    examples: ["device_fingerprint", "fraud_score", "risk_session"],
    desc: "Security cookies enable Equivest's fraud detection and account protection systems. They help us identify unusual login patterns, detect suspicious device activity, and flag potentially unauthorized access attempts. These cookies are integral to protecting your account and financial assets and cannot be disabled.",
    retention: "Up to 30 days",
  },
];

const THIRD_PARTIES = [
  {
    name: "Google Analytics",
    purpose: "Aggregate platform usage analytics",
    type: "Analytics",
    optOut: "Google Analytics Opt-Out Browser Add-on",
  },
  {
    name: "Amplitude",
    purpose: "Feature usage and user experience analysis",
    type: "Analytics",
    optOut: "Amplitude Privacy Settings",
  },
  {
    name: "Plaid",
    purpose: "Bank account verification (during linking only)",
    type: "Functional",
    optOut: "Not applicable (used only at account linking)",
  },
  {
    name: "Sentry",
    purpose: "Error monitoring and performance tracking",
    type: "Functional",
    optOut: "Not applicable (technical errors only)",
  },
];

export default function Cookies() {
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
      <div
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
          Cookie Policy
        </h1>

        <p
          className="mb-0"
          style={{
            color: "var(--muted-foreground)",
            lineHeight: 1.75,
          }}
        >
          This Cookie Policy explains how{" "}
          <strong style={{ color: "var(--foreground)" }}>
            Equivest Securities LLC
          </strong>{" "}
          uses cookies and similar tracking technologies on equivestmarket.com
          and our mobile applications. We are committed to transparency about
          the data we collect and how it is used.
        </p>

        <p
          className="small mt-3 mb-0"
          style={{ color: "var(--muted-foreground)" }}
        >
          Last updated: September 1, 2026
        </p>
      </div>

      {/* What are cookies */}
      <section className="mb-5">
        <h2
          className="h4 fw-bold mb-3"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          What Are Cookies?
        </h2>

        <p
          className="small mb-3"
          style={{
            color: "var(--muted-foreground)",
            lineHeight: 1.75,
          }}
        >
          Cookies are small text files stored on your device when you visit a
          website. They allow the website to recognize your device and remember
          information about your visit. Cookies can be "session cookies"
          (deleted when you close your browser) or "persistent cookies" (stored
          for a set period). We also use similar technologies such as local
          storage, session storage, and device fingerprinting for security
          purposes.
        </p>

        <p
          className="small mb-0"
          style={{
            color: "var(--muted-foreground)",
            lineHeight: 1.75,
          }}
        >
          Equivest does not use cookies for advertising, retargeting, or
          cross-site behavioral tracking. We do not sell cookie data or share it
          with advertising networks.
        </p>
      </section>

      {/* Cookie types */}
      <section className="mb-5">
        <h2
          className="h4 fw-bold mb-4"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Cookies We Use
        </h2>

        <div className="d-flex flex-column gap-4">
          {COOKIE_TYPES.map((type) => (
            <div
              key={type.name}
              className="border rounded p-4"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <div className="d-flex align-items-start justify-content-between gap-3 mb-3">
                <h3 className="h6 fw-semibold mb-0">{type.name}</h3>

                <span
                  className="badge rounded-pill flex-shrink-0"
                  style={{
                    padding: "0.4rem 0.65rem",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    backgroundColor: type.required
                      ? `${type.color}15`
                      : "var(--secondary)",
                    color: type.required
                      ? type.color
                      : "var(--muted-foreground)",
                  }}
                >
                  {type.required ? "Required" : "Optional"}
                </span>
              </div>

              <p
                className="small mb-4"
                style={{
                  color: "var(--muted-foreground)",
                  lineHeight: 1.75,
                }}
              >
                {type.desc}
              </p>

              <div className="row g-4">
                <div className="col-12 col-sm-6">
                  <p
                    className="small fw-semibold mb-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    Examples
                  </p>

                  <div className="d-flex flex-wrap gap-2">
                    {type.examples.map((example) => (
                      <code
                        key={example}
                        className="rounded px-2 py-1"
                        style={{
                          backgroundColor: "var(--muted)",
                          color: "var(--muted-foreground)",
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.75rem",
                          overflowWrap: "anywhere",
                        }}
                      >
                        {example}
                      </code>
                    ))}
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <p
                    className="small fw-semibold mb-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    Retention Period
                  </p>

                  <p
                    className="small mb-0"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {type.retention}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Third parties */}
      <section className="mb-5">
        <h2
          className="h4 fw-bold mb-4"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Third-Party Cookies
        </h2>

        <p
          className="small mb-4"
          style={{
            color: "var(--muted-foreground)",
            lineHeight: 1.75,
          }}
        >
          Some third-party services used by Equivest may set their own cookies.
          We only use third-party services with strict data processing
          agreements and do not permit them to use your data for their own
          marketing purposes.
        </p>

        <div
          className="table-responsive rounded border"
          style={{ borderColor: "var(--border)" }}
        >
          <table
            className="table table-sm align-middle mb-0"
            style={{
              color: "var(--foreground)",
              minWidth: "650px",
              borderColor: "var(--border)",
            }}
          >
            <thead>
              <tr style={{ borderBottomColor: "var(--border)" }}>
                {["Provider", "Purpose", "Cookie Type", "Opt-Out"].map(
                  (heading) => (
                    <th
                      key={heading}
                      scope="col"
                      className="px-3 px-md-4 py-3 text-uppercase"
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        color: "var(--muted-foreground)",
                        backgroundColor: "var(--card)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {heading}
                    </th>
                  ),
                )}
              </tr>
            </thead>

            <tbody>
              {THIRD_PARTIES.map((provider) => (
                <tr
                  key={provider.name}
                  style={{ borderBottomColor: "var(--border)" }}
                >
                  <td
                    className="px-3 px-md-4 py-3 fw-medium"
                    style={{ backgroundColor: "var(--card)" }}
                  >
                    {provider.name}
                  </td>

                  <td
                    className="px-3 px-md-4 py-3 small"
                    style={{
                      color: "var(--muted-foreground)",
                      backgroundColor: "var(--card)",
                    }}
                  >
                    {provider.purpose}
                  </td>

                  <td
                    className="px-3 px-md-4 py-3 small"
                    style={{
                      color: "var(--muted-foreground)",
                      backgroundColor: "var(--card)",
                    }}
                  >
                    {provider.type}
                  </td>

                  <td
                    className="px-3 px-md-4 py-3"
                    style={{
                      color: "var(--muted-foreground)",
                      backgroundColor: "var(--card)",
                      fontSize: "0.75rem",
                    }}
                  >
                    {provider.optOut}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Managing cookies */}
      <section className="mb-5">
        <h2
          className="h4 fw-bold mb-4"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Managing Your Cookie Preferences
        </h2>

        <p
          className="small mb-4"
          style={{
            color: "var(--muted-foreground)",
            lineHeight: 1.75,
          }}
        >
          You can manage optional cookies through your browser settings or our
          Cookie Preference Center (accessible via the "Cookie Settings" link in
          the footer). Required cookies cannot be disabled as they are essential
          to the security and functionality of the platform.
        </p>

        <p
          className="small mb-0"
          style={{
            color: "var(--muted-foreground)",
            lineHeight: 1.75,
          }}
        >
          Most browsers allow you to refuse cookies or delete existing cookies.
          However, doing so may significantly impair your ability to use the
          Equivest platform. For browser-specific instructions, consult your
          browser's help documentation.
        </p>
      </section>

      {/* Contact */}
      <div className="border-top pt-4" style={{ borderColor: "var(--border)" }}>
        <p
          className="small mb-0"
          style={{
            color: "var(--muted-foreground)",
            lineHeight: 1.7,
          }}
        >
          Questions about this Cookie Policy? Contact us at{" "}
          <a
            href="mailto:privacy@equivestmarket.com"
            className="text-decoration-none"
            style={{ color: "var(--accent)" }}
          >
            privacy@equivestmarket.com
          </a>{" "}
          · Equivest Securities LLC · 350 Fifth Avenue, Suite 4200, New York, NY
          10118
        </p>
      </div>
    </div>
  );
}
