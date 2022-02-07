const { MessageType } = require("@adiwajshing/baileys")
let handler = async (m, { conn, usedPrefix }) => {
let prem = `Pilih bang…`.trim()

await conn.send2Button(m.chat, prem.trim(), '© LulzGhost-Team×BOT', 'Jasa Sewa Bot', '.zul1', 'Owner', '.owner', { sendEphemeral: true, quoted: m })}


handler.help = ['groupbot']
handler.tags = ['penjual']
handler.command = /^(penjual)$/i

module.exports = handler
