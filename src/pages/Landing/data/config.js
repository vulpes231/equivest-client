// ============================================================
// EQUIVEST — Editable platform configuration
// ============================================================

export const BRAND = {
  name: "Equivest",
  tagline: "Smarter Markets. Stronger Portfolios.",
  logo: "/logo.svg",
  primaryColor: "#1A3A6B",
  accentColor: "#00C9A7",
  website: "https://www.equivestmarket.com",
  email: "support@equivestmarket.com",
  phone: "1-855-EQUIVEST",
  address: "350 Fifth Avenue, Suite 4200, New York, NY 10118",
  social: {
    twitter: "https://twitter.com/equivest",
    linkedin: "https://linkedin.com/company/equivest",
    instagram: "https://instagram.com/equivestmarket",
  },
};

// ============================================================
// PRICING
// ============================================================
export const PRICING_PLANS = [
  {
    id: "basic",
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Everything you need to start investing with confidence.",
    color: "muted",
    features: [
      "Commission-free stock & ETF trading",
      "Real-time quotes & live market data",
      "Basic charting with 15 indicators",
      "Equivest mobile app (iOS & Android)",
      "1 taxable brokerage account",
      "Standard email support",
    ],
    cta: "Open Free Account",
  },
  {
    id: "pro",
    name: "Professional",
    price: "$19",
    period: "per month",
    description: "For active traders who demand professional-grade tools.",
    color: "accent",
    popular: true,
    features: [
      "Everything in Starter",
      "Advanced charting with 60+ indicators",
      "Options trading ($0.55/contract)",
      "Level 2 real-time order book data",
      "Extended hours & pre-market trading",
      "Full API access & data export",
      "Priority live chat & phone support",
    ],
    cta: "Start 30-Day Trial",
  },
  {
    id: "premium",
    name: "Wealth",
    price: "$49",
    period: "per month",
    description: "The complete wealth-building platform for serious investors.",
    color: "primary",
    features: [
      "Everything in Professional",
      "Automated investing (0.20% annual fee)",
      "Traditional IRA, Roth IRA & Rollover IRA",
      "Advanced tax-loss harvesting tools",
      "Portfolio stress testing & risk modeling",
      "Institutional-grade equity research",
      "Dedicated wealth advisor access",
    ],
    cta: "Go Wealth",
  },
];

// ============================================================
// FEES
// ============================================================
export const FEES = {
  stockCommission: "$0.00",
  optionsPerContract: "$0.55",
  cryptoSpread: "1.25%",
  marginRate: "7.25% APR",
  wireTransfer: "$25.00",
  achTransfer: "Free",
};

// ============================================================
// MARKET TICKER
// ============================================================
export const TICKER_ITEMS = [
  { symbol: "S&P 500", price: "5,891.24", change: "+1.12%", up: true },
  { symbol: "NASDAQ", price: "19,234.56", change: "+0.87%", up: true },
  { symbol: "AAPL", price: "212.45", change: "+0.54%", up: true },
  { symbol: "NVDA", price: "487.32", change: "+2.14%", up: true },
  { symbol: "TSLA", price: "238.90", change: "-1.23%", up: false },
  { symbol: "MSFT", price: "418.72", change: "+0.91%", up: true },
  { symbol: "AMD", price: "142.68", change: "+1.45%", up: true },
  { symbol: "AMZN", price: "196.34", change: "+0.67%", up: true },
  { symbol: "GOOGL", price: "175.82", change: "+0.33%", up: true },
  { symbol: "META", price: "527.14", change: "+1.78%", up: true },
  { symbol: "DOW", price: "43,218.39", change: "-0.22%", up: false },
  { symbol: "BTC", price: "67,432.10", change: "+3.21%", up: true },
];

// ============================================================
// STOCKS TABLE
// ============================================================
export const STOCKS = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 212.45,
    high: 214.8,
    low: 210.2,
    volume: "14.7M",
    change: 0.54,
    up: true,
    mktCap: "3.2T",
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    price: 487.32,
    high: 491.2,
    low: 483.1,
    volume: "46.7M",
    change: 2.14,
    up: true,
    mktCap: "1.2T",
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corp.",
    price: 418.72,
    high: 421.5,
    low: 415.9,
    volume: "7.0M",
    change: 0.91,
    up: true,
    mktCap: "3.1T",
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: 238.9,
    high: 244.3,
    low: 236.1,
    volume: "28.4M",
    change: -1.23,
    up: false,
    mktCap: "762B",
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 196.34,
    high: 198.2,
    low: 194.5,
    volume: "14.7M",
    change: 0.67,
    up: true,
    mktCap: "2.1T",
  },
  {
    symbol: "META",
    name: "Meta Platforms Inc.",
    price: 527.14,
    high: 531.8,
    low: 523.2,
    volume: "7.2M",
    change: 1.78,
    up: true,
    mktCap: "1.3T",
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 175.82,
    high: 177.4,
    low: 174.1,
    volume: "8.5M",
    change: 0.33,
    up: true,
    mktCap: "2.2T",
  },
  {
    symbol: "AMD",
    name: "Advanced Micro Devices",
    price: 142.68,
    high: 145.3,
    low: 141.2,
    volume: "22.1M",
    change: 1.45,
    up: true,
    mktCap: "231B",
  },
  {
    symbol: "JPM",
    name: "JPMorgan Chase & Co.",
    price: 212.14,
    high: 213.9,
    low: 210.5,
    volume: "5.8M",
    change: 0.42,
    up: true,
    mktCap: "611B",
  },
  {
    symbol: "V",
    name: "Visa Inc.",
    price: 278.93,
    high: 280.1,
    low: 277.4,
    volume: "4.2M",
    change: -0.18,
    up: false,
    mktCap: "571B",
  },
];

// ============================================================
// PORTFOLIO DATA
// ============================================================
export const PORTFOLIO = {
  totalValue: "$284,731.56",
  dailyChange: "+$1,842.30",
  dailyChangePct: "+0.65%",
  totalReturn: "+$57,231.56",
  totalReturnPct: "+25.2%",
  cash: "$18,540.00",
  invested: "$266,191.56",
};

export const HOLDINGS = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    shares: "120",
    avgCost: "$164.20",
    currentValue: "$25,494.00",
    gain: "+$5,774.00",
    gainPct: "+29.3%",
    up: true,
    allocation: 22,
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corp.",
    shares: "45",
    avgCost: "$312.10",
    currentValue: "$21,929.40",
    gain: "+$7,834.90",
    gainPct: "+55.6%",
    up: true,
    allocation: 18,
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corp.",
    shares: "52",
    avgCost: "$380.45",
    currentValue: "$21,773.44",
    gain: "+$1,990.64",
    gainPct: "+10.1%",
    up: true,
    allocation: 15,
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    shares: "88",
    avgCost: "$178.92",
    currentValue: "$17,277.92",
    gain: "+$1,539.52",
    gainPct: "+9.8%",
    up: true,
    allocation: 12,
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    shares: "60",
    avgCost: "$252.00",
    currentValue: "$14,334.00",
    gain: "-$786.00",
    gainPct: "-5.2%",
    up: false,
    allocation: 8,
  },
];

// ============================================================
// RETIREMENT
// ============================================================
export const RETIREMENT = {
  traditionalIRALimit: "$7,000",
  rothIRALimit: "$7,000",
  catchUpContribution: "$1,000 (age 50+)",
  retirementGoal: "$1,500,000",
  currentSaved: "$124,800",
  projectedValue: "$1,487,200 by 2055",
  disclaimer:
    "Projections are hypothetical and based on assumed rates of return. Past performance does not guarantee future results. Consult a qualified financial advisor before making investment decisions. Equivest Securities LLC is not a tax advisor.",
};

// ============================================================
// AUTOMATED INVESTING
// ============================================================
export const AUTOMATED_INVESTING = {
  minInvestment: "$10",
  managementFee: "0.20% annually",
  rebalancingFreq: "Quarterly",
  disclaimer:
    "Past performance does not guarantee future results. Automated investing involves risk, including the possible loss of principal. Equivest portfolios are not FDIC insured.",
};

// ============================================================
// FAQ
// ============================================================
export const FAQ_ITEMS = [
  {
    category: "Accounts",
    items: [
      {
        q: "How do I open an account?",
        a: "Opening an Equivest account takes under five minutes. Click 'Create Account,' provide your name, email, SSN, and funding details, and you'll be approved instantly in most cases. You can start trading as soon as your first deposit clears — ACH deposits are available for trading within one business day.",
      },
      {
        q: "What account types do you offer?",
        a: "Equivest offers Individual Taxable Brokerage accounts, Traditional IRA, Roth IRA, and Rollover IRA accounts. Automated investing is available across all account types. Joint accounts and custodial (UGMA/UTMA) accounts are available on the Wealth plan.",
      },
      {
        q: "Is there a minimum deposit?",
        a: "There is no minimum deposit required to open a standard brokerage account. Automated investing requires a minimum of $10 to activate a portfolio. Margin accounts require a minimum equity balance of $2,000 per FINRA regulations.",
      },
    ],
  },
  {
    category: "Trading",
    items: [
      {
        q: "What securities can I trade?",
        a: "Equivest supports trading in U.S.-listed stocks, ETFs, options (Professional and Wealth plans), and select cryptocurrencies. All NYSE, NASDAQ, and AMEX listed securities are available. International ADRs and OTC-listed securities are also supported.",
      },
      {
        q: "What are your trading hours?",
        a: "Regular market hours are 9:30 AM – 4:00 PM ET, Monday through Friday. Professional and Wealth plan subscribers also have access to extended hours: pre-market from 4:00 AM – 9:30 AM ET and after-hours from 4:00 PM – 8:00 PM ET.",
      },
      {
        q: "Do you offer options trading?",
        a: "Yes. Options trading is available on the Professional and Wealth plans at $0.55 per contract with no base commission. We support buying and selling calls and puts, covered calls, cash-secured puts, and multi-leg spreads. All options trades require an approved options agreement.",
      },
    ],
  },
  {
    category: "Fees",
    items: [
      {
        q: "Are there commissions on stock trades?",
        a: "No. Equivest charges $0 commission on all U.S. stock and ETF trades across all plans. We generate revenue through interest on uninvested cash balances, payment for order flow on equity trades, and optional premium subscriptions.",
      },
      {
        q: "What are your options fees?",
        a: "Options trades are priced at $0.55 per contract on Professional and Wealth plans, with no base commission per leg. Exercise and assignment fees are $0. SEC and FINRA regulatory fees may apply and are passed through at cost.",
      },
      {
        q: "Are there any account maintenance fees?",
        a: "No. There are no account maintenance fees, no inactivity fees, and no minimum balance requirements on the Starter plan. The Professional plan is $19/month and the Wealth plan is $49/month, each with a 30-day free trial.",
      },
    ],
  },
  {
    category: "Deposits & Withdrawals",
    items: [
      {
        q: "How do I deposit funds?",
        a: "You can fund your Equivest account via ACH bank transfer (free, 1–3 business days), wire transfer ($25 fee, same day), or instant deposit (up to $1,000 instantly on Starter, up to $10,000 on Professional and Wealth plans).",
      },
      {
        q: "How long do transfers take?",
        a: "ACH deposits typically clear in 1–3 business days, though instant deposit makes up to $1,000 available immediately. Wire transfers post the same business day if received before 4:00 PM ET. Withdrawals via ACH take 1–3 business days.",
      },
      {
        q: "How do I withdraw funds?",
        a: "Withdrawals can be initiated from your account settings at any time. ACH withdrawals are free and typically arrive in your bank account within 1–3 business days. Wire withdrawals are $25 and post the same day. There are no withdrawal limits on settled funds.",
      },
    ],
  },
  {
    category: "Security",
    items: [
      {
        q: "How is my account protected?",
        a: "Your Equivest account is protected by 256-bit SSL encryption, optional two-factor authentication (app-based or SMS), biometric login on mobile, and 24/7 automated fraud monitoring. We employ a zero-trust security architecture across our infrastructure.",
      },
      {
        q: "Is my money SIPC insured?",
        a: "Yes. Equivest Securities LLC is a member of SIPC. Securities in your account are protected up to $500,000 (including $250,000 for cash claims) in the event of broker-dealer insolvency. SIPC does not protect against investment losses.",
      },
      {
        q: "What security features are available?",
        a: "Equivest offers two-factor authentication, biometric login, login activity alerts, trusted device management, withdrawal whitelisting, and the ability to lock your account instantly from the app. We conduct annual third-party security audits.",
      },
    ],
  },
  {
    category: "Automated Investing",
    items: [
      {
        q: "How does automated investing work?",
        a: "Equivest Automated Investing builds you a diversified portfolio of low-cost ETFs based on your investment goal, risk tolerance, and time horizon. We handle all rebalancing, dividend reinvestment, and contribution scheduling. The management fee is 0.20% annually.",
      },
      {
        q: "Can I change my portfolio allocation?",
        a: "Yes. You can adjust your risk profile, change your target allocation, or switch between goal types at any time. Changes take effect within one business day. Rebalancing triggered by manual changes is free and does not incur tax events in IRAs.",
      },
      {
        q: "How often is my portfolio rebalanced?",
        a: "Equivest automatically rebalances your portfolio quarterly, or whenever your allocation drifts more than 5% from your target. You can also trigger a manual rebalance at any time from your dashboard at no additional cost.",
      },
    ],
  },
  {
    category: "Retirement",
    items: [
      {
        q: "What retirement accounts do you offer?",
        a: "Equivest offers Traditional IRA, Roth IRA, and Rollover IRA accounts on the Wealth plan. All retirement accounts benefit from our automated investing capabilities, tax-optimized asset location, and commission-free trading.",
      },
      {
        q: "What are the contribution limits?",
        a: "For 2025, the IRA contribution limit is $7,000 per year ($8,000 if you're age 50 or older). Roth IRA eligibility phases out at modified AGI of $150,000–$165,000 (single) and $236,000–$246,000 (married filing jointly). Consult a tax advisor for your specific situation.",
      },
      {
        q: "Can I roll over an existing 401(k)?",
        a: "Yes. Equivest makes 401(k) rollovers simple. You can roll over an existing employer 401(k) or 403(b) into a Traditional IRA or Roth IRA. We provide step-by-step guidance and will coordinate directly with your former plan administrator on your behalf.",
      },
    ],
  },
];

// ============================================================
// Chart generators (replace with live API data in production)
// ============================================================
export function generatePortfolioData(points = 12) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let value = 800000;
  return months.slice(0, points).map((month) => {
    value = value * (1 + (Math.random() * 0.06 - 0.01));
    return { month, value: Math.round(value) };
  });
}

export function generateCandlestickData(points = 30) {
  let price = 212;
  return Array.from({ length: points }, (_, i) => {
    const open = price;
    const change = (Math.random() - 0.46) * 6;
    const close = parseFloat((open + change).toFixed(2));
    const high = parseFloat(
      (Math.max(open, close) + Math.random() * 2).toFixed(2),
    );
    const low = parseFloat(
      (Math.min(open, close) - Math.random() * 2).toFixed(2),
    );
    const volume = Math.floor(Math.random() * 50000000 + 10000000);
    price = close;
    return { day: i + 1, open, close, high, low, volume };
  });
}

export function generatePriceHistory(points = 50, startPrice = 212) {
  let price = startPrice;
  return Array.from({ length: points }, (_, _i) => {
    price = parseFloat(
      (price * (1 + (Math.random() * 0.04 - 0.018))).toFixed(2),
    );
    return { i: _i, price };
  });
}
