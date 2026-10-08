import { useState } from "react";
import Card from "./ui/Card";
import { BRAND } from "./data/config";
import { IconMail, IconPhone, IconMessageSquare, IconMapPin } from "./ui/Icons";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    category: "General",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const CONTACT_METHODS = [
    {
      icon: <IconMail />,
      label: "Email Support",
      value: BRAND.email,
      note: "Response within 24 hours",
    },
    {
      icon: <IconPhone />,
      label: "Phone Support",
      value: BRAND.phone,
      note: "Mon–Sun, 8 AM–8 PM ET",
    },
    {
      icon: <IconMessageSquare />,
      label: "Live Chat",
      value: "Available in-app",
      note: "Mon–Sun, 8 AM–8 PM ET",
    },
    {
      icon: <IconMapPin />,
      label: "Headquarters",
      value: BRAND.address,
      note: "Mon–Fri, 9 AM–6 PM ET",
    },
  ];

  const categories = [
    "General",
    "Account",
    "Trading",
    "Deposits & Withdrawals",
    "Technical Issue",
    "Billing",
    "Security",
    "Feedback",
  ];

  const socialLinks = [
    {
      label: "Twitter / X",
      href: BRAND.social.twitter,
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.745l7.737-8.835L2.25 2.25h6.895l4.262 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: BRAND.social.linkedin,
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: BRAND.social.instagram,
      svg: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
  ];

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mx-auto mb-5" style={{ maxWidth: "672px" }}>
        <p
          className="text-uppercase mb-3"
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "var(--accent)",
          }}
        >
          Contact Us
        </p>

        <h1
          className="mb-4"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(2.25rem, 5vw, 2.5rem)",
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          We're Here to Help
        </h1>

        <p
          className="fs-5 lh-lg mb-3"
          style={{ color: "var(--muted-foreground)" }}
        >
          Whether you have a question about your account, a trading issue, or
          need help getting started with automated investing — the Equivest
          support team is made up of real people who know the platform inside
          and out.
        </p>

        <p className="small mb-0" style={{ color: "var(--muted-foreground)" }}>
          We typically respond to email inquiries within 24 hours. Live chat and
          phone support are available Monday through Sunday, 8 AM to 8 PM ET.
          For urgent account security issues, call us directly at
          1-855-EQUIVEST.
        </p>
      </div>

      {/* Main Content */}
      <div className="row g-4 g-lg-5">
        {/* Contact Form */}
        <div className="col-lg-8">
          <Card>
            {submitted ? (
              <div className="text-center py-5">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "56px",
                    height: "56px",
                    backgroundColor: "rgba(0,201,167,0.1)",
                    color: "var(--gain)",
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>

                <h3
                  className="mb-2"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                  }}
                >
                  Message Sent!
                </h3>

                <p
                  className="mb-0"
                  style={{
                    color: "var(--muted-foreground)",
                    lineHeight: 1.6,
                  }}
                >
                  Thank you for reaching out to Equivest. We'll respond to{" "}
                  {form.email} within 24 hours. For urgent issues, call
                  1-855-EQUIVEST or use live chat on equivestmarket.com.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn btn-link p-0 mt-4 text-decoration-none"
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--accent)",
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2
                  className="mb-4"
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                  }}
                >
                  Send us a message
                </h2>

                <div className="row g-3 mb-3">
                  <div className="col-sm-6">
                    <label
                      htmlFor="contact-name"
                      className="form-label"
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        color: "var(--muted-foreground)",
                      }}
                    >
                      Your Name *
                    </label>

                    <input
                      id="contact-name"
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name: e.target.value,
                        })
                      }
                      placeholder="[Your Name]"
                      className="form-control"
                      style={{
                        padding: "10px 12px",
                        fontSize: "0.875rem",
                        backgroundColor: "var(--muted)",
                        borderColor: "var(--border)",
                        color: "var(--foreground)",
                      }}
                    />
                  </div>

                  <div className="col-sm-6">
                    <label
                      htmlFor="contact-email"
                      className="form-label"
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        color: "var(--muted-foreground)",
                      }}
                    >
                      Email Address *
                    </label>

                    <input
                      id="contact-email"
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          email: e.target.value,
                        })
                      }
                      placeholder="you@example.com"
                      className="form-control"
                      style={{
                        padding: "10px 12px",
                        fontSize: "0.875rem",
                        backgroundColor: "var(--muted)",
                        borderColor: "var(--border)",
                        color: "var(--foreground)",
                      }}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="contact-category"
                    className="form-label"
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color: "var(--muted-foreground)",
                    }}
                  >
                    Category
                  </label>

                  <select
                    id="contact-category"
                    value={form.category}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        category: e.target.value,
                      })
                    }
                    className="form-select"
                    style={{
                      padding: "10px 12px",
                      fontSize: "0.875rem",
                      backgroundColor: "var(--muted)",
                      borderColor: "var(--border)",
                      color: "var(--foreground)",
                    }}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="contact-subject"
                    className="form-label"
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color: "var(--muted-foreground)",
                    }}
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        subject: e.target.value,
                      })
                    }
                    placeholder="Brief summary of your question"
                    className="form-control"
                    style={{
                      padding: "10px 12px",
                      fontSize: "0.875rem",
                      backgroundColor: "var(--muted)",
                      borderColor: "var(--border)",
                      color: "var(--foreground)",
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="contact-message"
                    className="form-label"
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color: "var(--muted-foreground)",
                    }}
                  >
                    Message *
                  </label>

                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                    placeholder="Describe your question or issue in detail..."
                    className="form-control"
                    style={{
                      padding: "10px 12px",
                      fontSize: "0.875rem",
                      backgroundColor: "var(--muted)",
                      borderColor: "var(--border)",
                      color: "var(--foreground)",
                      resize: "none",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn w-100 text-white border-0 fw-semibold"
                  style={{
                    padding: "12px",
                    fontSize: "0.875rem",
                    background: "linear-gradient(135deg, #1A3A6B, #00C9A7)",
                    transition: "opacity 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </Card>
        </div>

        {/* Contact Information */}
        <div className="col-lg-4">
          <div className="d-flex flex-column gap-3">
            {CONTACT_METHODS.map((method) => (
              <Card key={method.label}>
                <div className="d-flex align-items-start gap-3">
                  <span
                    className="flex-shrink-0 mt-1"
                    style={{ color: "var(--accent)" }}
                  >
                    {method.icon}
                  </span>

                  <div>
                    <p
                      className="mb-1"
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 600,
                      }}
                    >
                      {method.label}
                    </p>

                    <p
                      className="mb-1"
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--foreground)",
                      }}
                    >
                      {method.value}
                    </p>

                    <p
                      className="mb-0"
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {method.note}
                    </p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Social Links */}
            <Card>
              <h3
                className="mb-3"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                }}
              >
                Follow Us
              </h3>

              <div className="d-flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="rounded d-flex align-items-center justify-content-center text-decoration-none"
                    style={{
                      width: "36px",
                      height: "36px",
                      backgroundColor: "var(--muted)",
                      color: "var(--muted-foreground)",
                      transition: "all 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--secondary)";
                      e.currentTarget.style.color = "var(--primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--muted)";
                      e.currentTarget.style.color = "var(--muted-foreground)";
                    }}
                  >
                    {social.svg}
                  </a>
                ))}
              </div>
            </Card>

            {/* Help Center */}
            <Card>
              <h3
                className="mb-2"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                }}
              >
                Help Center
              </h3>

              <p
                className="mb-3"
                style={{
                  fontSize: "0.75rem",
                  lineHeight: 1.6,
                  color: "var(--muted-foreground)",
                }}
              >
                Browse our help articles and tutorials for self-service support.
              </p>

              <a
                href="/faq"
                className="text-decoration-none"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "var(--accent)",
                }}
              >
                Browse FAQ →
              </a>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
