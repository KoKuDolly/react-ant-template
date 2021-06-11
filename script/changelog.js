const conventionalChangelog = require('conventional-changelog')

// console.log(process.stdout)
conventionalChangelog({
  preset: 'angular',
}).pipe(process.stdout) // or any writable stream
