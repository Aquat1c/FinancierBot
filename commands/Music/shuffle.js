module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    category: 'Music',
    utilisation: '{prefix}shuffle',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.distube.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        const success = client.distube.shuffle(message);

        if (success) message.channel.send(`${client.emotes.success} - Queue shuffled **${client.distube.getQueue(message).tracks.length}** song(s) !`);
    },
};