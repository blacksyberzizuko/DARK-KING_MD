
import fg from 'api-dylux'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `🌀 Example : \n*${usedPrefix + command}* https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`
          m.react('🕗')    
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ` 
✘『𝗦𝗔𝗞𝗨𝗥𝗔-𝗧𝗪𝗜𝗧𝗧𝗘𝗥_𝗗𝗟』✘
⦁ *Description*: ${desc}
*🧚‍♂️QUEEN-SAKURA_MD*`
conn.sendFile(m.chat, HD, 'twitter.mp4', te, m)
m.react(done)
} catch (e) {
  	m.reply(`🌀Please enter the correct Url`)
	} 
	
}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^(twitter|tw)$/i
handler.diamond = false

export default handler
