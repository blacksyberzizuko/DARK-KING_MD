let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`🎀 *GROUP* : *${groupMetadata.subject}*\n🔱 *Member* : *${participants.length}*${text ? `\n🔖 Mensaje : ${text}\n` : ''}\n┌───⊷ *TAG-ALL*\n` + users.map(v => '┣❍ @' + v.replace(/@.+/, '')).join`\n` + '\n└──✪ 👸 *QUEEN-SAKURA*', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
