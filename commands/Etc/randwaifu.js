          module.exports = {
    name: 'retard',
    aliases: ['retard'],
    category: 'Etc',
    utilisation: '{prefix} retard @user',

execute(client, message, args) {
   min = 0;
          max = 100;
          const a = Math.random() * (max - min) + min;
          const waifu = args[0];
          if (waifu === ('Noire'))
            {
            return message.channel.send("I'll rate " + "Noire" + ' as ' + '100/100' )

            }
          if (typeof(waifu) === ('undefined'))
            {
            return message.channel.send("Specify your waifu, retard" )

            }
         else   if (waifu === ('nyamota') ||waifu === ('нямота') ||waifu === ('Nyamota') || waifu === ('Нямота')   )
            {
            return message.channel.send("I'll rate " + "Nyamota" + ' as ' + '-1/100' )

            }
          else {
          return message.channel.send("I'll rate " + waifu + ' as ' + Math.round(a) + '/100' )
          }
},
    };