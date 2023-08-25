import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['94770378874', 'Dark Legend Hyper', true],
  ['94770378874'], 
  ['94770378874'] 
] //Numeros de owner 

global.mods = ['94770378874'] 
global.prems = ['94770378874', '94770378874', '94770378874']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'TU-APIKEY' //Regístrese en https://api-fgmods.ddns.net/
}

// Sticker WM
global.packname = 'QUEEN-SAKURA-MD' 
global.author = '@dark-legend-hyper' 
global.fgig = '👸 Sígueme en Github\nhttps://github.com/blacksyberzizuko\n' 
global.dygp = 'https://chat.whatsapp.com/FYPYqeucaxr4qwME8G6Tot'
global.fgsc = 'https://github.com/blacksyberzizuko' 
global.fgyt = 'https://youtube.com'
global.fgpyp = 'https://paypal.me'
global.fglog = 'https://i.imgur.com/PhUGotC.jpg' 

global.wait = '*⌛ _loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '🎀'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
