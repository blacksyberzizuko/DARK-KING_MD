import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
let limit = 350 
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
	if (!args || !args[0]) throw `🌿 Example :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`
    if (!args[0].match(/youtu/gi)) throw `❎ Enter the Valuable Youtube Url`
	 let chat = global.db.data.chats[m.chat]
	 m.react(rwait) 
	try {
		let q = args[1] || '360p'
		let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
		const dl_url = await yt.video[q].download()
		const title = await yt.title
		const size = await yt.video[q].fileSizeH 
		
       if (size.split('MB')[0] >= limit) return m.reply(` ┏⚋⚋⚋❲ *YOUTUBE* ❳⚋⚋⚋⦁\n\n⦁ *⚖️FILESIZE* : ${size}\n⦁ *🎞️DURATION* : ${q}\n\n⦁ DOWNLOAD LIMIT *+${limit} MB*`)    
	  conn.sendFile(m.chat, dl_url, title + '.mp4', `
┏⦁⦁⦁●●❉❲ *YOUTUBE* ❳❉●●⦁⦁⦁
┗❉●●●⦁⦁⦁⦁⦁⦁  
⦁ *📝TITLE* : ${title}
⦁ *🌿TYPEt* : mp4
⦁ *🎞️DURATION* : ${q}
⦁ *⚖️FILESIZE* : ${size}
💃B҈Y҈ Q҈U҈E҈E҈N҈-S҈A҈K҈U҈R҈A҈.....
`.trim(), m, false, { asVideo: chat.useVideo })
		m.react(done) 
		
	} catch {	
       m.reply(`❌ Erorr`) 
	} 
		 
}
handler.help = ['ytmp4 <link yt>']
handler.tags = ['dl'] 
handler.command = ['ytmp4', 'dlmp4']
handler.diamond = true

export default handler
