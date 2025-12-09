#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

function darken(hex, amount) {
  const num = parseInt(hex.replace("#", ""), 16)

  let r = (num >> 16) - amount
  let g = ((num >> 8) & 0x00ff) - amount
  let b = (num & 0x0000ff) - amount

  r = Math.max(0, r)
  g = Math.max(0, g)
  b = Math.max(0, b)

  return "#" + (b | (g << 8) | (r << 16)).toString(16).padStart(6, "0")
}

function generatePrimaryVariants(primary) {
  return {
    primaryHover: darken(primary, 25),
    primaryActive: darken(primary, 45),
  }
}

const inputPrimary = process.argv[2]

if (!inputPrimary || !inputPrimary.startsWith('#')) {
  console.error("❌ Você deve passar uma cor hex. Exemplo:")
  console.error('npx asba-create-theme "#3B82F6"')
  process.exit(1)
}

const primary = inputPrimary.toUpperCase()
const { primaryHover, primaryActive } = generatePrimaryVariants(primary)

const filePath = path.join(process.cwd(), 'constants/theme.ts')

const content = `export const theme = {
  light: {
    primary: "${primary}",
    primaryHover: "${primaryHover}",
    primaryActive: "${primaryActive}",
    primaryContrast: "#FFFFFF",
  },

  dark: {
    primary: "${primary}",
    primaryHover: "${primaryHover}",
    primaryActive: "${primaryActive}",
    primaryContrast: "#0A0A0A",
  },
}
`

fs.mkdirSync(path.dirname(filePath), { recursive: true })
fs.writeFileSync(filePath, content)

console.log("🎨 Theme created at: ", filePath)