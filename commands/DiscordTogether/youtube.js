const Discord = require('discord.js');

const { DiscordTogether } = require('discord-together');

module.exports = {
    name: 'youtube',
    aliases: ['previous'],
    utilisation: '{prefix}youtube',
    voiceChannel: true,

    execute(client, message, args) {
          if(message.member.voice.channel) {
           client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
    return message.channel.send(`${invite.code}`);
})
            }    
    
},
};
