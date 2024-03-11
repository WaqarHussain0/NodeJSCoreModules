const childProcess = require('child_process')
const output = childProcess.execSync('node testing.js')

console.log('---->',output)