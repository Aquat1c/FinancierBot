const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'choose',
    aliases: ['choose'],
    category: 'Etc',
    utilisation: '{prefix} choose args',

execute(client, message, args) {


  let choices = args.join(" ");
  const textarr = choices.split(',') || choices.split(', ');
var rand1 = Math.floor(Math.random() * textarr.length);
var answer = (textarr[rand1] + '\n')

const Embed = new MessageEmbed()
    .setTitle('I choose ' + answer.replace(/^\s+|\s+$/g, ""))
 .setDescription('Choosing from ' + textarr.join())
 .setColor('GREEN');

message.channel.send({ embeds: [Embed] });

},
    };