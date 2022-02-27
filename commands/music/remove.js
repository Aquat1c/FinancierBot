module.exports = {
    name: 'remove',
    aliases: ['to track'],
    utilisation: '{prefix}remove',
    voiceChannel: true,

    async execute(client, message, args) {
        
        const queue = player.getQueue(message.guild.id);
        const trackPosition = parseInt(args);
        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? ❌`);

          if (!args[0]) return message.channel.send(`Please enter a valid track position ${message.author}... try again ? ❌`);

        await queue.remove(trackPosition-1);

        message.channel.send(`Removed the ${trackPosition} track ✅`);
    },
};