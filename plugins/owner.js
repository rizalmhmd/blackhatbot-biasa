let handler = function (m) {
  // this.sendContact(m.chat, '6285795431803', 'Andy', m)
  conn.sendContact(m.chat, '6283805279906', 'Mael', m)
  m.reply('wa.me/6283805279906')
}

handler.command = /^qw$/i

module.exports = handler
