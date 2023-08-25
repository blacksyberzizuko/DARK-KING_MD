import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ El usuario no se encuentra en mi base de datos`
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')

let str = `
┏⚋⚋⚋⚋⚋⚋❬ *PROFILE* ❭⚋⚋⚋⚋⚋❍
┗⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋❍
☛ *🔖 USERS:* 
   🎀 ${username} ${registered ? '\n   • ' + name + ' ': ''}
   🎀 @${who.replace(/@.+/, '')}
☛ *🔱 NUMBER:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
☛ *🔗 WA-LINK:* wa.me/${who.split`@`[0]}${registered ? '\n🏷️ AGE*: ' + age + ' años' : ''}
☛ *⚡ Advertencias:* ${warn}/${maxwarn}
☛ *💎 DIAMOND :* ${diamond}
☛ *🆙 Nivel* : ${level}
☛ *⬆️ XP* : Total ${exp} (${user.exp - min} / ${xp})\n${math <= 0 ? `listo para *${usedPrefix}levelup*` : `_*${math}xp*_ Falta para subir de nivel`}
☛ *🧬 RANK :* ${role}
☛ *📇 REGISTER :* ${registered ? 'Si': 'No'}
☛ *⭐ Premium* : ${prem ? 'Si' : 'No'}
❍⚋⚋⚋❬ 𝗕𝗬 𝗤𝗨𝗘𝗘𝗡-𝗦𝗔𝗞𝗨𝗥𝗔 ❭⚋⚋⚋❍
┗⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋❍`
    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { mentions: [who] })
    m.react(done)

}
handler.help = ['perfil']
handler.tags = ['group']
handler.command = ['profile', 'perfil'] 

export default handler
