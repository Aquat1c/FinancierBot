const { Player } = require('discord-player');
const { Client, Intents } = require('discord.js');
const { DiscordTogether } = require('discord-together');
const keepAlive = require("./server")

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');
keepAlive();
client.on('message', message =>{

    if(message.author.bot ) return;
    if(message.content.includes('эрффт') && message.content.includes('помойка') || ('Эрффт') && message.content.includes('помойка') || ('эрффт') && message.content.includes('Помойка') ||   message.content.includes('эрффте')) {
 if( message.author.username === 'Aquatic'){
  message.channel.send("А вот щас не поняла. Че за гон, " + "Акватик" + '? Тебе кто-то че-то плохое делал? Если тебя кто-то с сервера доебывает - не надо на сервер гнать, некрасиво получается');
                       }
  else  if( message.author.username === 'lazerock'){
  message.channel.send("Иронично слышать это от лазерка");
  }
  else{
message.channel.send("А вот щас не поняла. Че за гон, " + `${message.author.username}` + '? Тебе кто-то че-то плохое делал? Если тебя кто-то с сервера доебывает - не надо на сервер гнать, некрасиво получается');
                       }
console.log(message.author);
}

   if((message.content.includes('фаззи'))||(message.content.includes('Фаззи'))|| (message.content.includes('Fuzzy'))||(message.content.includes('фази'))) {
                                                                                                                
    message.channel.send("По сути это особый инпут");                                                                           
    message.channel.send("34743");                     
    message.channel.send("Блок краучем --> стоя --> в прыжке --> приземлиться блоча --> блок в крауче обратно");                                                                           
    }
  
    if((message.content.includes('мадока'))||(message.content.includes('Мадока'))|| (message.content.includes('Канаме'))||(message.content.includes('канаме'))||(message.content.includes('Madoka'))) {
                                                                                                                
      message.channel.send("МАДОКА - САМЫЙ ЛУЧШИЙ ПЕРСОНАЖ ИЗ ВСЕГО АНИМЕ, ПРЕВОСХОДИТ ВСЕХ ГЕРОЕВ ИЗ ВИЗУАЛЬНЫХ НОВЕЛЛ");                                                                                                                                                   
      }
      if((message.content.includes('рб3'))||(message.content.includes('ребёрс3'))|| (message.content.includes('ребёрс 3'))||(message.content.includes('rb3'))||(message.content.includes('ребёрц3'))) {
                                                                                                                
        message.channel.send("Да иди нахуй со своим рб3");                                                                                                                                                   
        }
        if((message.content.includes('Казуал'))||(message.content.includes('Казуалити'))|| (message.content.includes('казуал'))||(message.content.includes('казуалити'))||(message.content.includes('casual'))) {
                                                                                                                
          message.channel.send("Да ты дальше играй в эту парашу обоссаную без механик, ты просто игр лучше не видел, тебе назвали адекватные причины почему игра не очень по сравнению с другими играми, Ты называешь меня казуалом потому что, я не хочу умирать от фуллскрин коробок, когда нельзя заблочить физу в воздухе, с такой логикой играй в сфчик я ебу, твой ник походу реально тебе соответсвует, амёба ебаная, ливни из жизни нахуй днище, зашел 1ый день в унист нихуя не знаю, и я даже наматывал тебя, мне кажется ты не имеешь права называть меня казуалом если ты вьёбываешь игры чуваку который зашел в игру первый раз. Особенно забавно это слышать от чела который реально не играл в другие файтинги адекватно          ");                                                                                                                                                   
          }
});
client.login(client.config.app.token);
