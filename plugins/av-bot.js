
let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)
let av = `./SAKURA-MD/Audio-Uploader/${pickRandom([".alive", ".menu"])}.mp3`

conn.sendButton(m.chat, `HI *${name}* \n \nHow are you\n`, fgig, null, [
      ['⦙☰ Menu', '/help'],
      ['⦙☰ Menu 2', '/menu2'],
      ['⌬ Grupos', '/gpdylux']
    ], m)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(bot|dylux)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
