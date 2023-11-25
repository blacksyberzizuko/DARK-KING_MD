
import fg from 'api-dylux' 
let handler = async (m, { conn, args, usedPrefix, command }) => {
 
 if (!args[0]) throw `🎭 Send the link of a Facebook video\n\n📌 Example  :\n*${usedPrefix + command}* https://fb.watch/d7nB8-L-gR/`
    m.react('🎞️')
   try {
    let result = await fg.fbdl(args[0]);
    let tex = `
 ✘ 『 𝗦𝗔𝗞𝗨𝗥𝗔-𝗙𝗕_𝗗𝗟 』 ✘
 
*🎥THE VIDEO TITLE*

🌀 *${result.title}*

*FACEBOOK VIDEO DOWNLOADER*
┏━━━━━━━━━━━━━━━━━━⦂⦁
┃*🧚‍♂️QUEEN-SAKURA_MD🧚‍♂️*
┗━━━━━━━━━━━━━━━━━━⦂⦁`;
    conn.sendFile(m.chat, result.videoUrl, 'fb.mp4', tex, m);
    m.react('♻')
    m.react(done);
  } catch (error) {
 	m.reply('Error: link')
 	} 
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.diamond = true

export default handler
