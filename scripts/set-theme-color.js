const fs = require('node:fs')
const path = require('node:path')
const prompts = require('prompts')

const colors = ['zinc', 'slate', 'gray', 'neutral', 'stone']

const formatLabel = (color) => color.charAt(0).toUpperCase() + color.slice(1)

async function main() {
  const response = await prompts({
    type: 'select',
    name: 'color',
    message: 'Select the main color for light and dark mode:',
    choices: colors.map((color) => ({
      title: formatLabel(color),
      value: color,
    })),
    initial: 0, // default = zinc
  })

  if (!response.color) {
    console.log('❌ No color selected')
    process.exit(1)
  }

  const fileContent = `export const PREFER_THEME_COLOR = '${response.color}' as const
`

  const filePath = path.resolve(
    __dirname,
    '../src/constants/prefer-theme-color.ts',
  )

  fs.writeFileSync(filePath, fileContent)

  console.log(`✅ Theme color set to "${response.color}"`)
}

main()
