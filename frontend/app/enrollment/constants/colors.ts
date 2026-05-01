export const COLORS = {
  primary: "#00b8f0",
  primaryDark: "#0095d4",
  primaryText: "#007fb5",
  primaryLight: "#B3EAFF",
  primarySoft: "#f0fbff",

  white: "#ffffff",

  text: "#475569",
  textMuted: "#94a3b8",

  border: "#e2e8f0",
  divider: "#f1f5f9",

  disabledBg: "#f8fafc",
  disabledBorder: "#f1f5f9",
  disabledText: "#cbd5e1",

  cardShadow: "0 16px 60px rgba(99,102,241,0.10)",
  primaryShadow: "0 8px 24px rgba(0,184,240,0.28)",
  primaryShadowHover: "0 12px 32px rgba(0,184,240,0.38)",
} as const;

export const GRADIENTS = {
  primary: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})`,
} as const;
