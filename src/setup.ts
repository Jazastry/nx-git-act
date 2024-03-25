import { execSync } from 'node:child_process'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'url'

const pathA = resolve(dirname(process.execPath), 'npm')
console.log('pathA:', pathA)

// j&& ${pathA} install -g yarn
execSync(`sudo ln -sf "${process.execPath}" /usr/bin/node`, {
  stdio: 'inherit',
  encoding: 'utf-8'
})

const pathB = fileURLToPath(import.meta.resolve('..'))
console.log('pathB:', pathB)

// execSync(`yarn --cwd ${pathB}`, {
//   stdio: 'inherit',
//   encoding: 'utf-8'
// })
