#!/usr/bin/env node

const command = process.argv[2]

if (command === 'init') {
  require('../scripts/set-theme-color')
} else {
  console.log('Unknown command')
}
