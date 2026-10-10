import React from "react";
import ContextShowcase from "../marketing/ContextShowcase";
import Button from "../ui/Button";
import Card from "../ui/Card";
import {
  IconFlag,
  IconLandmark,
  IconBriefcase,
  IconPackage,
  IconFilter,
  IconTrendingUp,
  IconDollarSign,
  IconGauge,
  IconCalendar,
  IconAlertTriangle,
} from "../ui/Icons";

const FEATURES = [
  {
    icon: <IconFilter />,
    title: "Advanced Bond Screener",
    desc: "Filter the full bond universe by type, issuer, maturity range, yield-to-maturity, credit rating (AAA to C), call provisions, tax status, and minimum denomination. Save screener presets to monitor opportunities over time.",
  },
  {
    icon: <IconTrendingUp />,
    title: "Real-Time Yield Curves",
    desc: "View live U.S. Treasury yield curves — 1-month to 30-year — alongside corporate and municipal yield spreads. Identify inversions, steepening, and flattening in real time with historical comparison overlays.",
  },
  {
    icon: <IconCalendar />,
    title: "Maturity Ladder Builder",
    desc: "Construct a bond ladder — staggered maturities providing regular principal return and reinvestment flexibility — directly within Equivest. The tool calculates annual cash flows, weighted-average yield, and duration for any ladder configuration.",
  },
  {
    icon: <IconGauge />,
    title: "Duration & Interest Rate Risk",
    desc: "Every bond and bond ETF displays Modified Duration and Dollar Duration (DV01). Understand exactly how much a 1 basis point change in rates affects your position value — essential for managing fixed income risk.",
  },
  {
    icon: <IconDollarSign />,
    title: "Automated Coupon Reinvestment",
    desc: "Configure automatic reinvestment of coupon payments into your designated bond ladder, bond ETF, or cash. Maximize the power of compounding without manually tracking every semi-annual payment date.",
  },
  {
    icon: <IconPackage />,
    title: "Bond ETF Integration",
    desc: "Not ready to buy individual bonds? Equivest offers 200+ bond ETFs — including BND, AGG, TLT, HYG, and municipal bond funds — commission-free alongside direct bond purchases in the same account.",
  },
];

const BOND_TYPES = [
  {
    icon: <IconFlag />,
    name: "U.S. Treasury Securities",
    yield: "4.20–5.10% YTM",
    minInvestment: "$100",
    rating: "AAA",
    taxStatus: "Federal only",
    desc: "Direct obligations of the U.S. government — the world's benchmark risk-free asset. Choose from T-Bills (4 weeks to 52 weeks), T-Notes (2 to 10 years), or T-Bonds (20 and 30 years) to match your duration preference. No state or local tax on coupon income.",
  },
  {
    icon: <IconLandmark />,
    name: "Municipal Bonds",
    yield: "3.00–4.50% YTM",
    minInvestment: "$1,000",
    rating: "AAA to BBB",
    taxStatus: "Often tax-exempt",
    desc: "Issued by U.S. states, cities, and local authorities to fund public infrastructure. Coupon income is typically exempt from federal income tax and, in many cases, state and local taxes for residents. Especially attractive for investors in the 32%+ federal tax bracket.",
  },
  {
    icon: <IconBriefcase />,
    name: "Investment-Grade Corporate",
    yield: "4.80–6.20% YTM",
    minInvestment: "$1,000",
    rating: "BBB– and above",
    taxStatus: "Fully taxable",
    desc: "Debt obligations of large, financially stable corporations rated BBB– or higher. Offer materially higher yields than Treasuries with generally manageable credit risk. Cover a wide range of industries and maturities — from 1-year notes to 30-year bonds.",
  },
  {
    icon: <IconPackage />,
    name: "High-Yield Corporate",
    yield: "6.50–10.00%+ YTM",
    minInvestment: "$1,000",
    rating: "BB+ and below",
    taxStatus: "Fully taxable",
    desc: "Below investment-grade bonds offering substantially higher yields in exchange for elevated default risk. Equivest provides issuer credit metrics, default probability estimates, and recovery rate data for every high-yield bond to help you assess risk/reward.",
  },
];

const KEY_METRICS = [
  {
    term: "Yield to Maturity (YTM)",
    def: "The total return anticipated if the bond is held to maturity, assuming coupons are reinvested at the same rate. The primary comparison metric across bonds.",
  },
  {
    term: "Duration (Modified)",
    def: "Measures the bond's sensitivity to interest rate changes. A 5-year duration bond loses approximately 5% of value per 1% rise in rates.",
  },
  {
    term: "Credit Spread",
    def: "The extra yield a corporate or municipal bond offers above a comparable-maturity Treasury. Reflects the market's assessment of default risk.",
  },
  {
    term: "Coupon Rate",
    def: "The stated annual interest rate paid on the bond's face value. A $1,000 bond with a 5% coupon pays $50 per year (typically $25 semi-annually).",
  },
  {
    term: "Call Provision",
    def: "Allows the issuer to redeem the bond before maturity, usually at a premium. A call means your yield-to-call may be lower than yield-to-maturity.",
  },
  {
    term: "Accrued Interest",
    def: "Interest earned since the last coupon payment. Bond buyers pay accrued interest to the seller at settlement; the next full coupon payment compensates the new holder.",
  },
];

const FAQ = [
  {
    q: "What is the minimum investment for individual bonds on Equivest?",
    a: "U.S. Treasury securities can be purchased in $100 increments directly from secondary markets on Equivest. Corporate and municipal bonds typically require a minimum of one bond ($1,000 face value). Equivest does not charge a transaction markup or markup fee on bond purchases — you pay the prevailing market bid/ask spread.",
  },
  {
    q: "How are bond gains and income taxed?",
    a: "Coupon income from U.S. Treasuries is subject to federal income tax but exempt from state and local taxes. Municipal bond coupons are often federally tax-exempt and may also be exempt from state/local taxes. Corporate bond income is fully taxable at ordinary income rates. Capital gains from selling bonds before maturity are taxed at short- or long-term capital gains rates depending on your holding period.",
  },
  {
    q: "What happens if I need to sell a bond before maturity?",
    a: "All bonds on Equivest can be sold in the secondary market at any time during trading hours. The price you receive depends on current market conditions — if rates have risen since you purchased, you may receive less than face value. If rates fell, you may receive more. Equivest shows real-time bid/ask quotes for every available bond.",
  },
  {
    q: "Are bond ETFs a better option than individual bonds?",
    a: "Bond ETFs offer liquidity, diversification, and lower minimum investment ($1 with fractional shares). Individual bonds provide known cash flows, a defined maturity date, and immunity from NAV discount risk. Many investors use ETFs for core bond allocation and individual bonds for specific maturity needs. Equivest supports both strategies in the same account.",
  },
  {
    q: "Does Equivest offer TIPS (Treasury Inflation-Protected Securities)?",
    a: "Yes. TIPS are available as individual securities and through ETFs like SCHP and TIP. TIPS principal adjusts with CPI, providing protection against inflation erosion of your purchasing power. Equivest displays both real yield and nominal yield for all TIPS positions.",
  },
];

const OVERVIEW_STATS = [
  {
    label: "Markup on bond transactions",
    value: "$0.00",
    highlight: true,
  },
  { label: "U.S. Treasury minimum", value: "$100 face value" },
  { label: "Corporate / muni minimum", value: "$1,000 (1 bond)" },
  { label: "Bond types available", value: "Treasuries, Muni, Corp, HY" },
  { label: "Maturity range", value: "1 month to 30 years" },
  { label: "Bond ETFs available", value: "200+ commission-free" },
  { label: "Credit ratings covered", value: "AAA to C (all grades)" },
];

const CONTEXT_POINTS = [
  {
    title: "Income",
    description: "Understand how payments are structured.",
  },
  {
    title: "Maturity",
    description: "Match time horizon with the bond term.",
  },
  {
    title: "Risk",
    description: "Compare credit and rate sensitivity.",
  },
];

export default function Bonds() {
  return (
    <div className="container py-5" style={{ marginTop: "70px" }}>
      {/* Hero */}
      <section className="row align-items-center g-5 mb-5">
        <div className="col-12 col-lg-6">
          <p
            className="small fw-semibold text-uppercase mb-3"
            style={{
              color: "var(--accent)",
              letterSpacing: "0.08em",
            }}
          >
            Bonds & Fixed Income
          </p>

          <h1
            className="display-4 fw-bold mb-4"
            style={{
              fontFamily: "'Nunito', sans-serif",
              lineHeight: 1.15,
            }}
          >
            Predictable Income.
            <br />
            Stable Returns.
          </h1>

          <p
            className="fs-5 mb-3"
            style={{
              color: "var(--muted-foreground)",
              lineHeight: 1.75,
            }}
          >
            Build a fixed income portfolio that generates reliable cash flow —
            U.S. Treasuries, municipal bonds, investment-grade and high-yield
            corporates, all in one account with professional yield analytics and{" "}
            <strong style={{ color: "var(--foreground)" }}>
              $0 markup fees
            </strong>{" "}
            on bond transactions.
          </p>

          <p
            className="mb-4"
            style={{
              color: "var(--muted-foreground)",
              lineHeight: 1.75,
            }}
          >
            Bonds provide income, capital preservation, and portfolio
            diversification that reduces correlation to equities. Whether you're
            building a ladder, planning for retirement income, or simply seeking
            lower volatility, Equivest gives you the full fixed income toolkit
            previously available only to institutional accounts.
          </p>

          <div className="d-flex flex-wrap gap-3">
            <Button href="/signup" size="lg">
              Explore Bond Markets
            </Button>

            <Button href="/learn" variant="outline" size="lg">
              Fixed Income Education
            </Button>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="d-flex flex-column gap-2">
            {OVERVIEW_STATS.map((row) => (
              <div
                key={row.label}
                className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-1 gap-sm-3 rounded border px-3 px-md-4 py-3"
                style={{
                  borderColor: row.highlight
                    ? "rgba(0, 201, 167, 0.4)"
                    : "var(--border)",
                  backgroundColor: row.highlight
                    ? "rgba(0, 201, 167, 0.04)"
                    : "var(--card)",
                }}
              >
                <span
                  className="small"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {row.label}
                </span>

                <span
                  className="small fw-semibold text-sm-end"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: row.highlight
                      ? "var(--accent)"
                      : "var(--foreground)",
                    overflowWrap: "anywhere",
                  }}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bond types */}
      <section className="mb-5">
        <h2
          className="h2 fw-bold text-center mb-3"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Bond Types Available
        </h2>

        <p
          className="text-center mb-4"
          style={{ color: "var(--muted-foreground)" }}
        >
          From risk-free government securities to higher-yielding corporate debt
          — every category of U.S. fixed income in one place.
        </p>

        <div className="row g-4">
          {BOND_TYPES.map((bond) => (
            <div className="col-12 col-md-6" key={bond.name}>
              <div
                className="h-100 rounded border p-4"
                style={{
                  backgroundColor: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="d-flex align-items-start gap-3 mb-3">
                  <div
                    className="rounded d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "rgba(0, 201, 167, 0.1)",
                      color: "var(--accent)",
                    }}
                  >
                    {bond.icon}
                  </div>

                  <div className="flex-grow-1">
                    <h3 className="h6 fw-semibold mb-1">{bond.name}</h3>

                    <p
                      className="small mb-0"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {bond.taxStatus} · Min {bond.minInvestment}
                    </p>
                  </div>
                </div>

                <p
                  className="small mb-4"
                  style={{
                    color: "var(--muted-foreground)",
                    lineHeight: 1.75,
                  }}
                >
                  {bond.desc}
                </p>

                <div
                  className="d-flex justify-content-between align-items-center gap-3 border-top pt-3"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="small"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Typical YTM range
                  </span>

                  <span
                    className="small fw-semibold text-end"
                    style={{
                      color: "var(--gain)",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {bond.yield}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p
          className="small text-center mt-3 mb-0"
          style={{ color: "var(--muted-foreground)" }}
        >
          Yields illustrative based on Sep 2026 market conditions. Actual yields
          vary. Past yields are not indicative of future rates.
        </p>
      </section>

      {/* Features */}
      <section className="mb-5">
        <h2
          className="h2 fw-bold text-center mb-4"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Professional Fixed Income Tools
        </h2>

        <div className="row g-4">
          {FEATURES.map((feature) => (
            <div className="col-12 col-sm-6 col-lg-4" key={feature.title}>
              <Card hover className="h-100">
                <div
                  className="rounded d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(0, 201, 167, 0.1)",
                    color: "var(--accent)",
                  }}
                >
                  {feature.icon}
                </div>

                <h3 className="h6 fw-semibold mb-2">{feature.title}</h3>

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

      {/* Key metrics */}
      <section className="mx-auto mb-5" style={{ maxWidth: "768px" }}>
        <h2
          className="h2 fw-bold text-center mb-3"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Essential Bond Metrics
        </h2>

        <p
          className="small text-center mb-4"
          style={{ color: "var(--muted-foreground)" }}
        >
          Equivest displays all the following metrics in real time for every
          bond you hold or research.
        </p>

        <div className="d-flex flex-column gap-3">
          {KEY_METRICS.map((metric) => (
            <div
              key={metric.term}
              className="rounded border p-3 p-md-4"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <div className="row g-2">
                <div className="col-12 col-md-4">
                  <span
                    className="small fw-semibold"
                    style={{
                      color: "var(--accent)",
                      fontFamily: "'JetBrains Mono', monospace",
                      overflowWrap: "anywhere",
                    }}
                  >
                    {metric.term}
                  </span>
                </div>

                <div className="col-12 col-md-8">
                  <p
                    className="small mb-0"
                    style={{
                      color: "var(--muted-foreground)",
                      lineHeight: 1.75,
                    }}
                  >
                    {metric.def}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interest rate risk callout */}
      <section
        className="mx-auto rounded border p-4 p-md-5 mb-5"
        style={{
          maxWidth: "768px",
          borderColor: "rgba(239, 68, 68, 0.3)",
          backgroundColor: "rgba(239, 68, 68, 0.04)",
        }}
      >
        <div className="d-flex align-items-start gap-3">
          <div className="flex-shrink-0 mt-1" style={{ color: "var(--loss)" }}>
            <IconAlertTriangle />
          </div>

          <div>
            <p
              className="small fw-semibold mb-2"
              style={{ color: "var(--loss)" }}
            >
              Interest Rate Risk Disclosure
            </p>

            <p
              className="small mb-0"
              style={{
                color: "var(--muted-foreground)",
                lineHeight: 1.75,
              }}
            >
              Bond prices move inversely to interest rates. If rates rise, the
              market value of existing bonds falls. Longer-duration bonds
              experience greater price volatility per unit of rate change. You
              may receive less than you paid if you sell before maturity.
              High-yield bonds carry meaningful default risk in addition to
              interest rate risk.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mb-5" style={{ maxWidth: "672px" }}>
        <h2
          className="h2 fw-bold text-center mb-4"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Fixed Income FAQ
        </h2>

        <div className="d-flex flex-column gap-3">
          {FAQ.map((item) => (
            <div
              key={item.q}
              className="rounded border p-4"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <h3 className="small fw-semibold mb-2">{item.q}</h3>

              <p
                className="small mb-0"
                style={{
                  color: "var(--muted-foreground)",
                  lineHeight: 1.75,
                }}
              >
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Fixed income context */}
      <ContextShowcase
        eyebrow="Fixed income context"
        title="Connect income, time, and credit quality"
        description="Bond research is most useful when yield, maturity, issuer strength, and interest-rate sensitivity are considered as one profile."
        variant="bonds"
        points={CONTEXT_POINTS}
      />

      {/* CTA */}
      <section
        className="text-center rounded border p-4 p-md-5 mt-5"
        style={{
          borderColor: "var(--border)",
          background:
            "linear-gradient(135deg, rgba(26,58,107,0.08), rgba(0,201,167,0.08))",
        }}
      >
        <h2
          className="h2 fw-bold mb-3"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Start Building Fixed Income Today
        </h2>

        <p
          className="mb-4 mx-auto"
          style={{
            color: "var(--muted-foreground)",
            maxWidth: "576px",
            lineHeight: 1.75,
          }}
        >
          Access 50,000+ bonds and 200+ bond ETFs commission-free. Open your
          Equivest account in minutes — no minimum balance required.
        </p>

        <Button href="/signup" size="lg">
          Open Free Account
        </Button>

        <p
          className="small mt-3 mb-0"
          style={{ color: "var(--muted-foreground)" }}
        >
          Investing in bonds involves risk including possible loss of principal.
          Equivest Securities LLC, member FINRA/SIPC.
        </p>
      </section>
    </div>
  );
}
