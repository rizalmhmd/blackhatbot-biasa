let handler = function (m) {
  // this.sendContact(m.chat, '6281515474080', 'Nekel', m)
  conn.sendContact(m.chat, '6281515474080', 'Onwer', m)
  m.reply('wa.me/6281515474080')
}

handler.command = /^pj1$/i

module.exports = handler
