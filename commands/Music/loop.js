module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.distube.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.distube.getQueue(message).loopMode) {
                client.distube.setLoopMode(message, false);
                return message.channel.send(`${client.emotes.success} - Repeat mode **disabled** !`);
            } else {
                client.distube.setLoopMode(message, true);
                return message.channel.send(`${client.emotes.success} - Repeat mode **enabled** the whole queue will be repeated endlessly !`);
            };
        } else {
            if (client.distube.getQueue(message).repeatMode) {
                client.distube.setRepeatMode(message, false);
                return message.channel.send(`${client.emotes.success} - Repeat mode **disabled** !`);
            } else {
                client.distube.setRepeatMode(message, true);
                return message.channel.send(`${client.emotes.success} - Repeat mode **enabled** the current music will be repeated endlessly !`);
            };
            
        };
    },
};