import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
°•°___✘『 𝗚𝗥𝗢𝗨𝗣-𝗠𝗘𝗡𝗨 』✘___°•°
╭━━━━━━━━━━━━━━━━━━━━━━⦁
┃🐍 *CYBER_BOT_DEMONS_TEAM* 🐍
╰━━━━━━━━━━━━━━━━━━━━━━⦁
💭𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.add*
⚜️𝗗.𝗖.𝗧 ➠ *සමූහයට පුද්ගලයන් එකතුකරගැනීම සදහා...* 
🐍𝗨𝗦𝗘 ➠ .add *<number>*

💭𝗖𝗢𝗠𝗠𝗔𝗡𝗗  ➠ *.delete*
⚜️𝗗.𝗖.𝗧 ➠ *දැමූ මැසේජයක් මකාදැමීම සදහා...*
🐍𝗨𝗦𝗘 ➠ .delete *<tag massage>*

💭𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.infogp*
⚜️𝗗.𝗖.𝗧 ➠ *සමූහයේ තොරතුරු ලබාගැනීම සදහා...*
🐍𝗨𝗦𝗘 ➠ .infogp

💭𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.hidetag*
⚜️𝗗.𝗖.𝗧 ➠ *සමූහයේ පුද්ගලයන් hide method ලෙස ටැග් කිරීමට...*
🐍𝗨𝗦𝗘 ➠.hidetag *<massage>*

💭𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ .invite
⚜️𝗗.𝗖.𝗧 ➠ *සමූහයට සම්බන්දවන ලෙස ආරාදනා කිරීමට...*
🐍𝗨𝗦𝗘 ➠.invite <94xxxx>

💭𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.kick*
⚜️𝗗.𝗖.𝗧 ➠ *පුද්ගලයකු සමූහයෙන් නෙරපා හැරීම සදහා...*
🐍𝗨𝗦𝗘 ➠ .kick <tag user>

💭𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.link*
⚜️𝗗.𝗖.𝗧 ➠ *සමූහ සබැදිය ලබාගැනීම සදහා...*
🐍𝗨𝗦𝗘 ➠ .link

💭𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.group* 
⚜️𝗗.𝗖.𝗧 ➠ *සමූහය විවෘත්ත කිරීම සදහා...*
🐍𝗨𝗦𝗘 ➠ .group <open/close>

💭𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.tagall*
⚜️𝗗.𝗖.𝗧 ➠ *සමූහයේ පුද්ගලයන් සියල්ල ටැග් කිරීමට...*
🐍𝗨𝗦𝗘 ➠ .tagall *<massage>*
`

    let pp = './src/fg_logo.jpg' 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
    m.react('🪀')
}

handler.help = ['groupmenu']
handler.tags = ['main']
handler.command = ['groupmenu', 'gpmenu'] 

export default handler
