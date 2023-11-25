import { toPTT } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
	try {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    //if (!/video|audio/.test(mime)) throw `✳️ ${msg.toavT()} :\n *${usedPrefix + command}*`
    let media = await q.download?.()
    if (!media) throw '❎ error this media'
    let audio = await toPTT(media, 'mp4')
    if (!audio.data) throw '❎ Error  converter'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, true, { mimetype: 'audio/mp4' })
    } catch (e) {
        m.reply(`✳️ Reply to the audio you want to convert to voice memo with:\n *${usedPrefix + command}*`)
   }
}
handler.help = ['toav']
handler.tags = ['fun']
handler.command = ['toav', 'tovn'] 

export default handler
