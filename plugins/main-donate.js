
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
┏⚋⚋⚋⚋❬ *DONACION* ❭⚋⚋⚋❍
┗⚋⚋⚋⚋⚋⚋⚋⚋❍
🎀 *YOU CAN SUPPORT US* 

⚡ *OUR-GROUP*
 🔖https://chat.whatsapp.com/FYPYqeucaxr4qwME8G6Tot

┏⚋⚋⚋❬ *QUEEN-SAKURA-MD* ❭⚋⚋❍
❍ CREATOR = *DARK-LEGEND-HYPER*
❍⚋⚋⚋⚋⚋❬ *THANK YOU* ❭⚋⚋⚋⚋❍
🔖 *THANKS TO USE IN SAKURA-MD*
`
let img = 'https://i.ibb.co/37FP2bk/donate.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
