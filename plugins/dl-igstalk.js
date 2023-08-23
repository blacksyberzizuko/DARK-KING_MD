
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `🔖 Enter Instagram Username\n\n📌 Example: ${usedPrefix + command} fg98_ff` 
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──❍「 *STALKING* 
┣❍ *🔖Name:* ${res.name} 
┣❍ *🔖Username:* ${res.username}
┣❍ *👥Followers:* ${res.followersH}
┣❍ *🫂Following:* ${res.followingH}
┣❍ *📌Bio:* ${res.description}
┣❍ *🏝️Posts:* ${res.postsH}
┣❍ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────❍`
     await conn.sendFile(m.chat, res.profilePic, 'igstalk.png', te, m)
      } catch {
        m.reply(`✳️ Check that the username is *Instagram*`)
      }
}
handler.help = ['igstalk']
handler.tags = ['dl']
handler.command = ['igstalk'] 

export default handler
