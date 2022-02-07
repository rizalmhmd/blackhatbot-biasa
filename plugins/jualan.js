let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants, args }) => {
     const rows = [
        {title: 'jasa Desain Logo', description: "Order Kak", rowId:".jsv"},
        {title: 'jasa Pembuataan BOT', description: "Order Kak", rowId:".jjn"},
        
    ]
    
    const sections = [{title: "Silahkan dipilih", rows: rows}]
    const button = {
        buttonText: 'Order Kak',
        description: "Silakan Di Pilih ⬇",
        sections: sections,
        listType: 1
    }
    
    await conn.sendMessage(m.chat, button, MessageType.listMessage)
} 
handler.help = ['toko'] 
handler.tags = ['toko']
handler.command = /^toko|tkk$/i
handler.owner = false
handler.mods = false
handler.premium = false

handler.private = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
