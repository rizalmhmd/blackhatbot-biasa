let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*︵LIST HARGA SEWA BOT*

┏━❒ *DISKON 50%*
┗❒ *KHUSUS HARI JUMAT*

❒ *PAY :*

❒ *VIA GOPAY/DANA :*
  ╭─
  │ 10k SEMINGGU
  │50K SEBULAN
  ╰───► 100K PERMANEN

❒ *VIA PULSA :*
  ╭─
  │ 10K SEMINGGU
  │ 50K SEBULAN
  ╰────► 100K PERMANEN


*NOTE : UNTUK SEWA PERMANEN ANDA DAPAT MEMASUKKAN BOT KE SEMUA GRUP YANG ANDA INGINKAN DAN ANDA DAPAT MENJADI USER PREMIUM*

*FITUR :* 
WELCOME IMAGE, ANTILINK, HIDETAG, ANTILINK YT, ANTILINK TIKTOK, VITUR GAME : CONTOH ADVENTURE, FAMILY100, JUDI, MANCING, MULUNG, BERBURU DLL..

*Reff 50% Berlaku 1 Minggu (HANYA UNTUK SEWA PERMANEN DAN PAYMENT DANA !!!)*



MAU TES BOT? BOLEH, FREE TES BOT SELAMA 1 JAM DI GRUP...

Minat? Chat
Grup : https://chat.whatsapp.com/
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Ga minat gausah chat! ketik .penjual jika berminat*', 'status@broadcast')
}
handler.help = ['groupbot']
handler.tags = ['hooh']
handler.command = /^(jsb)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
