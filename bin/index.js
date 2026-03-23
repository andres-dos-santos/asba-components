#!/usr/bin/env node

const { execSync } = require('node:child_process')

const command = process.argv[2]

if (command === 'init') {
  require('../scripts/set-theme-color')
} else {
  console.log('Unknown command')
}
