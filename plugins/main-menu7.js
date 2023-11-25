import fetch from 'node-fetch'

let handler = async function (m, { conn, text }) {
  
let m2 = `*⫹⫺  QUEEN-SAKURA_MD  ⫹⫺*

⊹⩶⩶⩶⩶⩶⩶⩶⩶⩶⩶⩶⩶⊹
 *_🧚‍♀️QUEEN-SAKURA_MD COMANDS🧚‍♀️_*
⊹⩶⩶⩶⩶⩶⩶⩶⩶⩶⩶⩶⩶⊹
▢ .OWNERMENU
▢ .DOWNLOADMENU
▢ .SEARCHMENU
▢ .TOOLMENU
▢ .OTHERMENU
▢ .BOTMENU
⫹⫺⩶⩶⩶⩶⩶⩶⩶⩶⩶⩶⊶
*THE MULTIDEVICE_WHATSAPP_BOT V01*
⫹⫺⩶⩶⩶⩶⩶⩶⩶⩶⩶⩶⊶ `

    let pp = './src/sakura_menu.jpg' 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
    m.react('👋') 
}
    m.react('♻')
}
    m.react('👋')
}
    m.react('📜')
}
    m.react('😁')
}
    m.react('🧚‍♂️')  
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'sakura'] 

export default handler
