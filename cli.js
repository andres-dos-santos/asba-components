#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

const filePath = path.join(process.cwd(), 'constants/theme.ts')

const content = `export const theme = {
  light: {
    background: "#FFFFFF",
    backgroundSecondary: "#F7F7F7",

    surface: "#FFFFFF",
    surfaceSecondary: "#F2F2F2",

    text: "#111111",
    textSecondary: "#555555",
    textDisabled: "#999999",

    border: "#E5E5E5",
    borderStrong: "#CFCFCF",

    primary: "#3B82F6",
    primaryHover: "#2563EB",
    primaryActive: "#1D4ED8",
    primaryContrast: "#FFFFFF",

    secondary: "#6B7280",
    secondaryHover: "#4B5563",
    secondaryActive: "#374151",
    secondaryContrast: "#FFFFFF",

    success: "#22C55E",
    successContrast: "#FFFFFF",

    warning: "#F59E0B",
    warningContrast: "#1A1A1A",

    danger: "#EF4444",
    dangerContrast: "#FFFFFF",
  },

  dark: {
    background: "#0B0B0C",
    backgroundSecondary: "#141416",

    surface: "#1A1B1E",
    surfaceSecondary: "#232528",

    text: "#F5F5F5",
    textSecondary: "#B3B3B3",
    textDisabled: "#7A7A7A",

    border: "#2B2D31",
    borderStrong: "#3D3F44",

    primary: "#60A5FA",
    primaryHover: "#3B82F6",
    primaryActive: "#2563EB",
    primaryContrast: "#0A0A0A",

    secondary: "#9CA3AF",
    secondaryHover: "#6B7280",
    secondaryActive: "#4B5563",
    secondaryContrast: "#0B0B0C",

    success: "#4ADE80",
    successContrast: "#0A0A0A",

    warning: "#FBBF24",
    warningContrast: "#0A0A0A",

    danger: "#F87171",
    dangerContrast: "#0A0A0A",
  },
  typography: {
    fonts: {
      sans: "Inter",
      serif: "Merriweather",
      mono: "JetBrainsMono",
    },

    sizes: {
      xs: 10,
      sm: 12,
      md: 14,
      lg: 16,
      xl: 18,
      "2xl": 22,
      "3xl": 28,
    },

    weights: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },

    lineHeights: {
      tight: 1.1,
      normal: 1.4,
      relaxed: 1.7,
    },
  },

  spacing: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    8: 32,
    10: 40,
    12: 48,
  },

  radii: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },

  shadows: {
    sm: {
      elevation: 2,
      shadowOpacity: 0.15,
      shadowRadius: 4,
    },
    md: {
      elevation: 6,
      shadowOpacity: 0.2,
      shadowRadius: 8,
    },
    lg: {
      elevation: 12,
      shadowOpacity: 0.25,
      shadowRadius: 16,
    },
  },

  zIndex: {
    default: 0,
    dropdown: 10,
    modal: 100,
    toast: 200,
    overlay: 300,
    top: 999,
  },

  opacity: {
    disabled: 0.5,
    pressed: 0.8,
    overlay: 0.4,
  },

  sizes: {
    icon: {
      sm: 16,
      md: 20,
      lg: 24,
      xl: 28,
    },

    button: {
      sm: 36,
      md: 44,
      lg: 52,
    },

    input: {
      height: 48,
    },
  },

  animation: {
    duration: {
      fast: 100,
      normal: 200,
      slow: 350,
    },

    easing: {
      in: "ease-in",
      out: "ease-out",
      inOut: "ease-in-out",
    },

    pressEffect: {
      scale: 0.97,
      opacity: 0.85,
    },
  },
}
`;

fs.mkdirSync(path.dirname(filePath), { recursive: true })
fs.writeFileSync(filePath, content)

console.log('🎨 Tema criado em: ', filePath);
