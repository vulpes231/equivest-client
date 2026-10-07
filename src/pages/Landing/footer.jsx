import { Link } from "react-router-dom";
import { BRAND } from "./data/config";

const FOOTER_LINKS = {
  Platform: [
    { label: "Markets", href: "/markets" },
    { label: "Trading", href: "/trading" },
    { label: "Investing", href: "/investing" },
    { label: "Automated Investing", href: "/automated-investing" },
    { label: "Retirement", href: "/retirement" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Security", href: "/security" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Learn", href: "/learn" },
    { label: "FAQ", href: "/faq" },
    { label: "Help Center", href: "/contact" },
    { label: "API Docs", href: "/api-docs" },
    { label: "Blog", href: "/blog" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Cookie Policy", href: "/legal/cookies" },
    { label: "Disclosures", href: "/legal/disclosures" },
    { label: "SIPC Protection", href: "/legal/sipc" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="border-top"
      style={{
        backgroundColor: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      <div className="container py-5">
        <div className="row g-4">
          {/* Brand */}
          <div className="col-12 col-lg-4">
            <Link
              to="/"
              className="d-flex align-items-center gap-2 text-decoration-none mb-3"
              style={{ color: "var(--foreground)" }}
            >
              <div
                className="d-flex align-items-center justify-content-center rounded"
                style={{
                  width: "32px",
                  height: "32px",
                  background: "linear-gradient(135deg, #1A3A6B, #00C9A7)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3 13L7 9L10 12L15 5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="15" cy="5" r="2" fill="#00C9A7" />
                </svg>
              </div>

              <span
                className="fs-5"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                }}
              >
                {BRAND.name}
              </span>
            </Link>

            <p
              className="small lh-lg mb-3"
              style={{
                color: "var(--muted-foreground)",
                maxWidth: "360px",
              }}
            >
              {BRAND.tagline} — Professional-grade investing tools, $0
              commissions, and automated portfolios for every stage of your
              financial journey.
            </p>

            <div className="d-flex align-items-center gap-2">
              <a
                href={BRAND.social.twitter}
                className="d-flex align-items-center justify-content-center rounded text-decoration-none"
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "var(--muted)",
                  color: "var(--muted-foreground)",
                  transition: "all 0.15s ease",
                }}
                aria-label="Twitter"
              >
                <svg
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href={BRAND.social.linkedin}
                className="d-flex align-items-center justify-content-center rounded text-decoration-none"
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "var(--muted)",
                  color: "var(--muted-foreground)",
                  transition: "all 0.15s ease",
                }}
                aria-label="LinkedIn"
              >
                <svg
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section} className="col-6 col-md-3 col-lg-2">
              <h4
                className="text-uppercase mb-3"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "var(--muted-foreground)",
                }}
              >
                {section}
              </h4>

              <ul className="list-unstyled mb-0">
                {links.map((link) => (
                  <li key={link.label} className="mb-2">
                    <Link
                      to={link.href}
                      className="small text-decoration-none"
                      style={{
                        color: "var(--muted-foreground)",
                        transition: "color 0.15s ease",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="border-top mt-5 pt-4 d-flex flex-column flex-md-row align-items-start justify-content-between gap-3"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="small mb-0"
            style={{ color: "var(--muted-foreground)" }}
          >
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
            Member SIPC. Equivest Securities LLC is a registered broker-dealer.
            Securities products are not FDIC insured, not bank guaranteed, and
            may lose value.
          </p>

          <p
            className="small mb-0"
            style={{
              color: "var(--muted-foreground)",
              maxWidth: "600px",
            }}
          >
            Investing involves risk including possible loss of principal. Past
            performance does not guarantee future results. Options involve risk
            and are not suitable for all investors. Cryptocurrency is
            speculative and not covered by SIPC or FDIC. See{" "}
            <Link
              to="/legal/disclosures"
              className="text-decoration-underline"
              style={{ color: "inherit" }}
            >
              Disclosures
            </Link>{" "}
            for full details.
          </p>
        </div>
      </div>
    </footer>
  );
}
