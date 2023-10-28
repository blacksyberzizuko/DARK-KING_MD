
import fg from 'api-dylux'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `🌀please enter the Url \n *${usedPrefix + command}* https://www.instagram.com`
    m.react('🎥')
    let res = await fg.igdl(args[0])
    for (let result of res.url_list) {
    conn.sendFile(m.chat, result, 'igdl.mp4', `✅ *Downloaded By Queen-Sakura*`, m)
    m.react(done)
  }
}
handler.help = ['instagram <link ig>']
handler.tags = ['dl']
handler.command = ['ig', 'igdl', 'instagram', 'igimg', 'igvid'] 
handler.diamond = false

export default handler 
