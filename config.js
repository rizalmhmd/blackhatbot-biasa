global.DeveloperMode = 'false' //true Or false
global.owner = ['6281387601389'] // Put your number here
global.mods = ['6283161298704','6283805279906']  // Want some help?
global.prems = ['6283805279906','6283805279906','6283805279906','6283805279906','6281387601389'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'faisalkey'
}

// Sticker WM
global.packname = '❤️'
global.author ='THCA BOT'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
