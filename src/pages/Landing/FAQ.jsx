import { useState } from "react";
import Button from "./ui/Button";

const FAQ_DATA = [
  {
    category: "Getting Started",
    items: [
      {
        q: "What is Equivest?",
        a: "Equivest is a global investment platform that gives individuals access to stocks, ETFs, bonds, cryptocurrencies, and automated investment portfolios. It is designed for investors of all experience levels, from first-time investors to experienced traders.",
      },
      {
        q: "Who can open an Equivest account?",
        a: "Equivest is available to eligible individuals in over 190 countries. You will need a government-issued ID, a tax identification number (or country equivalent), and a valid email address to register.",
      },
      {
        q: "How long does account opening take?",
        a: "Most accounts are verified and approved within minutes. In some cases, additional identity verification may be required, which can take 1–2 business days.",
      },
      {
        q: "Is there a minimum deposit to get started?",
        a: "There is no minimum deposit required to open an account. You can start investing with any amount once your account is funded.",
      },
      {
        q: "What currencies are supported?",
        a: "Equivest supports account funding in multiple currencies including USD, EUR, GBP, AUD, and others via international bank transfer. Currency conversion is handled automatically at the time of deposit.",
      },
    ],
  },
  {
    category: "Account & Identity Verification",
    items: [
      {
        q: "What documents do I need to verify my identity?",
        a: "You will need a valid government-issued photo ID (passport or national identity card) and proof of your tax identification number. Additional documentation may be requested based on your country of residence.",
      },
      {
        q: "Why do I need to provide a Tax Identification Number?",
        a: "Tax identification is required by law for financial account reporting. This may be a Social Security Number (USA), National Insurance Number (UK), TFN (Australia), or the equivalent in your country.",
      },
      {
        q: "How is my personal data protected?",
        a: "Equivest uses 256-bit SSL encryption, multi-factor authentication, and strict data access controls. Your personal data is handled in accordance with applicable data protection laws including GDPR. See our Privacy Policy for full details.",
      },
      {
        q: "Can I have multiple accounts?",
        a: "You may open multiple account types (brokerage, retirement, automated investing) under a single Equivest profile. Having duplicate profiles for the same individual is not permitted.",
      },
    ],
  },
  {
    category: "Funding & Cash Management",
    items: [
      {
        q: "How do I deposit funds?",
        a: "Funds can be deposited via bank transfer or international wire transfer. Connect your bank account from the Cash section of your dashboard and follow the deposit instructions.",
      },
      {
        q: "How long do deposits take to settle?",
        a: "Bank transfers typically settle within 1–3 business days. Wire transfers may settle the same day or next business day depending on the originating bank and jurisdiction.",
      },
      {
        q: "Are there fees for deposits or withdrawals?",
        a: "Standard bank transfers are free. International wire transfers may incur fees from your sending bank. Equivest does not charge a fee for incoming bank transfers.",
      },
      {
        q: "How do I withdraw funds?",
        a: "Navigate to the Cash section, select Withdraw, enter the amount, and confirm your destination bank account. Withdrawals are processed within 1–3 business days.",
      },
      {
        q: "What is the cash yield on uninvested funds?",
        a: "Uninvested cash in your Equivest account is allocated to a sweep programme that earns a competitive yield. The current rate is displayed in the Cash section of your dashboard.",
      },
    ],
  },
  {
    category: "Investing",
    items: [
      {
        q: "What can I invest in on Equivest?",
        a: "Equivest provides access to stocks, ETFs, bonds, options, cryptocurrencies, and commodities. You can also use Automated Investing for a managed portfolio approach.",
      },
      {
        q: "Are there commissions on trades?",
        a: "Stock and ETF trades are commission-free. Options contracts are charged per contract. Cryptocurrency trades include a spread. See the relevant product page for full details.",
      },
      {
        q: "What is a fractional share?",
        a: "A fractional share allows you to invest in a portion of a single share rather than a whole share. This means you can invest in high-priced stocks with any amount, starting from $1.",
      },
      {
        q: "How does dividend reinvestment work?",
        a: "You can opt in to automatic dividend reinvestment (DRIP) at the position level. When enabled, dividends are automatically used to purchase additional shares of the same security on the payment date.",
      },
      {
        q: "What is portfolio rebalancing?",
        a: "Rebalancing is the process of adjusting your portfolio back to its target allocation after market movements cause the weightings to drift. Equivest Auto Investing handles rebalancing automatically on a periodic basis.",
      },
    ],
  },
  {
    category: "Automated Investing",
    items: [
      {
        q: "What is Auto Investing?",
        a: "Auto Investing is Equivest's managed portfolio service. You choose an investment plan based on your goals and risk tolerance, and the platform handles all investment decisions, contributions, and rebalancing automatically.",
      },
      {
        q: "How do I choose an investment plan?",
        a: "Plans range from Conservative to Aggressive, reflecting different balances of equities, bonds, and cash. You can take a short risk profile questionnaire during setup to receive a plan recommendation.",
      },
      {
        q: "Can I change my plan after I start?",
        a: "Yes. You can switch plans, adjust your contribution amount, or pause contributions at any time from your Auto Investing dashboard. Changes take effect on the next scheduled contribution date.",
      },
      {
        q: "What are the fees for Auto Investing?",
        a: "Auto Investing charges an annual management fee of 0.20% of assets under management. There are no commissions on trades executed within Auto Investing portfolios.",
      },
      {
        q: "What happens during a market downturn?",
        a: "Your Auto Investing portfolio is designed for long-term goals. During market downturns, the system continues making scheduled contributions and may rebalance to take advantage of lower prices — a discipline known as dollar-cost averaging.",
      },
    ],
  },
  {
    category: "Trading",
    items: [
      {
        q: "What order types are available?",
        a: "Equivest supports market orders, limit orders, stop-loss orders, stop-limit orders, and trailing-stop orders. Options strategies including single-leg and multi-leg orders are also available.",
      },
      {
        q: "What are trading hours?",
        a: "Equivest supports standard market hours as well as pre-market and after-hours trading sessions. Cryptocurrency trades 24/7. Exact hours depend on the exchange on which the security is listed.",
      },
      {
        q: "What is a limit order?",
        a: "A limit order lets you specify the maximum price you are willing to pay (buy) or the minimum price you will accept (sell). Your order will only execute if the market reaches your specified price.",
      },
      {
        q: "What is a stop-loss order?",
        a: "A stop-loss order automatically sells a security when it falls to a specified price. This helps limit potential losses without requiring you to monitor the market constantly.",
      },
      {
        q: "Can I trade options?",
        a: "Yes. Options trading is available on Equivest for eligible accounts. Options involve significant risk and are not suitable for all investors. Please review the Options risk disclosure before trading.",
      },
    ],
  },
  {
    category: "Market Overview",
    items: [
      {
        q: "What is the Market Overview?",
        a: "Market Overview is a research and monitoring tool within Equivest. It shows global market indices, sector performance, top movers, and an economic calendar to help you understand current market conditions.",
      },
      {
        q: "Is the market data real-time?",
        a: "Market data is provided in real-time or with a short delay depending on the exchange and your account settings. Cryptocurrency data is always real-time.",
      },
      {
        q: "Can I create a watchlist?",
        a: "Yes. You can add any stock, ETF, or crypto asset to your watchlist from the Market Overview or Stock Detail page. Your watchlist appears in the Trading Terminal for quick access.",
      },
    ],
  },
  {
    category: "Stock Details",
    items: [
      {
        q: "What information is on a Stock Detail page?",
        a: "Each Stock Detail page includes the current price, historical price chart, key financial statistics, analyst ratings, earnings history, company profile, and recent news.",
      },
      {
        q: "What are analyst ratings?",
        a: "Analyst ratings reflect the consensus view of professional securities analysts — typically Buy, Hold, or Sell — along with an average price target. Ratings are updated as analysts revise their recommendations.",
      },
      {
        q: "How current is the financial data?",
        a: "Key statistics and earnings data are updated after market close each trading day. Analyst ratings are updated as new research is published.",
      },
    ],
  },
  {
    category: "Retirement Planning",
    items: [
      {
        q: "Does Equivest support retirement accounts?",
        a: "Yes. Equivest supports tax-advantaged retirement account structures depending on your country of residence. The account types available to you are determined during registration based on your jurisdiction.",
      },
      {
        q: "What types of retirement accounts are available?",
        a: "Account types vary by country. Examples include Traditional IRA and Roth IRA (USA), SIPP (UK), RRSP (Canada), and Superannuation (Australia). Equivest will show the retirement account options applicable to your country.",
      },
      {
        q: "Can I roll over an existing pension or retirement account?",
        a: "Yes. Equivest supports transfers from existing pension schemes, workplace plans, and retirement accounts. Contact support for assistance with a transfer from an existing provider.",
      },
      {
        q: "Is there a contribution limit for retirement accounts?",
        a: "Contribution limits vary by country and account type. These limits are set by your country's tax authority and updated annually. Equivest applies the applicable limits automatically.",
      },
    ],
  },
  {
    category: "Crypto",
    items: [
      {
        q: "What cryptocurrencies are available?",
        a: "Equivest currently supports Bitcoin (BTC), Ethereum (ETH), Solana (SOL), Ripple (XRP), Litecoin (LTC), Chainlink (LINK), and additional assets. The full list is available in the Crypto section of the platform.",
      },
      {
        q: "Is crypto covered by investor protection schemes?",
        a: "No. Cryptocurrency assets are not covered by standard investor protection schemes such as SIPC (USA) or FSCS (UK) that apply to securities. This is an important risk to understand before investing in crypto.",
      },
      {
        q: "Are there fees for crypto trades?",
        a: "Crypto trades on Equivest include a spread, which is the difference between the buy and sell price. There are no additional commissions or withdrawal fees.",
      },
      {
        q: "Can I transfer crypto to an external wallet?",
        a: "Equivest is designed as an investment platform rather than a crypto wallet. Crypto assets held on Equivest are custodied on your behalf. External wallet transfers are not currently supported.",
      },
    ],
  },
  {
    category: "Security & Privacy",
    items: [
      {
        q: "How does Equivest protect my account?",
        a: "Equivest uses 256-bit SSL encryption, two-factor authentication (2FA), biometric login support, and continuous fraud monitoring. We strongly recommend enabling 2FA on your account.",
      },
      {
        q: "What should I do if I suspect unauthorised account activity?",
        a: "Contact Equivest support immediately via live chat or email. We will freeze your account access while the issue is investigated. Do not share your login credentials with anyone.",
      },
      {
        q: "Does Equivest sell my personal data?",
        a: "No. Equivest does not sell personal data to third parties. Data is used only for providing and improving the platform's services, in accordance with our Privacy Policy and applicable data protection law.",
      },
      {
        q: "How do I close my account?",
        a: "You can request account closure by contacting support. Before closure, you will need to sell or transfer any holdings and withdraw your cash balance. Account closure is typically completed within 5–10 business days.",
      },
    ],
  },
];

function CategoryAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="d-flex flex-column gap-2">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="border rounded overflow-hidden"
            style={{ borderColor: "var(--border)" }}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-100 border-0 d-flex align-items-center justify-content-between text-start px-4 py-3"
              style={{
                backgroundColor: "transparent",
                color: "var(--foreground)",
                transition: "background-color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--muted)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <span
                className="pe-3"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--foreground)",
                }}
              >
                {item.q}
              </span>

              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                style={{
                  flexShrink: 0,
                  color: "var(--muted-foreground)",
                  transition: "transform 0.2s ease",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {isOpen && (
              <div className="px-4 pb-3">
                <p
                  className="mb-0"
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.625,
                    color: "var(--muted-foreground)",
                  }}
                >
                  {item.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...FAQ_DATA.map((item) => item.category)];

  const filtered =
    activeCategory === "All"
      ? FAQ_DATA
      : FAQ_DATA.filter((item) => item.category === activeCategory);

  return (
    <div className="container py-5" style={{ maxWidth: "960px" }}>
      {/* Header */}
      <div className="text-center mb-5">
        <p
          className="text-uppercase mb-3"
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "var(--accent)",
          }}
        >
          Help Center
        </p>

        <h1
          className="mb-3"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(2.25rem, 5vw, 2.5rem)",
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          Frequently Asked Questions
        </h1>

        <p className="mb-0" style={{ color: "var(--muted-foreground)" }}>
          Find answers to common questions about accounts, trading, funding,
          crypto, retirement, and more.
        </p>
      </div>

      {/* Category Filter */}
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          const count =
            FAQ_DATA.find((item) => item.category === category)?.items.length ??
            0;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className="border rounded px-3 py-2"
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                color: isActive ? "#fff" : "var(--muted-foreground)",
                background: isActive
                  ? "linear-gradient(135deg, #1A3A6B, #00C9A7)"
                  : "var(--card)",
                borderColor: isActive ? "transparent" : "var(--border)",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = "var(--foreground)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = "var(--muted-foreground)";
                }
              }}
            >
              {category}

              {category !== "All" && (
                <span
                  className="ms-1"
                  style={{
                    fontSize: "10px",
                    opacity: 0.7,
                  }}
                >
                  ({count})
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* FAQ Sections */}
      <div className="d-flex flex-column gap-5">
        {filtered.map((section) => (
          <section key={section.category}>
            <div className="d-flex align-items-center gap-3 mb-3">
              <h2
                className="mb-0"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                }}
              >
                {section.category}
              </h2>

              <span
                className="rounded fw-semibold"
                style={{
                  padding: "2px 8px",
                  fontSize: "0.75rem",
                  backgroundColor: "rgba(0,201,167,0.1)",
                  color: "var(--accent)",
                }}
              >
                {section.items.length}
              </span>
            </div>

            <CategoryAccordion items={section.items} />
          </section>
        ))}
      </div>

      {/* Still Need Help */}
      <div
        className="rounded p-4 p-md-5 text-center mt-5"
        style={{
          background:
            "linear-gradient(135deg, rgba(26,58,107,0.05), rgba(0,201,167,0.05))",
          border: "1px solid var(--border)",
        }}
      >
        <h3
          className="mb-2"
          style={{
            fontSize: "1.125rem",
            fontWeight: 600,
          }}
        >
          Still have questions?
        </h3>

        <p className="small mb-4" style={{ color: "var(--muted-foreground)" }}>
          Our support team is available Monday–Sunday via live chat and email.
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          <Button href="/contact">Contact Support</Button>

          <Button href="/contact" variant="outline">
            Live Chat
          </Button>
        </div>
      </div>
    </div>
  );
}
