
import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");
          let pp = './src/sakura_dlmenu.jpg' 
          conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
          m.react('🚀')
          m.reply(`${ssd}👸 *PING_BY-SAKURA* : ${latensi.toFixed(4)} _ms_`);
            });
}
handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed']

export default handler
