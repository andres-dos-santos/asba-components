#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

function adjustColor(hex, amount) {
  if (!hex) process.exit(1)

  let [r, g, b] = hex
    .replace('#', '')
    .match(/.{1,2}/g)
    .map(x => parseInt(x, 16))

  r = Math.min(255, Math.max(0, r + amount))
  g = Math.min(255, Math.max(0, g + amount))
  b = Math.min(255, Math.max(0, b + amount))

  return `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`
}

export function generateVariants(color) {
  return {
    base: color,
    hover: adjustColor(color, -20),
    active: adjustColor(color, -40),
  }
}


const args = process.argv.slice(2)
let primary = null
let secondary = null

for (let i = 0; i < args.length; i++) {
  if (args[i] === '-p') primary = args[i + 1]
  if (args[i] === '-s') secondary = args[i + 1]
}

if (!primary) {
  console.error('❌ Você precisa informar o -p "#primary".')
  process.exit(1)
}

if (!secondary) {
  console.error('❌ Você precisa informar o -s "#secondary".')
  process.exit(1)
}

const p = generateVariants(primary)
const s = generateVariants(secondary)

const filePath = path.join(process.cwd(), 'constants/theme.ts')

const content = `export const theme = {
  light: {
    primary: "${p.base}",
    primaryHover: "${p.hover}",
    primaryActive: "${p.active}",
    primaryContrast: "#FFFFFF",

    secondary: "${s.base}",
    secondaryHover: "${s.hover}",
    secondaryActive: "${s.active}",

    success: "#16A34A",
    successHover: "#22C55E",
    successActive: "#15803D",

    warning: "#F59E0B",
    warningHover: "#FBBF24",
    warningActive: "#D97706",

    error: "#DC2626",
    errorHover: "#EF4444",
    errorActive: "#B91C1C",

    info: "#0284C7",
    infoHover: "#0EA5E9",
    infoActive: "#0369A1",

    background: "#FFFFFF",
    backgroundSecondary: "#F7F7F7",

    surface: "#FFFFFF",
    surfaceSecondary: "#F2F2F2",

    text: "#111111",
    textSecondary: "#555555",

    border: "#DDDDDD"
  },

  dark: {
    primary: "${p.base}",
    primaryHover: "${p.hover}",
    primaryActive: "${p.active}",
    primaryContrast: "#0A0A0A",

    secondary: "${s.base}",
    secondaryHover: "${s.hover}",
    secondaryActive: "${s.active}",

    success: "#22C55E",
    successHover: "#16A34A",
    successActive: "#15803D",

    warning: "#FBBF24",
    warningHover: "#F59E0B",
    warningActive: "#D97706",

    error: "#F87171",
    errorHover: "#EF4444",
    errorActive: "#DC2626",

    info: "#38BDF8",
    infoHover: "#0EA5E9",
    infoActive: "#0284C7",

    background: "#0D0D0D",
    backgroundSecondary: "#1A1A1A",

    surface: "#1A1A1A",
    surfaceSecondary: "#262626",

    text: "#F5F5F5",
    textSecondary: "#BBBBBB",

    border: "#333333"
  },
}
`

fs.mkdirSync(path.dirname(filePath), { recursive: true })
fs.writeFileSync(filePath, content)

console.log("🎨 Theme created at: ", filePath)