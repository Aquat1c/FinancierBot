const Booru = require('booru')

module.exports = {
    name: 'booru',
    aliases: ['booru'],
    category: 'Arts',
    utilisation: '{prefix}booru [filter name]',

    execute(client, message, args) {
   
{
  //const booru = new Booru()
  

  let arg1 = args[0];
  let arg2 = args[1];
  let arg3 = args[2]

  console.log('arg1= ' + arg1 + ' arg2 = ' + arg2 + 'arg3= ' + arg3);

  //let arg3 = args[2];
  if (typeof(arg1) === "undefined" && typeof(arg2) === "undefined" && typeof(arg3) === "undefined"){

  Booru.search('kc', ['rating:safe ' + ' -bondage'   ], { limit: 1, random: true })
  
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

  Booru.search('kc', [arg1 + ' ' + 'rating:safe ' + ' -bondage'    ], { limit: 1, random: true })
  
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

  Booru.search('kc', [arg1 + ' ' + arg2 + ' ' + 'rating:safe ' + ' -bondage'   ], { limit: 1, random: true })
  
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

  Booru.search('kc', [arg1 + ' ' + arg2 + ' ' + arg3 + ' ' + ' -bondage'   ], { limit: 1, random: true })
  
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

  Booru.search('kc', [ ' -bondage' + '-furry'   ], { limit: 1, random: true })
  
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


    },
    };
