import {
  IconActivity,
  IconBarChart,
  IconBriefcase,
  IconCheckCircle,
  IconCoins,
  IconGlobe,
  IconLayers,
  IconLock,
  IconPieChart,
  IconShieldCheck,
  IconSprout,
  IconTarget,
  IconTrendingUp,
} from "../ui/Icons";

const VISUALS = {
  markets: {
    icon: <IconGlobe />,
    label: "Global view",
    metric: "One connected picture",
    bars: [38, 58, 46, 74, 64, 88],
    mode: "orbit",
    showGuide: false,
  },
  trading: {
    icon: <IconActivity />,
    label: "Decision flow",
    metric: "Review before action",
    bars: [56, 42, 70, 52, 82, 68],
    mode: "bars",
  },
  stocks: {
    icon: <IconTrendingUp />,
    label: "Company research",
    metric: "Story behind the stock",
    bars: [34, 48, 44, 62, 76, 86],
    mode: "steps",
  },
  investing: {
    icon: <IconBriefcase />,
    label: "Portfolio view",
    metric: "Goals stay visible",
    bars: [72, 52, 66, 44, 58, 38],
    mode: "allocation",
  },
  automation: {
    icon: <IconTarget />,
    label: "Plan in motion",
    metric: "Built around your goal",
    bars: [46, 52, 60, 68, 76, 84],
    mode: "network",
  },
  retirement: {
    icon: <IconSprout />,
    label: "Long-term plan",
    metric: "Progress over time",
    bars: [30, 40, 50, 62, 74, 88],
    mode: "steps",
  },
  cash: {
    icon: <IconCoins />,
    label: "Cash clarity",
    metric: "Ready when you are",
    bars: [70, 54, 78, 62, 84, 72],
    mode: "network",
    showGuide: false,
  },
  funds: {
    icon: <IconPieChart />,
    label: "Diversified basket",
    metric: "Many holdings, one view",
    bars: [84, 72, 60, 48, 40, 32],
    mode: "allocation",
  },
  options: {
    icon: <IconLayers />,
    label: "Strategy map",
    metric: "Outcomes made visual",
    bars: [52, 70, 86, 70, 52, 36],
    mode: "orbit",
  },
  crypto: {
    icon: <IconCoins />,
    label: "Digital assets",
    metric: "Context before exposure",
    bars: [42, 76, 48, 86, 56, 68],
    mode: "network",
  },
  bonds: {
    icon: <IconBarChart />,
    label: "Income profile",
    metric: "Risk and maturity aligned",
    bars: [88, 76, 66, 56, 46, 38],
    mode: "ladder",
  },
  commodities: {
    icon: <IconSprout />,
    label: "Real assets",
    metric: "Supply meets demand",
    bars: [58, 72, 48, 84, 62, 76],
    mode: "tiles",
  },
  features: {
    icon: <IconCheckCircle />,
    label: "Connected toolkit",
    metric: "One product journey",
    bars: [44, 56, 68, 80, 68, 86],
    mode: "tiles",
    showGuide: false,
  },
  security: {
    icon: <IconLock />,
    label: "Protection layers",
    metric: "Designed into every step",
    bars: [82, 68, 88, 74, 92, 84],
    mode: "orbit",
    showGuide: false,
  },
  global: {
    icon: <IconGlobe />,
    label: "Built globally",
    metric: "Local context, shared access",
    bars: [48, 64, 56, 78, 70, 88],
    mode: "network",
    showGuide: false,
  },
};

function VisualPattern({ mode, bars }) {
  if (mode === "orbit") {
    return (
      <div
        className="position-relative mx-auto mt-4 d-flex align-items-center justify-content-center"
        style={{
          height: "128px",
          maxWidth: "208px",
        }}
      >
        <div
          className="position-absolute rounded-circle border"
          style={{
            width: "112px",
            height: "112px",
            borderColor: "rgba(255,255,255,0.2)",
          }}
        />

        <div
          className="position-absolute rounded-circle border"
          style={{
            width: "80px",
            height: "80px",
            borderColor: "rgba(0,201,167,0.6)",
          }}
        />

        <div
          className="rounded-circle"
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "var(--accent)",
          }}
        />

        {bars.slice(0, 4).map((value, index) => (
          <div
            key={value}
            className="position-absolute rounded-circle bg-white"
            style={{
              width: "12px",
              height: "12px",
              transform: `rotate(${index * 90}deg) translateY(-${
                36 + value / 4
              }px)`,
            }}
          />
        ))}
      </div>
    );
  }

  if (mode === "allocation") {
    return (
      <div
        className="mt-4 d-grid align-items-center gap-4"
        style={{
          gridTemplateColumns: "112px 1fr",
        }}
      >
        <div
          className="d-flex align-items-center justify-content-center rounded-circle border border-8"
          style={{
            width: "112px",
            height: "112px",
            borderColor: "var(--accent)",
          }}
        >
          <div
            className="rounded-circle"
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: "rgba(255,255,255,0.15)",
            }}
          />
        </div>

        <div className="d-flex flex-column gap-3">
          {bars.slice(0, 4).map((value, index) => (
            <div
              key={value}
              className="overflow-hidden rounded-pill"
              style={{
                height: "8px",
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="h-100 rounded-pill"
                style={{
                  width: `${value}%`,
                  backgroundColor: "var(--accent)",
                  opacity: 1 - index * 0.16,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (mode === "network") {
    return (
      <div
        className="position-relative mt-4 d-grid align-items-center"
        style={{
          height: "112px",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        {bars.slice(0, 6).map((value, index) => (
          <div
            key={`${value}-${index}`}
            className="mx-auto d-flex align-items-center justify-content-center rounded-circle border"
            style={{
              width: index === 0 ? "48px" : "32px",
              height: index === 0 ? "48px" : "32px",
              borderColor: "rgba(255,255,255,0.2)",
              backgroundColor:
                index === 0 ? "var(--accent)" : "rgba(255,255,255,0.1)",
            }}
          >
            <span
              className="rounded-circle bg-white"
              style={{
                width: "8px",
                height: "8px",
              }}
            />
          </div>
        ))}

        <div
          className="position-absolute start-0 end-0 top-50"
          style={{
            height: "1px",
            marginLeft: "16.666%",
            marginRight: "16.666%",
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        />
      </div>
    );
  }

  if (mode === "ladder") {
    return (
      <div
        className="mt-4 d-flex align-items-end gap-3"
        style={{ height: "112px" }}
      >
        {bars.slice(0, 5).map((value, index) => (
          <div
            key={value}
            className="flex-fill rounded border p-2"
            style={{
              height: `${45 + index * 12}%`,
              borderColor: "rgba(255,255,255,0.15)",
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          >
            <div
              className="rounded-pill"
              style={{
                height: "8px",
                backgroundColor: "var(--accent)",
                opacity: 1 - index * 0.12,
              }}
            />
          </div>
        ))}
      </div>
    );
  }

  if (mode === "tiles") {
    return (
      <div className="mt-4 row g-3">
        {bars.slice(0, 6).map((value, index) => (
          <div key={value} className="col-4">
            <div
              className="rounded border p-3"
              style={{
                borderColor: "rgba(255,255,255,0.15)",
                backgroundColor:
                  index === 0 ? "var(--accent)" : "rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="rounded-pill"
                style={{
                  height: "8px",
                  width: `${Math.max(34, value)}%`,
                  backgroundColor: "rgba(255,255,255,0.8)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (mode === "steps") {
    return (
      <div
        className="mt-4 d-flex align-items-end gap-2"
        style={{ height: "112px" }}
      >
        {bars.slice(0, 5).map((height, index) => (
          <div
            key={`${height}-${index}`}
            className="d-flex flex-fill align-items-end rounded border p-2"
            style={{
              height: `${38 + index * 14}%`,
              borderColor: "rgba(255,255,255,0.15)",
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          >
            <div
              className="w-100 rounded-pill"
              style={{
                height: "8px",
                backgroundColor: "var(--accent)",
              }}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="mt-4 d-flex align-items-end gap-2"
      style={{ height: "112px" }}
    >
      {bars.map((height, index) => (
        <div
          key={`${height}-${index}`}
          className="d-flex h-100 flex-fill align-items-end rounded p-1"
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
        >
          <div
            className="w-100 rounded"
            style={{
              height: `${height}%`,
              backgroundColor: "var(--accent)",
              opacity: 0.58 + index * 0.07,
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default function ContextShowcase({
  eyebrow,
  title,
  description,
  points,
  variant,
  contained = false,
}) {
  const visual = VISUALS[variant];

  return (
    <section className={contained ? "container" : ""}>
      <div
        className="overflow-hidden rounded border"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--card)",
        }}
      >
        <div className="row g-0">
          {/* Content */}
          <div className="col-12 col-lg-7 p-4 p-sm-5 p-lg-5">
            <p
              className="mb-3 text-uppercase"
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "var(--accent)",
              }}
            >
              {eyebrow}
            </p>

            <h2
              className="fw-bold mb-0"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
                color: "var(--foreground)",
              }}
            >
              {title}
            </h2>

            <p
              className="mt-3 mb-0 lh-lg"
              style={{
                color: "var(--muted-foreground)",
                maxWidth: "672px",
              }}
            >
              {description}
            </p>

            <div className="row g-3 mt-4">
              {points.map((point, index) => (
                <div key={point.title} className="col-12 col-sm-4">
                  <div
                    className="h-100 rounded border p-3"
                    style={{
                      borderColor: "var(--border)",
                      backgroundColor: "var(--background)",
                    }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center rounded mb-3"
                      style={{
                        width: "32px",
                        height: "32px",
                        backgroundColor: "var(--secondary)",
                        color: "var(--primary)",
                        fontSize: "0.875rem",
                        fontWeight: 700,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3
                      className="mb-0"
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 700,
                        color: "var(--foreground)",
                      }}
                    >
                      {point.title}
                    </h3>

                    <p
                      className="mt-1 mb-0"
                      style={{
                        fontSize: "0.75rem",
                        lineHeight: 1.625,
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div
            className="col-12 col-lg-5 position-relative overflow-hidden p-4 p-sm-5"
            style={{
              minHeight: "320px",
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
              borderTop: "1px solid var(--border)",
            }}
          >
            <div
              className="position-absolute rounded-circle"
              style={{
                width: "208px",
                height: "208px",
                right: "-64px",
                top: "-64px",
                backgroundColor: "var(--accent)",
                opacity: 0.2,
              }}
            />

            <div
              className="position-absolute rounded-circle"
              style={{
                width: "256px",
                height: "256px",
                left: "-64px",
                bottom: "-96px",
                backgroundColor: "var(--secondary)",
                opacity: 0.1,
              }}
            />

            <div className="position-relative d-flex h-100 flex-column justify-content-between gap-4">
              <div className="d-flex align-items-center justify-content-between">
                <div
                  className="d-flex align-items-center justify-content-center rounded"
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "var(--accent)",
                    color: "var(--accent-foreground)",
                  }}
                >
                  {visual.icon}
                </div>

                {visual.showGuide !== false && (
                  <span
                    className="rounded-pill border px-3 py-1"
                    style={{
                      borderColor: "rgba(255,255,255,0.2)",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    {visual.label}
                  </span>
                )}
              </div>

              <div
                className="rounded border p-4"
                style={{
                  borderColor: "rgba(255,255,255,0.15)",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <p
                  className="mb-0 text-uppercase"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {visual.label}
                </p>

                <p
                  className="mt-2 mb-0 fw-bold"
                  style={{ fontSize: "1.25rem" }}
                >
                  {visual.metric}
                </p>

                <VisualPattern mode={visual.mode} bars={visual.bars} />
              </div>

              <div className="row g-2">
                {[IconShieldCheck, IconBarChart, IconGlobe].map(
                  (Icon, index) => (
                    <div key={index} className="col-4">
                      <div
                        className="d-flex align-items-center justify-content-center rounded border py-3"
                        style={{
                          borderColor: "rgba(255,255,255,0.15)",
                          backgroundColor: "rgba(255,255,255,0.1)",
                          color: "rgba(255,255,255,0.75)",
                        }}
                      >
                        <Icon
                          style={{
                            width: "20px",
                            height: "20px",
                          }}
                        />
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
