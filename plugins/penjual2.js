let handler = function (m) {
  // this.sendContact(m.chat, '6281515474080', 'OwnerKu', m)
  conn.sendContact(m.chat, '6281515474080', 'Ownwer', m)
  m.reply('wa.me/6281515474080')
}

handler.command = /^pj2$/i

module.exports = handler
