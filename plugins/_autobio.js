
let handler = m => m
handler.all = async function (m) {
	let setting = global.db.data.settings[this.user.jid]
	
let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
		let bio = `\n🤴 𝐇𝐄𝐋𝐋𝐎 𝐔𝐒𝐄𝐑 𝐈 𝐀𝐌 𝐃𝐀𝐑𝐊-𝐊𝐈𝐍𝐆_𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏_𝐁𝐎𝐓\n🤖 𝗕𝗢𝗧_𝗥𝗨𝗡𝗧𝗜𝗠𝗘 = ${muptime} ® ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ ꜱʏʙᴇʀ_ᴛᴇᴀᴍ`
		await this.updateProfileStatus(bio).catch(_ => _)
		setting.status = new Date() * 1

}
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' 📅DAYS ', h, ' 🕗HOUR  ', m, ' ⏳MINUTE '].map(v => v.toString().padStart(2, 0)).join('')
}
