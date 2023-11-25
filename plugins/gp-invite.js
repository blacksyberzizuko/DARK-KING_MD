
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `✳️ Enter the number you want to send a group invitation to\n\nexample :\n*${usedPrefix + command}* 947703788774`
if (text.includes('+')) throw  `✳️ Enter the number all together without the *+*`
if (isNaN(text)) throw ' Enter only numbers plus your country code without spaces'
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', ` *INVITE OF GROUP*\n\nA user invited you to join this group\n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`✅An invitation link was sent to the user`) 
        m.react('✔')
}
handler.help = ['invite <549xxx>']
handler.tags = ['group']
handler.command = ['invite','invitar'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
