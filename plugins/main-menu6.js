import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `°•°___✘『 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗-𝗠𝗘𝗡𝗨 』✘___°•°
╭━━━━━━━━━━━━━━━━━━━━━━⦁
┃🎨 *CYBER_BOT_DEMONS_TEAM* 🎨
╰━━━━━━━━━━━━━━━━━━━━━━⦁
🤹‍♂️𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.facebook*
🎈𝗗.𝗖.𝗧 ➠ *ෆෙස් බුක් විඩියෝ ලබා ගැනීමට ...* 
🔥𝗨𝗦𝗘 ➠ *.facebook *<url>*

🤹‍♂️𝗖𝗢𝗠𝗠𝗔𝗡𝗗  ➠ *.gdrive*
🎈𝗗.𝗖.𝗧 ➠ *ගුගල් ඩ්‍රයිව් ගොනු බාගත කරගැනීම සදහා...*
🔥𝗨𝗦𝗘 ➠ .gdrive

🤹‍♂️𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.gitclone*
🎈𝗗.𝗖.𝗧 ➠ *ගීයිට්හබ්   ගොනු බාගත කරගැනීම සදහා...*
🔥𝗨𝗦𝗘 ➠ .gitclone *<url>*

🤹‍♂️𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.igstalk*
🎈𝗗.𝗖.𝗧 ➠ *ගුගල් සහය ලබා ගැනීමට සදහා ...*
🔥𝗨𝗦𝗘 ➠.igstalk

🤹‍♂️𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.igstory*
🎈𝗗.𝗖.𝗧 ➠ *ගීත පද රචනා ලබා දිම සදහා ...*
🔥𝗨𝗦𝗘 ➠.igstory

🤹‍♂️𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.instagram*
🎈𝗗.𝗖.𝗧 ➠ *ඉන්ස්ටග්රෑම් විඩියෝ ලබා ගැනීමට...*
🔥𝗨𝗦𝗘 ➠ .instagram *<link ig>*

🤹‍♂️𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.mediafire*
🎈𝗗.𝗖.𝗧 ➠ *ගොනු බගාත කිරීම සදහා...*
🔥𝗨𝗦𝗘 ➠ .mediafire *<url>*

🤹‍♂️𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.tiktok* 
🎈𝗗.𝗖.𝗧 ➠ *ටික්ටොක් විඩියෝ බගාත කිරීම සදහා...*
🔥𝗨𝗦𝗘 ➠ .tiktok

🤹‍♂️𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.tiktokstalk*
🎈𝗗.𝗖.𝗧 ➠ *තිර පිටපත ලබා ගැනීම සඳහා ...*
🔥𝗨𝗦𝗘 ➠ .tiktokstalk

🤹‍♂️𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.twitter*
🎈𝗗.𝗖.𝗧 ➠ * ට්විටර් ගොනු හා විඩියෝ බගාත කිරීම සඳහා ...*
🔥𝗨𝗦𝗘 ➠ .twitter *<url>*

🤹‍♂️𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.ytmp3*
🎈𝗗.𝗖.𝗧 ➠ *යුටියුබ් "mp3" බගාත කිරීම් සදහා ...*
🔥𝗨𝗦𝗘 ➠ .ytmp3 *<url>*

🤹‍♂️𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.ytsearch*
🎈𝗗.𝗖.𝗧 ➠ * යුටියුබ් සෙවීම්  සඳහා ...*
🔥𝗨𝗦𝗘 ➠ .ytsearch*

🤹‍♂️𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.ytmp4*
🎈𝗗.𝗖.𝗧 ➠ *යුටියුබ් "mp4" බගාත කිරීම් සදහා ...*
🔥𝗨𝗦𝗘 ➠ .ytmp4 *<link yt>*`

    let pp = './src/sakura_dlmenu.jpg' 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
    m.react('📩') 
}

handler.help = ['downloadmenu']
handler.tags = ['main']
handler.command = ['downloadmenu', 'dlmenu'] 

export default handler
