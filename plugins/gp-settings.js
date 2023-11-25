let handler = async (m, { conn, args, usedPrefix, command }) => {
import fetch from 'node-fetch'
let handler = async function (m, { conn, text }) {    
    let isClose = { // Switch Case Like :v
        'open': 'not_announcement',
        'close': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
 ┏⚋⚋⚋⚋❬ *GROUP HAS BEEN* ❭⚋⚋⚋⚋❍
  *🔱 ${usedPrefix + command} close*
  *🔱 ${usedPrefix + command} open*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
 let pp = './src/sakura_menu.jpg' 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
    m.react('🎪')    
}
handler.help = ['group *open/close*']
handler.tags = ['group']
handler.command = ['group', 'grupo'] 
handler.admin = true
handler.botAdmin = true

export default handler
