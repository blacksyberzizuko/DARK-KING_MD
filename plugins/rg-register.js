
import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `please register now\n\n after you can use bot \n*${usedPrefix}`
  if (!Reg.test(text)) throw `⚠️ Formato incorrect\n\n ✳️ use this command: *${usedPrefix + command} your name .your age\n📌Ejemplo : *${usedPrefix + command}* dark-king.18`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '👸 WHATS YOU R NAME'
  if (!age) throw '👸 HOW OLD ARE YOU'
  if (name.length >= 30) throw '👸 LARGE NUMBER ' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻Wow you can register '
  if (age < 5) throw '🚼  YOU CAN T REGISTER  '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  m.react('🎫')
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
*👨‍💻DARK-KING_MD_USER_BOT*
*🎫YOUR REGISTER PLASE*
⫍⫢⩶⩶⩶⩶⩶⩶
|🔖 *NAME :* ${name}
|🔖 *AGE* : ${age} 
|🔖 *NUMBER SN* :
${sn}
└──────────────

 *${usedPrefix} AND NOW YOU CAN USE THIS BOT PLEASE TYPE TO .MENU
`.trim())
}
handler.help = ['reg'].map(v => v + ' <nombre.edad>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar'] 

export default handler

