       const { MessageEmbed } = require('discord.js');

          module.exports = {
    name: 'ratewaifu',
    aliases: ['ratewaifu'],
    category: 'Etc',
    utilisation: '{prefix} ratewaifu @user',

execute(client, message, args) {
   min = 0;
          max = 100;
          const a = Math.random() * (max - min) + min;
          const waifu = args.join(' ');
          if (waifu === ('Noire'))
            {
            var answer = ("I'll rate " + "Noire" + ' as ' + '100/100' )

            }
          if (typeof(waifu) === ('undefined'))
            {
            var answer = ("Specify your waifu, retard" )

            }
         else   if (waifu === ('nyamota') ||waifu === ('нямота') ||waifu === ('Nyamota') || waifu === ('Нямота')   )
            {
            var answer = ("I'll rate " + "Nyamota" + ' as ' + '-1/100' )

            }
          else {
          var answer = ("I'll rate " + waifu + ' as ' + Math.round(a) + '/100' )
          }
          const Embed = new MessageEmbed()
  .setTitle(' '+answer)
 .setDescription('Waifu rater')
 .setColor('RED');

message.channel.send({ embeds: [Embed] });
},
    };