//import db from '../lib/database.js'

let handler = async (m, { text, conn }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`
☆*: .｡. oQUEEN-SAKURA-AFKo .｡.:*☆ 
Now you are afk until you send a message
 *USER:* ${conn.getName(m.sender)} 
 *REASION:* ${text ? text : ''}
  `)
}
handler.help = ['afk <razon>']
handler.tags = ['fun']
handler.command = ['afk']
handler.group = true

export default handler
