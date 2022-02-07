let handler  = async (m, { conn, usedPrefix: _p }) => {
let prem = `
5k / 3 Hari
20K / 1 Bulan
50k / Permanen`.trim()

conn.sendButton(m.chat, prem.trim(), '© B O T Z', 'Gas Chat Owner', '.owner', { sendEphemeral: true, quoted: m })}

handler.command = /^(piro)$/i

module.exports = handler
