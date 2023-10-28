
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `🌀Please Enter the Instagram Username\n\n📌 Example: ${usedPrefix + command} <user name>` 
    try {
    let res = await fg.igStalk(args[0])
    let te = `
  ✘ 『 𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠-𝗖𝗛𝗘𝗖𝗞 』 ✘
  
⦁ *🔖Name:* ${res.name} 
⦁ *🔖Username:* ${res.username}
⦁ *👥Followers:* ${res.followersH}
⦁ *🫂Following:* ${res.followingH}
⦁ *📌Bio:* ${res.description}
⦁ *🏝️Posts:* ${res.postsH}
⦁ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
🧚‍♂️𝗤𝗨𝗘𝗘𝗡-𝗦𝗔𝗞𝗨𝗥𝗔-𝗠𝗗🧚‍♂️`
     await conn.sendFile(m.chat, res.profilePic, 'igstalk.png', te, m)
      } catch {
        m.reply(`🌀please Enter the *Instagram* user name`)
      }
}
handler.help = ['igstalk']
handler.tags = ['dl']
handler.command = ['igstalk'] 

export default handler
