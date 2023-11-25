
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
 
let m2 = `
┏━━━━━❬ＡＬＩＶＥ❭━━━━━━❍
┃┏━━━━━━━━━━━━━━━━❍
┃┣❍ 👸Qᴜᴇᴇɴ-ꜱᴀᴋᴜʀᴀ👸
┃┣❍ Qᴜᴇᴇɴ ꜱᴀᴋᴜʀᴀ ᴠ0.01
┣┻━━━━━━━▢
┃▢ ⚡ɪ ᴀᴍ ᴀʟɪᴠᴇ ɴᴏᴡ ‼️
┃▢👋 ʜɪ : 𝚄𝚂𝙴𝚁
┃▢🔱 ʟᴇᴠᴇʟ : *1*
┃▢⏳ʀᴜɴᴛɪᴍᴇ : ❌
┗━━━━━▢
┏━━━━━▢
┃▢ ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱᴇɪɴɢ,
┃  👸Qᴜᴇᴇɴ-ꜱᴀᴋᴜʀᴀ-ᴍᴅ👸
┃▢ Qᴜᴇᴇɴ-ꜱᴀᴋᴜʀᴀ ᴄᴏᴅᴇᴅ ʙʏ,
┃ ⚡ᴅᴀʀᴋ-ʟᴇɢᴇɴᴅ_ʜʏᴘᴇʀ⚡
┃▢ ᴘʟᴇᴀꜱᴇ ᴛʏᴘᴇ ᴛᴏ .ᴍᴇɴᴜ ᴀɴᴅ,
┃   ᴜꜱᴇ ɪɴ Qᴜᴇᴇɴ-ꜱᴀᴋᴜʀᴀ-ʙᴏᴛ
┃▢ 🌿ʜᴀᴠᴇ ᴀ ɴɪᴄᴇ ᴅᴀʏ....
┣━━━━━━━━━━━━━━━━━❍
┃ 👸Qᴜᴇᴇɴ-ꜱᴀᴋᴜʀᴀ-ᴍᴅ👸
┗━━━━━━━━━━━━━❍
`

    let pp = './src/sakura_alive.jpg' 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
    m.react('🧚‍♂️')
}

handler.help = ['alive']
handler.tags = ['main']
handler.command = ['alive', 'Bot'] 

export default handler
