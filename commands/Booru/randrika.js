const Booru = require('booru')

module.exports = {
    name: 'randrika',
    aliases: ['rika', 'randrika'],
    category: 'Arts',
    utilisation: '{prefix} randrika',

    execute(client, message, args) {
    
  Booru.search('kc', ['furude_rika '   +  ' -bondage'   ], { limit: 1, random: true })
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
      message.channel.send({
        files: [{
           attachment: post.fileUrl,
           name: "SPOILER_FILE.jpg"
        }]
     })    
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
    };   