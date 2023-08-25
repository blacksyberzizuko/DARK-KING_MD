
import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `✳️ Ya estás registrado\n\n¿Quiere volver a registrarse?\n\n 📌 Use este comando para eliminar su registro \n*${usedPrefix}unreg* <Número de serie>`
  if (!Reg.test(text)) throw `⚠️ Formato incorrecto\n\n ✳️ Uso del comamdo: *${usedPrefix + command} nombre.edad*\n📌Ejemplo : *${usedPrefix + command}* ${name2}.16`
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
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┏⚋⚋⚋❬ *REGISTER* ❭⚋⚋❍
🔖 *NAME :* ${name}
🔖 *AGE* : ${age} años
🔖 *NUMBER SN* :
${sn}
└──────────────

 *${usedPrefix}help* para ver el Menu
`.trim())
}
handler.help = ['reg'].map(v => v + ' <nombre.edad>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar'] 

export default handler

