
import fg from 'api-dylux' 
import { tiktokdl } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `🌀 please enter the Tiktok Url \n\n ⚡ Example : ${usedPrefix + command} https://vm.tiktok.com`
if (!args[0].match(/tiktok/gi)) throw `❎ This link has been incorrect`
m.react('🕗')

try {
    let p = await fg.tiktok(args[0]) 
    let te = `
 ✘『𝗦𝗔𝗞𝗨𝗥𝗔-𝗧𝗜𝗞𝗧𝗢𝗞_𝗗𝗟』✘
*THE USER NICKNAME*
🥷 *${p.nickname}*
*THE USERNAME*
👻 *${p.unique_id}*
*THE TIME DURATION* 
🕗 *${p.duration}*
*THE VIDEO DESCRIPTION*
📝 *${p.description}*
*🧚‍♂️QUEEN-SAKURA_MD🧚‍♂️*`
    conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m)
    m.react(✅)
    } catch {  	
    try { 
	const { author: { nickname }, video, description } = await tiktokdl(args[0])
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw '❎ Error all'
    conn.sendFile(m.chat, url, 'fb.mp4', `
✘『𝗦𝗔𝗞𝗨𝗥𝗔-𝗧𝗜𝗞𝗧𝗢𝗞2』✘
⦁ *Nickname:* ${nickname} ${description ? `\n⦁ *DESCRIPTION* ${description}` : ''}
🧚‍♂️𝗤𝗨𝗘𝗘𝗡-𝗦𝗔𝗞𝗨𝗥𝗔_𝗠𝗗`, m)
m.react(done)
} catch {
    m.reply(`❎ Error`)
}
} 
    
}  
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
handler.diamond = false

export default handler
