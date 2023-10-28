
import fetch from 'node-fetch'
import { mediafiredl } from '@bochilteam/scraper'
import fg from 'api-dylux'
let free = 150 // limite de descarga
let prem = 300 //si su servidor tienes menos de 2GB baja el límite
let handler = async (m, { conn, args, text, usedPrefix, command, isOwner, isPrems }) => {
	
   if (!args[0]) throw `🌀 please Enter The url`	
    if (!args[0].match(/mediafire/gi)) throw `❎ this link has been incorrect`
    m.react('⚖️')
    
    let limit = isPrems || isOwner ? prem : free
	let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url: u }))).buffer()
    try {
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let isLimit = limit * 1024 < filesize
    let caption = `
 ✘『𝗦𝗔𝗞𝗨𝗥𝗔-𝗠𝗘𝗗𝗜𝗔𝗙𝗜𝗥𝗘_𝗗𝗟』✘
 
*THE FILE NAME*
📝 *${filename}*
*THE FILE SIZE*
⚖️ *${filesizeH}*
*OTHER INFORMATION*
🤹‍♀️ *${ext}*
*Description*
👻 *${aploud}*
${isLimit ? `\nfile Download limit *+${free} MB*\npremium Limit *${prem} MB*` : ''} 
`.trim()
    await conn.sendFile(m.chat, ss, 'ssweb.png', caption, m)  
    if(!isLimit) await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    m.react(done)
    
    } catch {

        try {
	let res = await fg.mediafireDl(args[0])
     let { url, url2, filename, ext, upload_date, filesize, filesizeB } = res
    let isLimit = limit * 1024 < filesizeB
    let caption = `
 ✘『𝗦𝗔𝗞𝗨𝗥𝗔-𝗠𝗘𝗗𝗜𝗔𝗙𝗜𝗥𝗘_𝗗𝗟』✘
 
*THE FILE NAME*
📝 *${filename}*
*THE FILE SIZE*
⚖️ *${filesizeH}*
*OTHER INFORMATION*
🤹‍♀️ *${ext}*
*Description*
👻 *${upload_date}*
${isLimit ? `\n File download Limit *+${free} MB*\n Premium User limit *${prem} MB*` : ''} 
`.trim()

await conn.sendFile(m.chat, ss, 'ssweb.png', caption, m)
if(!isLimit) await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    m.react(done)
} catch {
    m.reply(`Error: link Has been Error`)
}

  }
  
}
handler.help = ['mediafire <url>']
handler.tags = ['dl', 'prem']
handler.command = ['mediafire', 'mfire'] 
handler.diamond = false
handler.premium = false

export default handler
