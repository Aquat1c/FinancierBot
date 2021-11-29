const keepAlive = require("./server")

const { Client, MessageAttachment } = require('discord.js');
const discord = require('discord.js');

const client = new discord.Client({
	intents: [
		'GUILDS',
		'GUILD_VOICE_STATES',
		'GUILD_MESSAGES',
	],
})
const DisTube = require('distube')

const { SpotifyPlugin } = require("@distube/spotify")
const { SoundCloudPlugin } = require("@distube/soundcloud")
 client.distube = new DisTube.default(client, {
	searchSongs: 1,
	searchCooldown: 30,
	leaveOnEmpty: true,
	emptyCooldown: 0,
	leaveOnFinish: false,
	leaveOnStop: false,
	plugins: [new SoundCloudPlugin(), new SpotifyPlugin()],
})
const ytdl = require("ytdl-core");
const Booru = require('booru')
const { exec } = require("child_process");
const fs = require('fs');
const bar = require(`stylish-text`)


const { Player } = require('discord-player');

client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();


keepAlive()

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

 for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

//const prefix = '.r '
const { MessageMentions: { USERS_PATTERN } } = require('discord.js');

function getUserFromMention(mention) {
	// The id is the first and only match found by the RegEx.
	const matches = mention.match(USERS_PATTERN);

	// If supplied variable was not a mention, matches will be null instead of an array.
	if (!matches) return;

	// The first element in the matches array will be the entire mention, not just the ID,
	// so use index 1.
	const id = matches[1];

	return client.users.cache.get(id);
}



	client.distube.on('error', (channel, error) => {
		console.error(error)
		channel.send(`An error encoutered: ${error.slice(0, 1979)}`) // discord limits 2000 characters in a message
	})




client.once("reconnecting", () => {
  console.log("Reconnecting!");
});

client.once("disconnect", () => {
  console.log("Disconnect!");
});




client.on('message', message =>{
            const queue = client.distube.getQueue(message);

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
  
   if((message.content.includes('ггс'))||(message.content.includes('ggs'))|| (message.content.includes('гг'))||(message.content.includes('фази'))) {
                                                                                                                
    message.channel.send("don’t care " + "didn’t ask " + "cry about it " + "stay mad " + "get real " + "L" + "h0es mad " + "basic " + "skill issue " + "ratio " + "you fell off " + "the audacity "   + "triggered " + "any askers " + "redpilled " + "get a life " + "ok and? " + "cringe " + "touch grass " + "downloaded " + "not based " + "your’re probably white " + "not funny didn’t laugh " + "you’re* " + "grammar issue " + "go outside " + "get good " + "reported " + "GG! ");                                                                           
                                                                              
    }

    if((message.content.includes('мадока'))||(message.content.includes('Мадока'))|| (message.content.includes('Канаме'))||(message.content.includes('канаме'))||(message.content.includes('Madoka'))) {
                                                                                                                
      message.channel.send("МАДОКА - САМЫЙ ЛУЧШИЙ ПЕРСОНАЖ ИЗ ВСЕГО АНИМЕ, ПРЕВОСХОДИТ ВСЕХ ГЕРОЕВ ИЗ ВИЗУАЛЬНЫХ НОВЕЛЛ");                                                                                                                                                   
      }
      if((message.content.includes('рб3'))||(message.content.includes('ребёрс3'))|| (message.content.includes('ребёрс 3'))||(message.content.includes('rb3'))||(message.content.includes('ребёрц3'))) {
                                                                                                                
        message.channel.send("Да иди нахуй со своим рб3");                                                                                                                                                   
        }
        if((message.content.includes('Казуал'))||(message.content.includes('Казуалити'))|| (message.content.includes('казуал'))||(message.content.includes('казуалити'))||(message.content.includes('casual'))) {
                                                                                                                
          message.channel.send("Да ты дальше играй в эту парашу обоссаную без механик, ты просто игр лучше не видел, тебе назвали адекватные причины почему игра не очень по сравнению с другими играми, Ты называешь меня казуалом потому что, я не хочу умирать от фуллскрин коробок, когда нельзя заблочить физу в воздухе, с такой логикой играй в сфчик я ебу, твой ник походу реально тебе соответсвует, амёба ебаная, ливни из жизни нахуй днище, зашел 1ый день в унист нихуя не знаю, и я даже наматывал тебя, мне кажется ты не имеешь права называть меня казуалом если ты вьёбываешь игры чуваку который зашел в игру первый раз. Особенно забавно это слышать от чела который реально не играл в другие файтинги адекватно          ");                                                                                                                                                   
          }});
client.login(client.config.discord.token);
