module.exports = {
    name: 'retard',
    aliases: ['retard'],
    category: 'Etc',
    utilisation: '{prefix} retard @user',

execute(client, message, args) {
 function getUserFromMention(mention) {
  const matches = mention.match(/^<@!?(\d+)>$/);

  if (!matches) return;

  
  const id = matches[1];

  return client.users.cache.get(id);
}
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
},

    };