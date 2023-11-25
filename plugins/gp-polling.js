
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
if (!args[0]) throw `✳️ Falta texto para encuesta \n\n📌 Ejemplo : \n*${usedPrefix + command}* Mensaje  |como|xd`
if (!text.includes('|')) throw  `✳️ Separe las encuestas con *|* \n\nexample : \n*${usedPrefix + command}* hello world|hello  |jock|hi|really `

let name = await conn.getName(m.sender)
m.react('📊')
let a = []
let b = text.split('|')
for (let c = 1 || 0; c < b.length; c++) {
a.push([b[c]])
			}
			return conn.sendPoll(m.chat, `📊 poll name:* ${name}\n\n*massage:* ${text.split('|')[0]}`, a, m)
}
handler.help = ['poll <hola|como|xd>']
handler.tags = ['group'] 
handler.command = ['poll', 'encuesta', 'polling'] 
handler.group = true

export default handler
