import { TICKER_ITEMS } from "../data/config";

export default function MarketTicker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className="border-bottom overflow-hidden"
      style={{
        backgroundColor: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      <div
        className="d-flex flex-nowrap ticker-scroll"
        style={{ whiteSpace: "nowrap" }}
      >
        {doubled.map((item, index) => (
          <div
            key={index}
            className="d-inline-flex align-items-center gap-2 px-4 py-2 border-end flex-shrink-0"
            style={{
              borderColor: "var(--border)",
            }}
          >
            <span
              className="small fw-semibold"
              style={{
                color: "var(--foreground)",
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              {item.symbol}
            </span>

            <span
              className="small"
              style={{
                color: "var(--foreground)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {item.price}
            </span>

            <span
              className="small fw-medium"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: item.up ? "var(--gain)" : "var(--loss)",
              }}
            >
              {item.up ? "▲" : "▼"} {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
