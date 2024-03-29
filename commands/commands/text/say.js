const Discord = require('discord.js')
const config = require("../../../config/config.json")
const id = config.commandID

module.exports = {
  commands: 'say' ,
  description: 'Say anything as the bot',
  callback: async (message, arguments, text) => {
  if(message.member.permissions.has(Discord.PermissionsBitField.Flags.ManageMessages) || message.author.id === id.find((id) => id === message.author.id)) {
    message.delete()
    if(arguments.length == 0) return 
    if(!isNaN(arguments[0])) {
    let fetchedMessage = await message.channel.messages.fetch(arguments[0]).catch(error => {
     
    })
    if(fetchedMessage) {
      let originalText = text.split(' ')
      originalText.shift()
      let cleanedText = originalText.join(' ')
      fetchedMessage.reply(cleanedText)
      return
    }
  }
    message.channel.send(text)
  } else {
    let embed = new Discord.EmbedBuilder()
    .setColor(0x2F3136)
    .setTitle("No")
    .setDescription(`Don't tell me what to do`)
    message.channel.send({ embeds: [embed]})
  }
  },
}
