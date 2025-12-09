#!/usr/bin/env node
import { execTheme } from '../commands/theme.js'

const args = process.argv.slice(2)

const command = args[0]

switch (command) {
  case 'theme':
    execTheme(args.slice(1))
    break

  default:
    console.log(`
      Comandos disponíveis:
        asba theme -p "#primary" -s "#secondary"
    `)
}
