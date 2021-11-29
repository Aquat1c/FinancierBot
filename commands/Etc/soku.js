
module.exports = {
    name: 'soku',
    aliases: ['soku'],
    category: 'Etc',
    utilisation: '{prefix} soku',

execute(client, message, args) {

  //const attachment =();
   message.channel.send({
        files: [{
           attachment: ('https://cdn.discordapp.com/attachments/856268706106966027/856275988652228608/unknown.png'),
           name: "FILE.jpg"
        }]
     })
        //message.channel.send(attachment);
},
    };