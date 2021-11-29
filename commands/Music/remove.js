module.exports = {
    name: 'remove',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}remove',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.distube.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

            const queue = client.distube.getQueue(message);
            queue.songs.splice(Number(args[0]))
            return message.channel.send(` Removed **${args[0]}** From Queue`);

        if (success) message.channel.send(`${client.emotes.success} - The current music has just been **removed** !`);
    },
};