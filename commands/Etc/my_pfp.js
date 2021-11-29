module.exports = {
    name: 'my_pfp',
    aliases: ['my_pfp'],
    category: 'Etc',
    utilisation: '{prefix} my_pfp @user',

execute(client, message, args) {
  if (args[0]) {
     function getUserFromMention(mention) {
  const matches = mention.match(/^<@!?(\d+)>$/);

  if (!matches) return;

  
  const id = matches[1];

  return client.users.cache.get(id);
}
            const user = getUserFromMention(args[0]);
            if (!user) {
              return message.reply('Please use a proper mention if you want to see someone elses avatar.');
            }
      
            return message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
          }
      
          return message.channel.send(`${message.author.username}, your avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
},
    };