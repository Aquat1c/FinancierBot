module.exports = {
    name: 'queue',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message) {
              const queue = client.distube.getQueue(message);

      if (!queue) {
            message.channel.send('Nothing playing right now!')
          }
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);


        if (!client.distube.getQueue(message)) return message.channel.send(`${client.emotes.error} - No songs currently playing !`);

        message.channel.send(`**Server queue - ${message.guild.name} ${client.emotes.queue} ${client.distube.getQueue(message).loopMode ? '(looped)' : ''}**\nCurrent : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.songs.map((song, i) => {
            return `**#${i + 1}** - ${song.title} | ${song.author} (requested by : ${songs.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.songs.length > 5 ? `And **${queue.songs.length - 5}** other songs...` : `In the playlist **${queue.songs.length}** song(s)...`}`));
    },
};