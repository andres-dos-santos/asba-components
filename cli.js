#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

const filePath = path.join(process.cwd(), 'constants/theme.ts')

const content = `
export const theme = {
  dark: {
    colors: {
      primary: '#8257e6',
      background: '#1c1c1c',
      text: '#ffffff'
    }
  }
  light: {
    colors: {
      primary: '#8257e6',
      background: '#ffffff',
      text: '#1c1c1c'
    }
  }
}
`;

fs.mkdirSync(path.dirname(filePath), { recursive: true })
fs.writeFileSync(filePath, content)

console.log('🎨 Tema criado em: ', filePath);
