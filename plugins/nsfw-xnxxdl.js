
import fetch from 'node-fetch'
import fg from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {

 let chat = global.db.data.chats[m.chat]
  if (!chat.nsfw) throw `🚫 please *${usedPrefix}enable* nsfw`
  let user = global.db.data.users[m.sender].age
  if (user < 17) throw `❎🔞🔞🔞🔞🔞🔞🔞`
  if (!text) throw `please enter the url\n📌 Use : *${usedPrefix + command} <search>*:\n📌Use : *${usedPrefix + command} <url>*`
    
    m.react('🔞')
    if (text.includes('http://') || text.includes('https://')) {
        if (!text.includes('xnxx.com')) return m.reply(`❎ enter the link de *xnxx.com*`)
        try {
            let xn = await fg.xnxxdl(text)
            conn.sendFile(m.chat, xn.result.files.high, xn.result.title + '.mp4', `
✘『 𝗦𝗔𝗞𝗨𝗥𝗔-𝗫𝗡𝗫𝗫_𝗗𝗟 』✘

*VIDEO TITLE*         
📝 *${xn.result.title}*
*VIDEO DURATION*
🕗 *${xn.result.duration}*
*VIDEO QUALITY*
🎥 *${xn.result.quality}*
`.trim(), m, false, { asvideo: chat.usevideo })
 m.react(done)
 } catch (e) {
    m.reply(`🔴 Error : ♻️♻️♻️`)
 }
    } else {
        try {
            let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Titulo* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) m.reply(ff)
            } catch (e) {
              m.reply(`🔴 Error:♻️♻️♻️♻️`)
               }
    }
}
handler.help = ['xnxx'] 
handler.tags = ['nsfw', 'prem']
handler.command = ['xnxxsearch', 'xnxxdl', 'xnxx'] 
handler.diamond = 10
handler.premium = false
handler.register = false

export default handler
