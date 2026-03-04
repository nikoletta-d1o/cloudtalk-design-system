/** Design token constants for programmatic access (e.g. charts, inline styles). */

export const colors = {
  primary: {
    50: "#f1f3ff",
    100: "#e0e4ff",
    200: "#c7cdfe",
    400: "#6b7cff",
    500: "#4d5eff",
    600: "#334fff",
    700: "#1a34e6",
    800: "#021480",
    900: "#010d5c",
  },
  neutral: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e4eaf1",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
  },
  grayCool: {
    25: "#fcfcfd",
    50: "#f9f9fb",
    100: "#eff1f5",
    200: "#dcdfea",
    300: "#b9c0d4",
    400: "#7d89b0",
    500: "#5d6b98",
    600: "#4a5578",
    700: "#404968",
    800: "#30374f",
    900: "#111322",
    950: "#0e101b",
  },
  brandBlue: {
    DEFAULT: "#0527ff",
    50: "#dde2ff",
  },
  success: {
    DEFAULT: "#17b26a",
    light: "#dcfce7",
    50: "#ecfdf3",
    100: "#dcfae6",
    600: "#079455",
  },
  error: {
    DEFAULT: "#f04438",
    light: "#fef2f2",
  },
  warning: {
    DEFAULT: "#fac515",
    light: "#fefce8",
    100: "#fef0c7",
  },
  teal: {
    DEFAULT: "#139696",
    light: "#91e4e4",
  },
} as const;

export const shadows = {
  card: "0px 1px 7px rgba(24, 34, 67, 0.03)",
  cardHover: "0px 4px 12px rgba(24, 34, 67, 0.08)",
  modal: "0px 12px 36px rgba(24, 34, 67, 0.08)",
} as const;

export const radii = {
  card: "8px",
  bar: "5px",
} as const;
