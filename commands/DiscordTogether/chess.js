const Discord = require('discord.js');
const { DiscordTogether } = require('discord-together');

module.exports = {
     name: 'chess',
    aliases: ['previous'],
    utilisation: '{prefix} chess',

  async execute(client, message, args) {
  
      client.discordTogether.createTogetherCode(message.member.voice.channelID, 'chess').then(async invite => {
        const embed = new Discord.MessageEmbed()
          .setTitle('Chess in the Park')
          .setColor(require('../../messages.json').embed_color)
          .setFooter(require('../../messages.json').embed_footer.replace('(NAME)', message.author.username), message.author.avatarURL())
          .setTimestamp()
          .setDescription(`**[${require('../../messages.json').activity_clickhere}](${invite.code})**`)
        return message.channel.send(embed);
      });
    },
};
