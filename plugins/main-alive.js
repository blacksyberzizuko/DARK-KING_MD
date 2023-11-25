let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "https://raw.githubusercontent.com/blacksyberzizuko/Suneth/master/Assets/audio/Sad.mp3"
    let url = "https://github.com/DarkLegendHyper/QUEEN_SAKURA-MD_V0.0.1"
    let murl = "https://youtu.be/DibiLc17dh0?si=xp9bQ-_frEyDB1-i"
    let img = "https://telegra.ph/file/9a27a2924f69573027692.jpg"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "sakura",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "*⫹⫺  QUEEN-SAKURA_MD  ⫹⫺*\n\n⊹⩶⩶⩶⩶⩶⩶⩶⩶⩶⩶⩶⩶⊹\n*_🧚‍♀️QUEEN-SAKURA_MD COMANDS🧚‍♀️_*\n⊹⩶⩶⩶⩶⩶⩶⩶⩶⩶⩶⩶⩶⊹\n▢ .OWNERMENU\n▢ .DOWNLOADMENU\n▢ .SEARCHMENU\n▢ .TOOLMENU\n▢ .OTHERMENU\n▢ .BOTMENU\n⫹⫺⩶⩶⩶⩶⩶⩶⩶⩶⩶⩶⊶\n*THE MULTIDEVICE_WHATSAPP_BOT V01*\n⫹⫺⩶⩶⩶⩶⩶⩶⩶⩶⩶⩶⊶",
          body: "QUEEN-SAKURA",
          thumbnailUrl: img,
          sourceUrl: 'https://chat.whatsapp.com/FYPYqeucaxr4qwME8G6Tot',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
    
      await conn.sendMessage(m.chat, doc, { quoted: con });
    
    }
    
    handler.help = ['alive']
    handler.tags = ['main']
    handler.command = ['help']

    export default handler
