import { auto, broke, cash } from "../assets";

function getAccessToken() {
  return sessionStorage.getItem("token") || null;
}

const liveUrl = "https://equivest.trustserver.cloud";
const devUrl = "http://localhost:5001";

function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatCurrency(amount, currency = "USD", locale = "en-US") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);
}

const formatMarketCap = (marketCap) => {
  if (!marketCap) return;
  if (marketCap >= 1e12) {
    return (marketCap / 1e12).toFixed(1) + " trillion";
  } else if (marketCap >= 1e9) {
    return (marketCap / 1e9).toFixed(1) + " billion";
  } else if (marketCap >= 1e6) {
    return (marketCap / 1e6).toFixed(1) + " million";
  } else {
    return marketCap.toFixed(1);
  }
};

const getWalletColor = (name) => {
  switch (name) {
    case "individual brokerage":
      return "text-warning";
    case "automated investing":
      return "text-info";
    case "cash account":
      return "text-secondary";
    default:
      return null;
  }
};

const getWalletLogoBySlug = (slug) => {
  switch (slug) {
    case "cash":
      return "ri-wallet-line";
    case "auto":
      return "ri-24-hours-line";
    case "brokerage":
      return "ri-bar-chart-2-line";
    case "savings1":
      return "ri-hand-coin-line";
    case "savings2":
      return "ri-focus-2-line";
    case "savings3":
      return "ri-service-line";
    case "retirement1":
      return "ri-shield-line";
    case "retirement2":
      return "ri-donut-chart-line";
    case "retirement3":
      return "ri-coins-line";
    default:
      return "";
  }
};

const getWalletColorBySlug = (slug) => {
  switch (slug) {
    case "cash":
      return "#29BADB";
    case "auto":
      return "#f1cf24";
    case "brokerage":
      return "#5156be";
    case "savings1":
      return "#13b799";
    case "savings2":
      return "#a227ab";
    case "savings3":
      return "#f17171";
    case "retirement1":
      return "#7C3AED";
    case "retirement2":
      return "#468927";
    case "retirement3":
      return "#af7e3e";
    default:
      return null;
  }
};

const getSize = (width) => {
  if (width >= 768) {
    return "1350px";
  }

  // if (width >= 576) {
  //   return "900px";
  // }

  // if (width >= 992) {
  //   return "1400px";
  // }

  return "100%";
};

const getBodySize = (width) => {
  if (width >= 768) {
    return "1250px";
  }

  // if (width >= 576) {
  //   return "1000px";
  // }

  // if (width >= 992) {
  //   return "1400px";
  // }

  return "100%";
};

const getWalletBg = (name) => {
  switch (name) {
    case "brokerage":
      return "#E8EBFD";
    case "auto":
      return "#FFF7E4";
    case "cash":
      return "#DFF5FA";
    default:
      return null;
  }
};

const getWalletIcon = (name) => {
  switch (name) {
    case "brokerage":
      return broke;
    case "auto":
      return auto;
    case "cash":
      return cash;
    default:
      return null;
  }
};

const getIconColor = (name) => {
  switch (name) {
    case "traditional ira":
      return "#261CB6";
    case "health savings":
      return "#F17171";
    case "high yield savings":
      return "#3AB67A";
    default:
      return null;
  }
};

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

const getIconBg = (name) => {
  switch (name) {
    case "traditional ira":
      return "#E4EDFF";
    case "health savings":
      return "#FDEAEA";
    case "high yield savings":
      return "#E8F3EA";
    default:
      return null;
  }
};

const getTotalProfit = (wallet, walletData) => {
  if (!walletData) return 0;
  const slug = wallet.slug;

  // console.log(walletData);

  if (walletData[slug] && walletData[slug].totalProfitLoss !== undefined) {
    return walletData[slug].totalProfitLoss;
  }
  return 0;
};

const allowedRoutesIfNotVerified = [
  "/dashboard",
  "/cash",
  "/deposit",
  "/transfer",
  "/withdraw",
  "/profile",
  "/contact",
  "/personal",
];

const validateFileSize = (file) => {
  const maxSize = 10 * 1024 * 1024;

  if (file.size > maxSize) {
    return false;
  }

  return true;
};

const HOME_STYLES = `
.home-page .theme-card { background-color: var(--card); }
.home-page .theme-secondary { background-color: var(--secondary); }
.home-page .theme-muted-bg { background-color: var(--muted); }
.home-page .theme-border { border-color: var(--border) !important; }
.home-page .theme-foreground { color: var(--foreground); }
.home-page .theme-muted { color: var(--muted-foreground); }
.home-page .theme-accent { color: var(--accent); }
.home-page .theme-gain { color: var(--gain); }
.home-page .theme-loss { color: var(--loss); }
.home-page .theme-gain-bg { background-color: var(--gain); }
.home-page .theme-loss-bg { background-color: var(--loss); }
.home-page .theme-accent-bg { background-color: var(--accent); }
.home-page .theme-border-bg { background-color: var(--border); }
.home-page .theme-foreground-bg { background-color: var(--foreground); }
.home-page .theme-border-text { color: var(--border); }
.home-page .theme-primary { color: var(--primary); }
.home-page .theme-divide > * + * { border-color: var(--border) !important; }
.home-page .home-accent-soft { background-color: rgba(0,201,167,.1); }
.home-page .shadow-soft { box-shadow: 0 1rem 3rem rgba(26,58,107,.15); }
.home-page .shadow-accent { box-shadow: 0 1rem 3rem rgba(0,201,167,.1); }
.home-page .border-accent { border-color: var(--accent) !important; }
.home-page .border-start-accent { border-left-color: var(--accent) !important; }
.home-page .home-hover-muted:hover { background-color: var(--muted); }
.home-page .home-text-10 { font-size: 10px; }
.home-page .home-text-9 { font-size: 9px; }
.home-page .home-text-8 { font-size: 8px; }
.home-page .home-text-7 { font-size: 7px; }
.home-page .home-hover { transition: all .2s ease; }
.home-page .home-hover:hover { box-shadow: 0 .125rem .25rem rgba(0,0,0,.075); }
.home-page .home-card-hover { transition: all .2s ease; }
.home-page .home-card-hover:hover { transform: translateY(-2px); box-shadow: 0 .5rem 1rem rgba(0,0,0,.08); }
.home-page .home-grid > * { padding: .75rem; }
@media (min-width:576px) { .home-page .home-grid-2 > * { width:50%; } .home-page .home-grid-3 > * { width:33.333333%; } }
@media (min-width:992px) { .home-page .home-grid-2-lg > * { width:50%; } .home-page .home-grid-4-lg > * { width:25%; } }

.home-page .home-icon-5 { width:20px; height:20px; }
.home-page .home-icon-4 { width:16px; height:16px; }
.home-page .home-icon-35 { width:14px; height:14px; }
.home-page .home-icon-6 { width:24px; height:24px; }
.home-page .home-icon-9 { width:36px; height:36px; }
.home-page .home-h-28 { height:112px; }
.home-page .home-h-56 { height:224px; }
.home-page .home-h-48 { height:192px; }
.home-page .home-h-24 { height:96px; }
.home-page .home-h-16 { height:64px; }
.home-page .home-w-36 { width:144px; }
.home-page .home-h-2 { height:8px; }
`;

export {
  getAccessToken,
  validateFileSize,
  allowedRoutesIfNotVerified,
  liveUrl,
  devUrl,
  capitalizeWords,
  formatCurrency,
  formatMarketCap,
  getWalletColor,
  getWalletIcon,
  getWalletBg,
  getIconColor,
  getIconBg,
  formatBytes,
  getTotalProfit,
  getWalletColorBySlug,
  getWalletLogoBySlug,
  getSize,
  getBodySize,
  HOME_STYLES,
};
