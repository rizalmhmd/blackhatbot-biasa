let handler  = async (m, { conn, usedPrefix: _p }) => {

let info = `
Jasa Pembuataan Robot WA 

Untuk Infomasi Selengkanya Hubungin Ownwerku..

PEMBAYARAN PULSA AND DANA
Indosat - 6281515474080
DANA - 62895369318181
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*ketik .penjual jika anda berminat*', 'status@broadcast')
}
handler.help = ['groupbot']
handler.tags = ['hooh']
handler.command = /^(jjn)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
