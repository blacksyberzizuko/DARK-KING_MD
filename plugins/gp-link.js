import { areJidsSameUser } from '@whiskeysockets/baileys'
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw '⚠️ set group admin'
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'groupMetadata is undefined :\\'
    if (!('participants' in groupMetadata)) throw 'participants no :('
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw '✳️ No :('
    if (!me.admin) throw '✳️ No soy administrador'
    m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
    m.react('🔗')
}
handler.help = ['link']
handler.tags = ['group']
handler.command = ['link', 'linkgroup'] 

export default handler
