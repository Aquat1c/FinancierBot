const Discord = require('discord.js');
const { Client, MessageAttachment } = require('discord.js');
//const request = require('request');
//const youtube_node = require('youtube-node');
//const config  = require('.  /config.json');
//const client = new Discord.Client();
//const Danbooru = require('danbooru')
//new Discord.User(client, data);
//const command = require('play');
const ytdl = require("ytdl-core");
//onst Danbooru = require('danbooru')
const Booru = require('booru')
//const embed = new Discord.RichEmbed()
const DisTube = require('distube')
//const { prefix, token } = require('./config.json')
const { SpotifyPlugin } = require("@distube/spotify")
const { SoundCloudPlugin } = require("@distube/soundcloud")
// You can use 'exec' this way
const { exec } = require("child_process");

const client = new Discord.Client({
	intents: [
		'GUILDS',
		'GUILD_VOICE_STATES',
		'GUILD_MESSAGES',
	],
})
 client.distube = new DisTube.default(client, {
	searchSongs: 1,
	searchCooldown: 30,
	leaveOnEmpty: true,
	emptyCooldown: 0,
	leaveOnFinish: false,
	leaveOnStop: false,
	plugins: [new SoundCloudPlugin(), new SpotifyPlugin()],
})


client.login('ODU2MjU2OTMxNTU5NjM2OTkz.YM-ZaA.jq94bmarw8osFM0FDwvg0CdsWYo')
const prefix = '.r '
const mess = 'сока'
function getUserFromMention(mention) {
  // The id is the first and only match found by the RegEx.
  const matches = mention.match(/^<@!?(\d+)>$/);

  // If supplied variable was not a mention, matches will be null instead of an array.
  if (!matches) return;

  // However, the first element in the matches array will be the entire mention, not just the ID,
  // so use index 1.
  const id = matches[1];

  return client.users.cache.get(id);
}
client.once('ready', () => {
	console.log('Logged in!');
  exec("rm -r .cache", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});


	client.distube.on('error', (channel, error) => {
		console.error(error)
		channel.send(`An error encoutered: ${error.slice(0, 1979)}`) // Discord limits 2000 characters in a message
	})
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
          }

    /*if (message.content.includes("retard")) {
        let user = message.mentions.users.first();
        message.channel.send("LOOK OVER HERE " + user);
        */
       /* try {
          command.execute(message, args, command, client, Discord);
        
        } catch (err){
          message.reply("Error")
          console.log(err);
        }*/
       if (message.content.startsWith('.r ')) {
        const args = message.content.slice(prefix.length).split(/ +/); 
        const command = args.shift().toLowerCase();
    
        if (command === 'play') {
         
            client.distube.play(message, args.join(' '))
            console.log(message);
          
        
        }
         
        if (['repeat', 'loop'].includes(command)) {
          const mode = client.distube.setRepeatMode(message)
          message.channel.send(`Set repeat mode to \`${mode ? mode === 2 ? 'All Queue' : 'This Song' : 'Off'}\``)
        }
          if (command == "jump"){
       client.distube.jump(message, parseInt(args[0]))
            .catch(err => message.channel.send("Invalid song number."));
        message.channel.send(`Jumped to the ${args[0]}th song`)
    }

        if (command === 'stop') {
          client.distube.stop(message)
          message.channel.send('Stopped the music!')
        }
      
        if (command === 'resume') client.distube.resume(message)
      
        if (command === 'pause') client.distube.pause(message)
      
        if (command == "skip"||command == "next"){
       
        const queue = client.distube.getQueue(message)
               if (!queue) return message.channel.send(` There is nothing in the queue right now!`)


          else if(!queue.songs[1]) {client.distube.stop(message)}

          else {
                        client.distube.skip(message)
            message.channel.send(`$| Skipped! Now playing:\n${queue.songs[1].name}`);

          }
        }

         if (command == "shuffle"){
       client.distube.shuffle(message);
        }
    if (command == "volume"){
      console.log(args[0]);
      const a = parseInt(args[0])
        client.distube.setVolume(message, a);
        message.channel.send(`Volume set to ${a}%`)
    }
if (command === 'remove'){
        
        try {
            const queue = client.distube.getQueue(message);
            queue.songs.splice(Number(args[0]))
            return message.channel.send(` Removed **${args[0]}** From Queue`);
        }

        catch (e) {
            console.log(e)
            return message.channel.send(` There Is No Music Currently Playing`)
        }
    }

        if (command === 'queue') {
          if (!queue) {
            message.channel.send('Nothing playing right now!')
          } else {
            message.channel.send(
              `Current queue:\n${queue.songs
                .map(
                  (song, id) =>
                    `**${id ? id : 'Playing'}**. ${song.name} - \`${
                      song.formattedDuration
                    }\``,
                )
                .slice(0, 10)
                .join('\n')}`,
            )
          }
        }
      
        if (
          [
            `3d`,
            `bassboost`,
            `echo`,
            `karaoke`,
            `nightcore`,
            `vaporwave`,
          ].includes(command)
        ) {
          const filter = client.distube.setFilter(message, command)
          message.channel.send(
            `Current queue filter: ${filter.join(', ') || 'Off'}`,
          )
        }  
      
      
      
   else  if(command === 'retard'){
      if (!args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);}
        else {
      const user = getUserFromMention(args[0]);
            
        console.log('lazer');
        const nep = client.emojis.cache.find(emoji => emoji.name === "nepYOU");
        client.channels.cache.get('id');
        message.channel.send( ( `${nep} ${nep} ${nep} ${nep} ${nep} ${nep}`));  
        message.channel.send( ( `${user}`));  
        }

    //   id = client.user.id;
        
    }
    
          /* ( === 'my_pfp') {
          
          if (args[0]) {
            const user = getUserFromMention(args[0]);
            if (!user) {
              return message.reply('Please use a proper mention if you want to see someone elses avatar.');
            }
      
            return message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
          }
      
          return message.channel.send(`${message.author.username}, your*/
 
   
    //   id = client.user.id;
        
    
    
          /* ( === 'my_pfp') {
          
          if (args[0]) {
            const user = getUserFromMention(args[0]);
            if (!user) {
              return message.reply('Please use a proper mention if you want to see someone elses avatar.');
            }
      
            return message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
          }
      
          return message.channel.send(`${message.author.username}, your*/
  else if(command === 'randnoire'){
    //const booru = new Booru()
    Booru.search('gelbooru', ['noire ' + ' -bondage' + "-spanking"   ], { limit: 1, random: true })
    .then(posts => {
      for (let post of posts)
      //  console.log(post.fileUrl, post.postView)
        if (post.tags.includes('touhou')){
        message.channel.send(post.fileUrl);
        message.channel.send('СуКа ОпЯтЬ ТоХо в ЧаТе')
        console.log(post.tags);
        console.log(post.rating);
      }
      else if (post.tags.includes('nyamota')){
        //message.channel.send(post.fileUrl);
        message.channel.send('https://cdn.discordapp.com/attachments/791804196709335081/885795767539880001/unknown.png')
        console.log(post.tags);
        console.log(post.rating);
      }
      
    else if (post.rating.includes('q') ||post.rating.includes('e') ){
message.channel.send({
        files: [{
           attachment: post.fileUrl,
           name: "SPOILER_FILE.jpg"
        }]
     })        //message.channel.send('СуКа ОпЯтЬ ТоХо в ЧаТе') 
        console.log(post.tags);
        console.log(post.rating);
  
      }
       
      else if (post.tags.includes('guro')){
        //message.channel.send(post.fileUrl);
        message.channel.send('https://www.meme-arsenal.com/memes/5b4dbfda16fc4cce35b280a80a1f6c89.jpg  ')
        console.log(post.tags);
        console.log(post.rating);
      }
      else {
        message.channel.send(post.fileUrl);
        console.log(post.tags);
        if (post.tags.includes['touhou']){
          console.log('touhou');
          console.log(post.rating);
  
        }
      }

    })
      
}
else if(command === 'search'){
  //const booru = new Booru()
  

  let arg1 = args[0];
  let arg2 = args[1];
  let arg3 = args[2]

  console.log('arg1= ' + arg1 + ' arg2 = ' + arg2 + 'arg3= ' + arg3);

  //let arg3 = args[2];
  if (typeof(arg1) === "undefined" && typeof(arg2) === "undefined" && typeof(arg3) === "undefined"){

  Booru.search('gelbooru', ['rating:safe ' + ' -bondage'   ], { limit: 1, random: true })
  
  .then(posts => {
    for (let post of posts){
      if (post.tags.includes('touhou')){
        message.channel.send(post.fileUrl);
        message.channel.send('СуКа ОпЯтЬ ТоХо в ЧаТе')
        console.log(post.tags);
        console.log(post.rating);
      }
       else if (post.tags.includes('nyamota')){
        //message.channel.send(post.fileUrl);
        message.channel.send('https://cdn.discordapp.com/attachments/791804196709335081/885795767539880001/unknown.png')
        console.log(post.tags);
        console.log(post.rating);
      }
      else if (post.tags.includes('guro')){
        //message.channel.send(post.fileUrl);
        message.channel.send('https://www.meme-arsenal.com/memes/5b4dbfda16fc4cce35b280a80a1f6c89.jpg  ')
        console.log(post.tags);
        console.log(post.rating);
      }
    else if (post.rating.includes('q') ||post.rating.includes('e') ){
message.channel.send({
        files: [{
           attachment: post.fileUrl,
           name: "SPOILER_FILE.jpg"
        }]
     })        //message.channel.send('СуКа ОпЯтЬ ТоХо в ЧаТе') 
        console.log(post.tags);
        console.log(post.rating);
  
      }
      
      else {
        message.channel.send(post.fileUrl);
        console.log(post.tags);
        if (post.tags.includes['touhou']){
          console.log('touhou');
          console.log(post.rating);
  
        }
      }
    }

  })
    
}
else if (typeof(arg2) === "undefined" && typeof(arg3) === "undefined"){

  Booru.search('gelbooru', [arg1 + ' ' + 'rating:safe ' + ' -bondage'    ], { limit: 1, random: true })
  
  .then(posts => {
    for (let post of posts){
      if (post.tags.includes('touhou')){
        message.channel.send(post.fileUrl);
        message.channel.send('СуКа ОпЯтЬ ТоХо в ЧаТе')
        console.log(post.tags);
        console.log(post.rating);
      }
       else if (post.tags.includes('nyamota')){
        //message.channel.send(post.fileUrl);
        message.channel.send('https://cdn.discordapp.com/attachments/791804196709335081/885795767539880001/unknown.png')
        console.log(post.tags);
        console.log(post.rating);
      }
      else if (post.tags.includes('guro')){
        //message.channel.send(post.fileUrl);
        message.channel.send('https://www.meme-arsenal.com/memes/5b4dbfda16fc4cce35b280a80a1f6c89.jpg  ')
        console.log(post.tags);
        console.log(post.rating);
      }
     else if (post.rating.includes('q') ||post.rating.includes('e') ){
message.channel.send({
        files: [{
           attachment: post.fileUrl,
           name: "SPOILER_FILE.jpg"
        }]
     })        //message.channel.send('СуКа ОпЯтЬ ТоХо в ЧаТе') 
        console.log(post.tags);
        console.log(post.rating);
  
      }
        else if (post.tags.includes('nyamota')){
        //message.channel.send(post.fileUrl);
        message.channel.send('https://cdn.discordapp.com/attachments/791804196709335081/885795767539880001/unknown.png')
        console.log(post.tags);
        console.log(post.rating);
      }
      else if (post.tags.includes('guro')){
        //message.channel.send(post.fileUrl);
        message.channel.send('https://www.meme-arsenal.com/memes/5b4dbfda16fc4cce35b280a80a1f6c89.jpg  ')
        console.log(post.tags);
        console.log(post.rating);
      }
      else {
        message.channel.send(post.fileUrl);
        console.log(post.tags);
        if (post.tags.includes['touhou']){
          console.log('touhou');
          console.log(post.rating);
  
        }
      }
    }

  })
    
}
else if (typeof(arg3) === "undefined"){

  Booru.search('gelbooru', [arg1 + ' ' + arg2 + ' ' + 'rating:safe ' + ' -bondage'   ], { limit: 1, random: true })
  
  .then(posts => {
    for (let post of posts){
      if (post.tags.includes('touhou')){
        message.channel.send(post.fileUrl);
        message.channel.send('СуКа ОпЯтЬ ТоХо в ЧаТе')
        console.log(post.tags);
        console.log(post.rating);
      }
       else if (post.tags.includes('nyamota')){
        //message.channel.send(post.fileUrl);
        message.channel.send('https://cdn.discordapp.com/attachments/791804196709335081/885795767539880001/unknown.png')
        console.log(post.tags);
        console.log(post.rating);
      }
      else if (post.tags.includes('guro')){
        //message.channel.send(post.fileUrl);
        message.channel.send('https://www.meme-arsenal.com/memes/5b4dbfda16fc4cce35b280a80a1f6c89.jpg  ')
        console.log(post.tags);
        console.log(post.rating);
      }
    else if (post.rating.includes('q') ||post.rating.includes('e') ){
message.channel.send({
        files: [{
           attachment: post.fileUrl,
           name: "SPOILER_FILE.jpg"
        }]
     })        //message.channel.send('СуКа ОпЯтЬ ТоХо в ЧаТе') 
        console.log(post.tags);
        console.log(post.rating);
  
      }
       
      else {
        message.channel.send(post.fileUrl);
        console.log(post.tags);
        if (post.tags.includes['touhou']){
          console.log('touhou');
          console.log(post.rating);
  
        }
      }
    }

  })
    
}
else {

  Booru.search('gelbooru', [arg1 + ' ' + arg2 + ' ' + arg3 + ' ' + ' -bondage'   ], { limit: 1, random: true })
  
  .then(posts => {
    for (let post of posts){
      if (post.tags.includes('touhou')){
        message.channel.send(post.fileUrl);
        message.channel.send('СуКа ОпЯтЬ ТоХо в ЧаТе')
        console.log(post.tags);
        console.log(post.rating);
      }
       else if (post.tags.includes('nyamota')){
        //message.channel.send(post.fileUrl);
        message.channel.send('https://cdn.discordapp.com/attachments/791804196709335081/885795767539880001/unknown.png')
        console.log(post.tags);
        console.log(post.rating);
      }
      else if (post.tags.includes('guro')){
        //message.channel.send(post.fileUrl);
        message.channel.send('https://www.meme-arsenal.com/memes/5b4dbfda16fc4cce35b280a80a1f6c89.jpg  ')
        console.log(post.tags);
        console.log(post.rating);
      }
    else if (post.rating.includes('q') ||post.rating.includes('e') ){
message.channel.send({
        files: [{
           attachment: post.fileUrl,
           name: "SPOILER_FILE.jpg"
        }]
     })        //message.channel.send('СуКа ОпЯтЬ ТоХо в ЧаТе') 
        console.log(post.tags);
        console.log(post.rating);
  
      }
       
      else {
        message.channel.send(post.fileUrl);
        console.log(post.tags);
        if (post.tags.includes['touhou']){
          console.log('touhou');
          console.log(post.rating);
  
        }
      }
    }

  

  })
}
  if (typeof(arg1) === "undefined" && typeof(arg2) === "undefined"){

  Booru.search('gelbooru', [ ' -bondage' + '-furry'   ], { limit: 1, random: true })
  
  .then(posts => {
    for (let post of posts){
      if (post.tags.includes('touhou')){
        message.channel.send(post.fileUrl);
        message.channel.send('СуКа ОпЯтЬ ТоХо в ЧаТе')
        console.log(post.tags);
        console.log(post.rating);
      }
      else if (post.tags.includes('nyamota')){
        //message.channel.send(post.fileUrl);
        message.channel.send('https://cdn.discordapp.com/attachments/791804196709335081/885795767539880001/unknown.png')
        console.log(post.tags);
        console.log(post.rating);
      }
      else if (post.tags.includes('guro')){
        //message.channel.send(post.fileUrl);
        message.channel.send('https://www.meme-arsenal.com/memes/5b4dbfda16fc4cce35b280a80a1f6c89.jpg  ')
        console.log(post.tags);
        console.log(post.rating);
      }
     else if (post.rating.includes('q') ||post.rating.includes('e') ){
message.channel.send({
        files: [{
           attachment: post.fileUrl,
           name: "SPOILER_FILE.jpg"
        }]
     })        //message.channel.send('СуКа ОпЯтЬ ТоХо в ЧаТе') 
        console.log(post.tags);
        console.log(post.rating);
  
      }
         
      else {
//        message.channel.send(post.fileUrl);
        console.log(post.tags);
        if (post.tags.includes['touhou']){
          console.log('touhou');
          console.log(post.rating);
  
        }
      }
    }

  })
  }
    
}

else if(command === 'randrika'){
  //const booru = new Booru()
  Booru.search('gelbooru', ['furude_rika '   +  ' -bondage'   ], { limit: 1, random: true })
  .then(posts => {
    for (let post of posts){
    //  console.log(post.fileUrl, post.postView)
       if (post.tags.includes('nyamota')){
        //message.channel.send(post.fileUrl);
        message.channel.send('https://cdn.discordapp.com/attachments/791804196709335081/885795767539880001/unknown.png')
        console.log(post.tags);
        console.log(post.rating);
      }
       else if (post.tags.includes('guro')){
        //message.channel.send(post.fileUrl);
        message.channel.send('https://www.meme-arsenal.com/memes/5b4dbfda16fc4cce35b280a80a1f6c89.jpg  ')
        console.log(post.tags);
        console.log(post.rating);
      }
   else if (post.rating.includes('q') || (post.rating.includes('e'))){
      const attachment = new MessageAttachment(
        post.fileUrl
         
      )
      message.channel.send(attachment);
      //message.channel.send('СуКа ОпЯтЬ ТоХо в ЧаТе') 
      console.log(post.tags);
      console.log(post.rating);

    }
     else if (post.tags.includes('nyamota')){
        //message.channel.send(post.fileUrl);
        message.channel.send('https://cdn.discordapp.com/attachments/791804196709335081/885795767539880001/unknown.png')
        console.log(post.tags);
        console.log(post.rating);
      }
      else if (post.tags.includes('guro')){
        //message.channel.send(post.fileUrl);
        message.channel.send('https://www.meme-arsenal.com/memes/5b4dbfda16fc4cce35b280a80a1f6c89.jpg  ')
        console.log(post.tags);
        console.log(post.rating);
      }
    else {
      message.channel.send({
        files: [{
           attachment: post.fileUrl,
           name: "FILE.jpg"
        }]
     })
           console.log(post.tags);
      if (post.tags.includes['touhou']){
        console.log('touhou');
        console.log(post.rating);

      }
    }

  }
  }
)}

  else  if (command === 'my_pfp') {
          
          if (args[0]) {
            const user = getUserFromMention(args[0]);
            if (!user) {
              return message.reply('Please use a proper mention if you want to see someone elses avatar.');
            }
      
            return message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
          }
      
          return message.channel.send(`${message.author.username}, your avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
        }
        else  if (command === 'ratewaifu') {
          
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
        }
    else if (command === 'сока' || command === 'soku') {
        // Send the user's avatar URL
        const attachment = new MessageAttachment('https://cdn.discordapp.com/attachments/856268706106966027/856275988652228608/unknown.png');
        message.channel.send(attachment);

      }
      else if (command === 'демон' || command === 'demon') {
        // Send the user's avatar URL
        nouns = ["лорд ", "демон ","убийца ","агент ", "дух ","мертвец ","ангел ","дракон ","архонт ", "рыцарь ","гладиатор ", "квазар ", "пульсар ", "зомби", "ниндзя", "адвокат "];
        adjectives = ["демонический ", "мёртвый ","падший ","божественный ","ангельский ", "лютый ", "современный ", "бессмертный ", "бинауральный "];
        adjectives_end_female = ["смерти ",  "преисподней ","души ","жизни ","погибели ","жестокости ","дезинтеграции ","магии ","энергетики ","энергии ", 'души ', "молнии ", "пустоты "];
        adjectives_end_male = ["мрака ", "грома", "влияния ", "ада ", "рая "];
        adjectives_end_multi = ["веществ", "грибов", "трипов", "вкидов"]
        adjectives_preend_female = [ "мёртвой ", "демонической " , "божественной ","падшей " ,"ангельской ", ]
        adjectives_preend_male = [ "мёртвого", "демонического", "божественного" , "падшего " , "ангельского "]
        adjectives_preend_multi = ["странных", 'демонических']
        numbers = [1,2,3,4,5,6,7,8,9  ]
        preefix = ['Полу','Полу','Полу','Полу','Полу', 'Мега', "Гипер", "Терра", "Сверх", "Омега", "Ультра", "Альфа", "Крово", "Анти"]

        var rand1 = Math.floor(Math.random() * nouns.length);
        var rand2 = Math.floor(Math.random() * adjectives.length);
        var rand3 = Math.floor(Math.random() * adjectives_end_male.length);
        var rand4 = Math.floor(Math.random() * adjectives_end_female.length);
        var rand5 = Math.floor(Math.random() * adjectives_preend_female.length);
        var rand6 = Math.floor(Math.random() * adjectives_preend_male.length);
        var rand7 = Math.floor(Math.random() * numbers.length);
        var rand8 = Math.floor(Math.random() * adjectives_end_multi.length);
        var rand9 = Math.floor(Math.random() * adjectives_preend_multi.length);
        var rand10 = Math.floor(Math.random() * preefix.length);

                if ( numbers[rand7] === 1)
                {
        var content = adjectives[rand2]  + nouns[rand1] + adjectives_preend_female[rand5] + adjectives_end_female[rand4]  ;
        console.log('number[array] === 1, algorithm =' + rand2 + " "  + rand1 + " " + rand5 + " " + rand4);
        if (content === "undefined")
        { 
          var content = '😈';
        }
                }
              else  if ( numbers[rand7] === 2)
                {
        var content = adjectives[rand2]  + nouns[rand1] + adjectives_preend_male[rand6] + " " + adjectives_end_male[rand3]  ;
        console.log('number[array] === 2, algorithm =' + rand2 + " " + rand1 + " " + rand6 +  " " + rand3);
        if (content === "undefined")
                  { 
                    var content = '😈';
                  }
                }
                else  if ( numbers[rand7] === 3)
                {
        var content = adjectives[rand2]  + nouns[rand1] + adjectives_preend_multi[rand9] + " " + adjectives_end_multi[rand8]  ;
        console.log('number[array] === 3, algorithm =' + rand2 + " "  + rand1 + " " + rand9  + " " + rand8);
        if (content === "undefined")
        { 
          var content = '😈';
        }
                }
                else if ( numbers[rand7] === 4 )
                {
                  var content = adjectives[rand2]  + nouns[rand1];
                  console.log('number[array] === 4, algorithm =' +  rand2 + " "    + rand1);
                  if (content === "undefined")
                  { 
                    var content = '😈';
                  }
                }
                else if (numbers[rand7] === 5)
                {
                  var content = nouns[rand1];
                  console.log('number[array] === 5, algorithm ='  + rand1);
                  if (content === "undefined")
                  { 
                    var content = '😈';
                  }
                }
                else if ( numbers[rand7] === 6)
                {
        var content = preefix[rand10] + adjectives[rand2]  + nouns[rand1] + adjectives_preend_female[rand5] + adjectives_end_female[rand4]  ;
        console.log('number[array] === 6, algorithm =' + rand10 + " " + rand2 + " "  + rand1 + " " + rand5 + " " + rand4);
        if (content === "undefined")
        { 
          var content = '😈';
        }
                }
              else  if ( numbers[rand7] === 7)
                {
        var content = preefix[rand10] + adjectives[rand2]  + nouns[rand1] + adjectives_preend_male[rand6] + " " + adjectives_end_male[rand3]  ;
        console.log('number[array] === 7, algorithm =' + rand10 + " " + rand2 + " "  + rand1 + " " + rand6 + " " + rand3);
        if (content === "undefined")
        { 
          var content = '😈';
        }
                }
                else  if ( numbers[rand7] === 8)
                {
        var content = preefix[rand10] + adjectives[rand2]  + nouns[rand1] + adjectives_preend_multi[rand9] + " " + adjectives_end_multi[rand8]  ;
                  if (content === "undefined")
                  { 
                    var content = '😈';
                  }
        console.log('number[array] === 8, algorithm =' + rand10 +" " + rand2 + " "  + rand1 + " " + rand9 + " " + rand8);

                }
                else  if ( numbers[rand7] === 9)
                {
        var content =  adjectives[rand2]  + preefix[rand10] +nouns[rand1] + adjectives_preend_multi[rand9] + " " + adjectives_end_multi[rand8]  ;
                  if (content === "undefined")
                  { 
                    var content = '😈';
                  }
        console.log('number[array] === 9, algorithm =' + rand2 + " " + rand10 + " "  + rand1 + " " + rand9 + " " + rand8);

                }
        message.channel.send(`${content}`);

      }
      else if (command === "nep") {
        anek = ["Компа звонит Иффи по телефону:\n — У меня компьютер не работает\n  — А кнопочку такую большую нажимала? \n — Нажимала \n — А шнур в розетку воткнут? \n  — Сейчас возьму фонарик, посмотрю...  \n — А фонарик зачем? \n — Да электричества нет..."
          
         , "Летят солдаты Планептуна в самолете, выходит к ним Иффи и говорит: \n- Парни, все летим штурмовать базу ASIC. \n Парни помрачнели так... Но Иффи продолжает:\n- Но за голову каждого убитого педофила будем выплачивать премию - 1000 кредитов!\nСамолет заходит на посадку, солдаты врассыпную. Иффи в одиночестве, раскрыв рот, стоит возле самолета. Через 30 минут солдаты возвращаются, тащат связки голов. Иффи падает в обморок:\n- Вы чё охуели? Мы в Луви сели на дозаправку"]
        var rand1 = Math.floor(Math.random() * anek.length);
        var content = anek[rand1]
        message.channel.send(`${content}`);

      }
      else if (command === 'кринжанул' || command === 'cringe') {
        // Send the user's avatar URL
        const attachment = new MessageAttachment('https://media.tenor.com/images/6076694ca675781d4eb52e1cc4fde8de/tenor.gif');
        message.channel.send(attachment);

      }
      else if (command === 'Юкари' || command === 'Yukari') {
        // Send the user's avatar URL
        const attachment = new MessageAttachment('https://cdn.discordapp.com/attachments/694949517849526353/887418126885584996/unknown.png');
        message.channel.send(attachment);

      }
        else if (command === 'you' || command === 'ты') {
        // Send the user's avatar URL 
      //  const attachment = new MessageAttachment();
        message.channel.send('https://media.discordapp.net/attachments/791804196709335081/825055586248818699/unknown.png?width=360&height=202');

      }
       
    /* else if  (command === "img")      {
        // Split message to search image
        let splitWord = message.toString().split(" ");
        let searchWrd = "";
        let googKey   = config.googleKey;
        let cxKey     = config.cx;
    
        // Loop through incase of multiple word search
        for( var i = 1; i < splitWord.length; i++)
        {
          if(i > 1)
          {
            searchWrd = searchWrd + " ";
          }
    
          searchWrd = searchWrd + splitWord[i];
        }
    
        let page = 1;
    
        request("https://www.googleapis.com/customsearch/v1?key=" + googKey + "&cx=" + cxKey + "&q=" + searchWrd + "&searchType=image&alt=json&num=10&start="+page, function(err, res, body) {
          let data;
    
          try {
            data = JSON.parse(body);
          } catch (error) {
            console.log(error)
            return;
          }
    
          if(!data){
            console.log(data);
            message.channel.sendMessage( "Error:\n" + JSON.stringify(data));
            return;
          } else if (!data.items || data.items.length == 0){
            console.log(data);
            message.channel.sendMessage( "No result for '" + args + "'");
            return;
          }
          // Get random number
          let ranNum = Math.floor(Math.random() * data.items.length);
          let randResult = data.items[ranNum];
          message.channel.sendMessage( randResult.title + '\n' + randResult.link);
        });
      }
     if (message.content.startsWith(prefix + "youtube"))
  {
    // Split message to search image
    let splitWord = message.toString().split(" ");
    let searchWrd = "";
    this.youtube = new youtube_node();
    this.youtube.setKey(config.googleKey);
    this.youtube.addParam('type', 'video');

    // Loop through incase of multiple word search
    for( var i = 1; i < splitWord.length; i++)
    {
      if(i > 1)
      {
        searchWrd = searchWrd + " ";
      }

      search`xWrd = searchWrd + splitWord[i];
    }

    this.youtube.search(searchWrd, 1, function(error, result) {
      if (error)
      {
        console.log(error);
        message.channel.sendMessage("¯\\_(ツ)_/¯");
      }
      else {
        if (!result || !result.items || result.items.length < 1)
        {
          message.channel.sendMessage("¯\\_(ツ)_/¯");
        } else {
          // Get random number
          let ranNum = Math.floor(Math.random() * result.items.length);
          let randResult = result.items[ranNum].id.videoId;
          message.channel.sendMessage("http://www.youtube.com/watch?v=" + randResult);
        }
      }
    });
  }
  if (message.content.startsWith(prefix + "youtube"))
  {
    // Split message to search image
    let splitWord = message.toString().split(" ");
    let searchWrd = "";
    this.youtube = new youtube_node();
    this.youtube.setKey(config.googleKey);
    this.youtube.addParam('type', 'video');

    // Loop through incase of multiple word search
    for( var i = 1; i < splitWord.length; i++)
    {
      if(i > 1)
      {
        searchWrd = searchWrd + " ";
      }

      searchWrd = searchWrd + splitWord[i];
    }

    this.youtube.search(searchWrd, 1, function(error, result) {
      if (error)
      {
        console.log(error);
        message.channel.sendMessage("¯\\_(ツ)_/¯");
      }
      else {
        if (!result || !result.items || result.items.length < 1)
        {
          message.channel.sendMessage("¯\\_(ツ)_/¯");
        } else {
          // Get random number
          let ranNum = Math.floor(Math.random() * result.items.length);
          let randResult = result.items[ranNum].id.videoId;
          message.channel.sendMessage("http://www.youtube.com/watch?v=" + randResult);
        }
      }
    });
  }   */
       }
       });
  const status = queue =>
	`Volume: \`${queue.volume}%\` | Filter: \`${queue.filters.join(', ')
		|| 'Off'}\` | Loop: \`${
		queue.repeatMode
			? queue.repeatMode === 2
				? 'All Queue'
				: 'This Song'
			: 'Off'
	}\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``

// DisTube event listeners, more in the documentation page
client.distube
	.on('playSong', (queue, song) =>
		queue.textChannel.send(
			`Playing \`${song.name}\` - \`${
				song.formattedDuration
			}\`\nRequested by: ${song.user}\n${status(queue)}`,
		))
	.on('addSong', (queue, song) =>
		queue.textChannel.send(
			`Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`,
		))
	.on('addList', (queue, playlist) =>
		queue.textChannel.send(
			`Added \`${playlist.name}\` playlist (${
				playlist.songs.length
			} songs) to queue\n${status(queue)}`,
		))
	// DisTubeOptions.searchSongs = true
	.on('searchResult', (message, result) => {
		let i = 0
		message.channel.send(
			`**Choose an option from below**\n${result
				.map(
					song =>
						`**${++i}**. ${song.name} - \`${
							song.formattedDuration
						}\``,
				)
				.join(
					'\n',
				)}\n*Enter anything else or wait 30 seconds to cancel*`,
		)
	})
	// DisTubeOptions.searchSongs = true
	.on('searchCancel', message => message.channel.send(`Searching canceled`))
	.on('searchInvalidAnswer', message =>
		message.channel.send(`searchInvalidAnswer`))
	.on('searchNoResult', message => message.channel.send(`No result found!`))
	.on('error', (textChannel, e) => {
		console.error(e)
		textChannel.send(`An error encountered: ${e.slice(0, 2000)}`)
	})
	.on('finish', queue => queue.textChannel.send('Finish queue!'))
	.on('finishSong', queue => queue.textChannel.send('Finish song!'))
	.on('disconnect', queue => queue.textChannel.send('Disconnected!'))
	.on('empty', queue => queue.textChannel.send('Empty!'))
  .on("error", (channel, error) => {
      console.log(error);
    })
  //.on('skip', queue => queue.)

