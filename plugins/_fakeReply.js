
import fetch from 'node-fetch'
export async function before(m,{conn }) {
	
	let who = m.sender ? m.sender : conn.user.jid && conn.user.jid ? conn.user.jid : '0@s.whatsapp.net'
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/f9b22ed02614a3ec50d9b.jpg')
	
	//reply link wa
   global.rpl = { contextInfo: { externalAdReply: { mediaUrl: dygp, mediaType: 'VIDEO', description: '☆: .｡. oQUEEN-SAKURA_MD_V2o .｡.:☆', title: packname, body: '☆: .｡. oQUEEN-SAKURA_MD_V2o .｡.:☆', thumbnailUrl: pp, sourceUrl: dygp }}} 
	
	//reply link PayPal
    global.rpyp = { contextInfo: { externalAdReply: { mediaUrl: fgpyp, mediaType: 'VIDEO', description: '☆: .｡. oQUEEN-SAKURA_MD_V2o .｡.:☆', title: '☆: .｡. oQUEEN-SAKURA_MD_V2o .｡.:☆', body: '☆: .｡. oQUEEN-SAKURA_MD_V2o .｡.:☆', thumbnailUrl: pp, sourceUrl: fgpyp }}}
    
    //reply Instagram 
    global.rpig = { contextInfo: { externalAdReply: { mediaUrl: fgig, mediaType: 'VIDEO', description: '☆: .｡. oQUEEN-SAKURA_MD_V2o .｡.:☆', title: '☆: .｡. oQUEEN-SAKURA_MD_V2o .｡.:☆', body: 'sigueme por Instagram', thumbnailUrl: pp, sourceUrl: fgig }}} 
	
	//reply link yt
    global.rpyt = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: fgyt, mediaType: 'VIDEO', description: '☆: .｡. oQUEEN-SAKURA_MD_V2o .｡.:☆ : ' + fgyt, title: '☆: .｡. oQUEEN-SAKURA_MD_V2o .｡.:☆', body: 'aprende a crear tus propios bots', thumbnailUrl: pp, sourceUrl: fgyt }}}

}
